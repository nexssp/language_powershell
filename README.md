# PowerShell implementation for Nexss PROGRAMMER 2.0

Powershell implementation for Nexss Programmer.

## Nexss Programmer Examples

```ps1
nexss file add myprogram.ps1
nexss myprogram.ps1 # execute script
nexss myprogram.js # execute NodeJS
nexss myprogram.py # execute Python.. etcetc..
```

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
