# Login to Azure
Connect-AzAccount

# Set your subscription (replace with your subscription id)
$subscriptionId = "your-subscription-id"
Select-AzSubscription -SubscriptionId $subscriptionId

# Create a resource group (replace with your resource group name and location)
$resourceGroupName = "myResourceGroup"
$location = "West Europe"
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account (replace with your storage account name)
$storageAccountName = "mystorageaccount"
New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName Standard_LRS