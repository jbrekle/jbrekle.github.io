param()

# Dieses Skript:
# 1) Liest den gesamten Inhalt aus der Zwischenablage.
# 2) Sucht nach Start-/End-Markern "// content-start Filename: ..." und "// content-end Filename: ...".
# 3) Erstellt oder überschreibt Dateien mit dem gefundenen Inhalt zwischen den Markern.
#
# Anwendung:
# 1) Kopiere den gewünschten Text (mit content-start und content-end) in die Zwischenablage.
# 2) Führe dieses Skript aus:
#       .\write_files_from_clipboard.ps1
#
# Beispiel-Inhalt in der Zwischenablage:
# // content-start Filename: x.js
# console.log('testx');
# // content-end Filename: x.js
# // content-start Filename: y.js
# console.log('testy');
# // content-end Filename: y.js

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

    #Write-Output "line $line"
    # Prüfen, ob es sich um einen content-start handelt
    if ($line -match $startPattern) {
        #Write-Output "startPattern detected"
        # Dateiname aus dem Match holen

        $currentFile = $Matches[1].Trim()
        Write-Output "currentFile $currentFile"
        # Inhalt neu anfangen
        $contentLines = @()
        continue
    }

    # Prüfen, ob es sich um einen content-end handelt
    if ($line -match $endPattern) {
        $endFile = $Matches[1].Trim()
        #Write-Output "endPattern detected"

        # Nur wenn der end-Dateiname zum aktuellen passt, schreiben wir die Datei
        if ($currentFile -and ($endFile -eq $currentFile)) {
            # Datei erstellen / überschreiben
            Set-Content -Path $currentFile -Value $contentLines
            #Write-Output "would write $contentLines"
            Write-Output "wrote $currentFile"
        } else {
            Write-Output "end file name mismatch currentFile $currentFile endFile $endFile"
        }

        # Reset, damit wir ggf. weitere Dateien erkennen können
        $currentFile = $null
        $contentLines = @()
        continue
    }

    # Befinden wir uns innerhalb einer content-start ... content-end Sektion?
    if ($currentFile) {
        #Write-Output "^ is a content line"
        # chatgpt has a filetype indicator, we ignore it
        if(-not ($line.StartsWith("``````"))){
            $contentLines += $line
        }
    }
}

Write-Output "all done"
