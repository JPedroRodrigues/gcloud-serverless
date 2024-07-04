"use strict"

const { BigQuery } = require("@google-cloud/bigquery")

async function createTable() {
    const bigquery = new BigQuery()
    const dataset = bigquery.dataset("aluraForum")
    const [tables] = await dataset.getTables()

    const tableName = "activities"
    const foundTables = tables.filter(currentTable => currentTable.id === tableName)

    if (foundTables.length > 0) {
        console.log(`This table \"${tableName}\" already exists!`)
    }

    const structure = [
        {
            name: "activity_creation_date",
            type: "timestamp",
            mode: "required"
        },
        {
            name: "activity_type",
            type: "string",
            mode: "required",
        },
        {
            name: "course_name",
            type: "string",
            mode: "required"
        },
        {
            name: "class_name",
            type: "string",
            mode: "required"
        },
        {
            name: "text",
            type: "string",
            mode: "required"
        },
        {
            name: "main_activity_id",
            type: "integer",
            mode: "nullable"
        }
    ]

    await dataset.createTable(tableName, { schema: structure })
    console.log(`Table \"${tableName}\" created successfully`)
}

createTable()