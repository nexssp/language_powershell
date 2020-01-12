$csc = Get-ChildItem c:/windows/Microsoft.NET/Framework64/**/csc.exe | Sort-Object "Directory" | Select-Object -Property Directory, Name -Last 1 | % { "{0}\{1}" -f $_.Directory, $_.Name } 
if (!$csc) {
    Write-Output "File not found."
    exit
}
Write-Output $csc