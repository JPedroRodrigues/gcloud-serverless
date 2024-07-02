const BigQuery = require("../../node_modules/@google-cloud/bigquery").BigQuery
const BigQueryInstance = new BigQuery()

async function CreateDataset() {
    const [datasets] = await BigQueryInstance.getDatasets()
    const datasetName = 'aluraForum'
    const filteredDatasets = datasets.filter(currentDataset => currentDataset.id == datasetName)

    if (filteredDatasets.length > 0) {
        console.log("Already exists a dataset with the given name")
       return 
    }

    await BigQueryInstance.createDataset(datasetName)
    console.log(`Dataset ${datasetName} created with success`)
}

CreateDataset()