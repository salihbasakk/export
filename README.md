### .XLSX FILE GENERATOR APP (excel)

## Installation

```bash
$ git clone git@github.com:salihbasakk/export.git
``````

## Running the app
```bash
$ npm install
$ npm start
```

## Usage 

After sending the request, .xlsx file will be created under the file folder.
You can change 
  - fileName, 
  - worksheetName, 
  - columnWidth, 
  - header backgroundColor (where the columns names are),
  - whole border section (for each cell),
  - columns with title and backgroundColor
  - finally rows (don't forget -> columns count === each row array count -> in request )

```
$ curl --location --request POST 'localhost:3000/excel' \
--header 'Content-Type: application/json' \
--data-raw '{
    "config": {
        "fileName": "WhatYouWant",
        "worksheetName": "AllYouNeedIs",
        "columnWidth": 30,
        "header": {
            "backgroundColor": "FFFF00"
        },
        "border": {
            "top": {
                "style": "thin"
            },
            "left": {
                "style": "thin"
            },
            "bottom": {
                "style": "thin"
            },
            "right": {
                "style": "thin"
            }
        }
    },
    "columns": [
        {
            "title": "First Column",
            "backgroundColor": "FFFFFF"
        },
        {
            "title": "Second Column",
            "backgroundColor": "FFFFFF"
        }
    ],
    "rows": [
        [
            "First Row First Column",
            "First Row Second Column"
        ],
        [
            "Second Row First Column",
            "Second Row Second Column"
        ]
    ]
}'
```
