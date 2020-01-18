# Color your text output
Write-Host "Welcome to Cheat Sheet Nexss Programmer's for PowerShell" -ForegroundColor Green

# Predefined
Write-Host "PSScriptRoot: $PSScriptRoot"

# Check Rights
# if (-NOT ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
#     write-Warning "This setup needs admin permissions. Please run this file as admin."     
#     break
# }

# Folder exists
# if (Test-Path $folder) { }

# If command exists
if (Get-Command node -errorAction SilentlyContinue) {
    $nodeVersion = (node -v)
}

# Download file
Write-Host "Downloading file" -ForegroundColor Green
$source = "https://www.nexss.com/images/Nexss.png"
$destination = "Nexss.png"
$webClient = New-Object System.Net.WebClient
$webClient.DownloadFile($source, $destination)

# Run Executables
# Notepad.exe | Out-Null # It will wait until you exit NotePad.exe
# Start-Process -NoNewWindow -Wait EXeFile.exe # -PassThru for echo output
# "notepad","calc","wmplayer" | ForEach-Object {Start-Process $_} | Wait-Process ;dir

# Read input from user
# $c = read-host "Delete install files ? [y/N]"
# if ($c -eq "y") { 

# }