"use strict"

const { BigQuery } = require("@google-cloud/bigquery")

async function createUserTable() {
    const bigquery = new BigQuery()
    const dataset = bigquery.dataset("aluraForum")
    const [tables] = await dataset.getTables()

    const tableName = "users"
    const foundTables = tables.filter(currentTable => currentTable.id === tableName)

    if (foundTables.length > 0) {
        console.log(`Table \"${tableName}\" already exists!`)
        return
    }

    const structure = [
        {
            name: "name",
            type: "string",
            mode: "required"
        },
        {
            name: "age",
            type: "integer",
            mode: "required"
        },
        {
            name: "answered_question",
            type: "bool",
            mode: "required"
        }
    ]

    await dataset.createTable(tableName, { schema: structure })
    console.log(`Table \"${tableName}\" was created successfully`)
}

createUserTable()