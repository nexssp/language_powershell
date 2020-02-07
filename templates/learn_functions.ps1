# More here: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions?view=powershell-5.1
function MyFunction($param) { 
    Write-Host "My Function: $param"
    Write-Host "@Args: " @Args
    Write-Host "`$args[0]: " $args[0]
    Write-Host "`$args[1]: " $args[1]

}
Write-Host "#### MyFunction { xxxx } `"ccccc`""
MyFunction { xxxx } "ccccc"
Write-Host "#### MyFunction"""yyyyyy" "aaaaaaaaaaaaaaaaaaaaaa""""
MyFunction "yyyyyy" "aaaaaaaaaaaaaaaaaaaaaa" 
Write-Host "#### MyFunction -Name `"zzzzzzzz`""
MyFunction -Name "zzzzzzzz"


function Get-Pipeline {
    process { "The value is: $_" }
}

1, 2, 4 | Get-Pipeline


function Get-PipelineBeginEnd {
    begin { "Begin: The input is $input" }
    end { "End:   The input is $input" }
}

1, 2, 4 | Get-PipelineBeginEnd

function Get-PipelineInput {
    process { "Processing:  $_ " }
    end { "End:   The input is: $input" }
}

1, 2, 4 | Get-PipelineInput