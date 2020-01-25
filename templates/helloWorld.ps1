# Nexss PROGRAMMER 2.0.0 - PowerShell
# Default template for JSON Data
# STDIN
[Console]::OutputEncoding = [Text.UTF8Encoding]::UTF8
$NexssStdin = $input

$NexssStdout = $NexssStdin | ConvertFrom-Json

# Modify Data
$NexssStdout | Add-Member -Force -NotePropertyMembers @{PowerShellOutput = "powershell Output " + $PSVersionTable.PSVersion }


# STDOUT
Write-Host (ConvertTo-Json $NexssStdout)
