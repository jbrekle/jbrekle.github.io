param (
    [string[]]$extensions,
    [string]$subfolder = "."  # Standardverzeichnis zum Durchsuchen
)

# Name der Ordner, die übersprungen werden sollen (alle Vorkommen, auch tief)
$skipFolders = @("dist", "node_modules")

# Falls keine Endungen übergeben wurden -> Hilfetext
if (-not $extensions -or $extensions.Count -eq 0) {
    Write-Error "Usage: search_files.ps1 <extension1> <extension2> ... [-subfolder <relative_path>]"
    exit 1
}

# 1) Endungen normalisieren: z.B. "js", "cs", "txt"
#    => So können wir leichter vergleichen
$validExts = $extensions | ForEach-Object { $_.TrimStart('.').ToLower() }

# 2) Suchpfad auflösen (Fehler, falls er nicht existiert)
$searchPath = Resolve-Path -Path $subfolder -ErrorAction Stop

# Aktuelles Verzeichnis (CWD) als absoluten Pfad
$cwdPath = (Get-Location).ProviderPath

# 3) Alle passenden Dateien rekursiv auflisten und filtern
$files = Get-ChildItem -Path $searchPath -Recurse -File | Where-Object {
    # Verhindern, dass wir NULL-Objekte untersuchen
    if (-not $_ -or -not $_.FullName) {
        return $false
    }

    # Tatsächliche Dateiendung (ohne Punkt) in Kleinbuchstaben
    $fileExtension = $_.Extension.TrimStart('.').ToLower()

    # Gehört diese Endung zu unseren validen Endungen?
    if (-not ($validExts -contains $fileExtension)) {
        return $false
    }

    # Check, ob die Datei in "dist"/"node_modules" liegt -> dann skippen
    $dirLower = $_.DirectoryName.ToLower()
    foreach ($skip in $skipFolders) {
        # Falls "/dist/" oder "\dist\" usw. irgendwo auftaucht
        if ($dirLower -match "(?i)([\\/])$skip([\\/]|$)") {
            return $false
        }
    }

    return $true
}

Write-Output "relevant code i already have:"

# 4) Ausgabe: Dateiname RELATIV zum CWD + Inhalt
foreach ($file in $files) {
    $absoluteFilePath = $file.FullName
    $relativePath = $absoluteFilePath

    # Wenn $absoluteFilePath mit unserem $cwdPath beginnt, kürzen wir den Teil raus
    if ($absoluteFilePath.StartsWith($cwdPath, $true, [System.Globalization.CultureInfo]::InvariantCulture)) {
        $relativePath = $absoluteFilePath.Substring($cwdPath.Length)
        # Häufig entsteht dann ein führender Backslash – entfernen
        $relativePath = $relativePath.TrimStart('\','/')
    }

    # Ausgabe im gewünschten Marker-Format
    Write-Output "// content-start Filename: $relativePath"
    Get-Content $absoluteFilePath
    Write-Output "// content-end Filename: $relativePath"
    Write-Output ""
}

Write-Output "just emit the changed files, but be very precise, dont skip any implementation or leave it for later. dont skip comments, in places where the code is not self-speaking, like when drawing on a canvas or styling in css with non-obvious comands. always implement everything fully. it can be huge, thats ok"
Write-Output "please emit in format:
// content-start Filename: filename.js
content...
// content-end Filename: filename.js

so the filecontent should begin and end with the filename. i need this for postprocessing. make sure to not emit files multiple times and dont mention files that remain unchanged.
"
Write-Output "tasks: 
-"
