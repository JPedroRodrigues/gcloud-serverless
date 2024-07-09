const { BigQuery } = require("@google-cloud/bigquery")

module.exports = async function search(filter) {
    const bigquery = new BigQuery()

    const options = {
        query: "SELECT * FROM activities"
    }

    if (filter) {
        options.query = `${options.query} WHERE ${filter}`
    }

    const table = bigquery.dataset("aluraForum").table("activities")
    const [ job ] = await table.createQueryJob(options)
    const [ results ] = await job.getQueryResults()

    return results
}