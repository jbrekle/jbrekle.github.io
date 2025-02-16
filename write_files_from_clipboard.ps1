param(
    [string]$subfolder = ""
)

# Dieses Skript:
# 1) Liest den gesamten Inhalt aus der Zwischenablage.
# 2) Sucht nach Start-/End-Markern "// content-start Filename: ..." und "// content-end Filename: ...".
# 3) Erstellt bei Bedarf automatisch alle Unterordner, bevor es Dateien schreibt.
# 4) Schreibt die Dateien in das aktuelle Verzeichnis, oder in den angegebenen $subfolder.
# 5) Nutzt beim Schreiben UTF-8 Encoding, damit Unicode-Zeichen korrekt gesichert werden.

# Beispiel-Inhalt in der Zwischenablage:
# // content-start Filename: scripts/util/helper.js
# console.log('Hello from helper.js – äöüß!');
# // content-end Filename: scripts/util/helper.js

# 1) Vollständigen Inhalt aus der Zwischenablage holen (Raw, damit Zeilenumbrüche erhalten bleiben)
$allText = Get-Clipboard -Raw

# 2) In Zeilen aufsplitten
$lines = $allText -split "`r?`n"

# 3) Regex für Start und Ende definieren
$startPattern = '^\s*// content-start Filename:\s*(.+)$'
$endPattern   = '^\s*// content-end Filename:\s*(.+)$'

# 4) Variablen zum Sammeln der Daten
$currentFile = $null
$contentLines = @()

foreach ($line in $lines) {

    # Prüfen, ob es sich um einen content-start handelt
    if ($line -match $startPattern) {
        $currentFile = $Matches[1].Trim()
        Write-Output "currentFile $currentFile"
        # Inhalt neu anfangen
        $contentLines = @()
        continue
    }

    # Prüfen, ob es sich um einen content-end handelt
    if ($line -match $endPattern) {
        $endFile = $Matches[1].Trim()

        # Nur wenn der end-Dateiname zum aktuellen passt, schreiben wir die Datei
        if ($currentFile -and ($endFile -eq $currentFile)) {
            
            # Zusammensetzen des Zielpfads: ggf. subfolder + verschachtelte Dateipfade
            $targetFile = if ($subfolder) {
                Join-Path -Path $subfolder -ChildPath $currentFile
            } else {
                $currentFile
            }

            # Unterordner ggf. erstellen
            $targetDirectory = Split-Path -Path $targetFile -Parent
            if (-not (Test-Path $targetDirectory)) {
                New-Item -ItemType Directory -Path $targetDirectory -Force | Out-Null
            }

            # Datei erstellen / überschreiben mit UTF-8 Encoding
            Set-Content -Path $targetFile -Value $contentLines -Encoding UTF8
            Write-Output "wrote $targetFile (UTF-8)"
        }
        else {
            Write-Output "end file name mismatch currentFile $currentFile endFile $endFile"
        }

        # Reset, damit wir ggf. weitere Dateien erkennen können
        $currentFile = $null
        $contentLines = @()
        continue
    }

    # Befinden wir uns innerhalb einer content-start ... content-end Sektion?
    if ($currentFile) {
        # chatgpt hat manchmal filetype-markierungen wie "``````", wir ignorieren sie
        if (-not ($line.StartsWith("``````"))) {
            $contentLines += $line
        }
    }
}

Write-Output "all done"
