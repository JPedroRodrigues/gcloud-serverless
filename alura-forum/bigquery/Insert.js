const BigQuery = require("@google-cloud/bigquery").BigQuery
const BigQueryInstance = new BigQuery()

module.exports = function Insert(lines) {
    const dataset = BigQueryInstance.dataset("aluraForum")
    const table = dataset.table("activities")

    return table.insert(lines)
}