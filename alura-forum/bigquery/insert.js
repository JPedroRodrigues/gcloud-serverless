"use strict"

const { BigQuery } = require("@google-cloud/bigquery")

module.exports = function insert(lines, tableName) {
    const bigquery = new BigQuery()
    const dataset = bigquery.dataset("aluraForum")
    const table = dataset.table(tableName)

    return table.insert(lines)
}