while ($true) {
    Start-Sleep -Seconds 5
    $status = git status --porcelain
    if ($status) {
        git add .
        $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        git commit -m "Auto-commit on save: $timestamp"
        git push
    }
}
