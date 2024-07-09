const { BigQuery } = require("@google-cloud/bigquery")

module.exports = async function count(query) {
    const bigquery = new BigQuery()

    const options = {
        query: query
    }

    const table = bigquery.dataset("aluraForum").table("activities")
    const [ job ] = await table.createQueryJob(options)
    const [ results ] = await job.getQueryResults()

    return results
}