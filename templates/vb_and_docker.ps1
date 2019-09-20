$input = $(
    Add-Type -AssemblyName Microsoft.VisualBasic
    [Microsoft.VisualBasic.Interaction]::InputBox('Enter website', 'Enter website name', 'https://marcinpolak.eu')
)

docker run --rm wappalyzer/cli $input

$secure_password = read-host "Enter a Password:" -assecurestring

# https://ss64.com/ps/read-host.html
# $SecureStringAsPlainText = $secure_password | ConvertFrom-SecureString
