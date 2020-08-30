# PowerShell implementation for Nexss PROGRAMMER 2.0

To Install Nexss Programmer please go to [Nexss Programmer CLI](https://github.com/nexssp/cli#readme) for more information.

## Nexss Programmer Examples

```ps1
nexss file add myprogram.ps1
nexss myprogram.ps1 # execute script
nexss myprogram.js # execute NodeJS
nexss myprogram.py # execute Python.. etcetc..
```

## Use multiple versions of Powershell

To use multiple powershell versions you can add at the top of the file # nexss-compiler tag eg.

### To use Powershell 5

```ps1
# nexss-compiler:Powershell
Write-Host "My current Powershell version: "$PSVersionTable.PSVersion.Major
```

### Other versions of Powershell 6, 7 

It depends what you have installed on your machine it will use it. Remove # nexss-compiler:Powershell as pwsh.exe is default compiler.

## Installation of latest Version of PowerShell

<https://github.com/PowerShell/PowerShell/blob/master/tools/install-powershell.ps1>

```ps1
iex "& { $(irm https://aka.ms/install-powershell.ps1) } -UseMSI -Preview"
```

## Useful links

[& Operator](https://ss64.com/ps/call.html)  
[Table of Basic PowerShell Commands](https://devblogs.microsoft.com/scripting/table-of-basic-powershell-commands/)

## Powershell Examples

```ps1
(Get-Location).path #current working directory (location of command run)
($pwd).path
echo $MyInvocation.MyCommand.Path # script file path
echo $PSScriptRoot # script root

$filebase = Join-Path $PSScriptRoot $testFilename
$PSScriptRoot #
```
