# PowerShell - Nexss PROGRAMMER 2.0

## Examples

```ps1
(Get-Location).path #current working directory (location of command run)
($pwd).path
echo $MyInvocation.MyCommand.Path # script file path
echo $PSScriptRoot # script root

$filebase = Join-Path $PSScriptRoot $testFilename
$PSScriptRoot #
```
