# Nexss PROGRAMMER 2.0.0 - PowerShell
# Default template for JSON Data
# STDIN FIXME: FIX utf-8
$NexssStdin = $input

$NexssStdout = $NexssStdin | ConvertFrom-Json

# Modify Data
$NexssStdout | Add-Member -NotePropertyMembers @{test = "test" }

# STDOUT
Write-Host (ConvertTo-Json $NexssStdout)
