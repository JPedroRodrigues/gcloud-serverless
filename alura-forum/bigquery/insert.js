"use strict"

const { BigQuery } = require("@google-cloud/bigquery")

module.exports = function insert(lines) {
    const bigquery = new BigQuery()
    const dataset = bigquery.dataset("aluraForum")
    const table = dataset.table("activities")

    return table.insert(lines)
}