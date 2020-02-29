# Nexss PROGRAMMER 2.0 - Package Download
# This one will be removed after package run ends
$nxsParameters = @("downloadPathCache", "downloadNocache", "downloadFast")
$input | . "$($env:NEXSS_PACKAGES_PATH)/Nexss/Lib/NexssIn.ps1"

# Add value to data

$NexssStdout | Add-Member -Force -NotePropertyMembers  @{test = "test" }

# Loop through input

foreach ($value in $inFieldValue_1) { 
    # each value is $value
    nxsInfo("Value: $value")
}

# Remove

$NexssStdout.PSObject.Properties.Remove($resultField_1)

. "$($env:NEXSS_PACKAGES_PATH)/Nexss/Lib/NexssOut.ps1"
