"use strict"

const { BigQuery } = require("@google-cloud/bigquery")

async function createDataset() {
    const bigquery = new BigQuery()
    const [datasets] = await bigquery.getDatasets()

    const datasetName = 'aluraForum'
    const filteredDatasets = datasets.filter(currentDataset => currentDataset.id == datasetName)

    if (filteredDatasets.length > 0) {
        console.log("Already exists a dataset with the given name")
       return 
    }

    await bigquery.createDataset(datasetName)
    console.log(`Dataset ${datasetName} created with success`)
}

createDataset()