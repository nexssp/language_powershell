# Nexss PROGRAMMER 2.0.0 - PowerShell
# Default template for JSON Data
# STDIN
[Console]::OutputEncoding = [Text.UTF8Encoding]::UTF8
[Console]::InputEncoding = [Text.UTF8Encoding]::UTF8
$NexssStdin = $input

$NexssStdout = $NexssStdin | ConvertFrom-Json

# Modify Data
$NexssStdout | Add-Member -Force -NotePropertyMembers @{PowerShellOutput = "OutputFromPowershell" + $PSVersionTable.PSVersion }


# STDOUT
Write-Host (ConvertTo-Json -Compress $NexssStdout)
