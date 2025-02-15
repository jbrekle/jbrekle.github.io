param (
    [string[]]$extensions,
    [string]$subfolder = "."  # Standardverzeichnis zum Durchsuchen
)

# Ordner ausschließen (relativ zum aktuellen Verzeichnis)
$skipFolders = @("dist", "node_modules")

# Falls keine Endungen übergeben wurden -> Hilfetext
if (-not $extensions -or $extensions.Count -eq 0) {
    Write-Error "Usage: search_files.ps1 <extension1> <extension2> ... [-subfolder <relative_path>]"
    exit 1
}

# 1) Endungen in *.ext umwandeln
$filters = $extensions | ForEach-Object { "*.$_" }

# 2) Suchpfad und absolute Pfade der zu ignorierenden Ordner berechnen
#    Wenn $subfolder nicht existiert, wirft Resolve-Path einen Fehler
$searchPath = Resolve-Path -Path $subfolder -ErrorAction Stop

# Wir holen uns das aktuelle Verzeichnis (CWD) als absoluten Pfad,
# um am Ende eine korrekte "relative" Ausgabe zu erzielen.
$cwdPath = (Get-Location).ProviderPath
# Falls $cwdPath z.B. "C:\Dev\MeineApp" ist, wird daraus ebenfalls
# "C:\Dev\MeineApp" ohne Slash am Ende (je nach PowerShell-Version).

# Pfade zu Skip-Foldern in absolute Form bringen
$skipFolderPaths = $skipFolders | ForEach-Object {
    $fullPath = Join-Path (Get-Location) $_
    $fullPath
}

# 3) Alle passenden Dateien rekursiv auflisten und filtern
$files = Get-ChildItem -Path $searchPath -Recurse -File | Where-Object {
    # Verhindern, dass wir NULL-Objekte untersuchen
    if (-not $_ -or -not $_.FullName) {
        return $false
    }

    # Prüfen, ob die Datei eine der gewünschten Endungen hat
    if ($filters -notcontains ("*." + $_.Extension.TrimStart('.'))) {
        return $false
    }

    # Prüfen, ob die Datei in einem der auszuschließenden Pfade liegt
    $dir = $_.DirectoryName
    if (-not $dir) { 
        # Wenn die Datei kein Verzeichnis hat (extrem unwahrscheinlich), nicht skippen
        return $true 
    }

    foreach ($skipPath in $skipFolderPaths) {
        # Vergleiche den Verzeichnispfad der Datei mit den Skip-Pfaden (Groß/Klein egal)
        if ($dir.StartsWith($skipPath, $true, [System.Globalization.CultureInfo]::InvariantCulture)) {
            return $false
        }
    }

    return $true
}
Write-Output "relevant code i already have: "
# 4) Ausgabe – Dateiname RELATIV zum CWD + Inhalt
foreach ($file in $files) {
    # Absoluten Pfad holen, z.B. "C:\Dev\MeineApp\src\utils\helper.js"
    $absoluteFilePath = $file.FullName

    # Standardmäßig gehen wir davon aus, dass $absoluteFilePath über dem CWD liegt
    $relativePath = $absoluteFilePath

    # Prüfen, ob $absoluteFilePath mit unserem CWD beginnt
    # => Dann geben wir ab CWD aus
    if ($absoluteFilePath.StartsWith($cwdPath, $true, [System.Globalization.CultureInfo]::InvariantCulture)) {
        # Wir kürzen die Länge des $cwdPath raus:
        $relativePath = $absoluteFilePath.Substring($cwdPath.Length)
        # Häufig führt das zu "\src\utils\helper.js" -> führende Backslashes entfernen
        $relativePath = $relativePath.TrimStart('\')
    }

    Write-Output "// content-start Filename: $relativePath"
    Get-Content $absoluteFilePath
    Write-Output "// content-end Filename: $relativePath"
    Write-Output ""
}

Write-Output "just emit the changed files, but be very precise, dont skip any implementation or leave it for later. dont skip comments, in places where the code is not self-speaking, like when drawing and styling. always implement everything fully. it can be huge, thats ok"
Write-Output "please emit in format:
// content-start Filename: filename.js
content...
// content-end Filename: filename.js

so the filecontent should begin and end with the filename. i need this for postprocessing. make sure to not emit files multiple times and dont mention files that remain unchanged.
"

Write-Output "task: "