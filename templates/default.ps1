# Nexss PROGRAMMER 2.0.0 - PowerShell
# Default template for JSON Data
# STDIN
[Console]::OutputEncoding = [Text.UTF8Encoding]::UTF8

$NexssStdin = $input
$NexssStdout = $NexssStdin | ConvertFrom-Json




$NexssStdout | Add-Member -Force -NotePropertyMembers  @{test = "test" }
# STDOUT
Write-Host 	(ConvertTo-Json $NexssStdout)
