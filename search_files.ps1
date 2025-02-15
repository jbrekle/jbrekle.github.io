param (
    [string[]]$extensions,
    [string]$subfolder = "."  # Standardwert: aktuelles Verzeichnis
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
$searchPath = Resolve-Path -Path $subfolder -ErrorAction Stop  # Fehler, wenn der Ordner nicht existiert
$skipFolderPaths = $skipFolders | ForEach-Object {
    $fullPath = Join-Path (Get-Location) $_  # Macht aus "dist" -> "C:\projekt\dist"
    $fullPath
}

# 3) Dateien rekursiv auflisten und filtern
$files = Get-ChildItem -Path $searchPath -Recurse -File | Where-Object {
    # Sicherstellen, dass wir nur gültige Objekte haben
    if (-not $_ -or -not $_.FullName) { return $false }

    # Hat die Datei eine der gewünschten Endungen?
    if ($filters -notcontains ("*." + $_.Extension.TrimStart('.'))) {
        return $false
    }

    # Liegt die Datei in einem der auszuschließenden Pfade?
    $dir = $_.DirectoryName
    if (-not $dir) { return $true } # Kein Verzeichnis? Unwahrscheinlich, aber dann zulassen.

    foreach ($skipPath in $skipFolderPaths) {
        if ($dir.StartsWith($skipPath, $true, [System.Globalization.CultureInfo]::InvariantCulture)) {
            return $false  # Datei ignorieren, sobald ein Skip-Ordner passt
        }
    }

    return $true
}

# 4) Ausgabe: Dateiname RELATIV zum Suchordner und Inhalt
foreach ($file in $files) {
    $relativePath = $file.FullName.Substring($searchPath.Path.Length + 1)  # Relative Ausgabe
    Write-Output "// content-start Filename: $relativePath"
    Get-Content $file.FullName
    Write-Output "// content-end Filename: $relativePath"
    Write-Output ""
}
