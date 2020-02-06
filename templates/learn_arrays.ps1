$a = @() # empty array
$b = @{ } # empty object


$a += "My file"
$b += "My Second file"


write-host $a
write-host $b

exit





$arr = @("one", "two", "three")
$arr.GetType()
$a = new-object -TypeName PSObject 

[System.Collections.ArrayList]$arrList = $arr
$a | Add-Member -MemberType NoteProperty -Name ArrayList -value $arrlist

$a.ArrayList


# Remove item from Array
$a.ArrayList.remove("one")


