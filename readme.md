
# Mongoose Lesson 

## Database Setup

In your mongosh, run these commands:

```sh
use learn # the database
db.createCollection("comedians") # the collection
```

## Quick Start

```sh
npm i
npm start
```

> This application will exit after execution.

## Lesson (26 Nov 2022)

By the end of this lesson, we would have these APIs:

|#|Url|Verb|Remarks|
|-|-|-|-|
|1|/comedians|POST|Create a document `comedian` with an object in request body|
|2|/comedians|GET|List all comedians|
|3|/shows|POST|Create a document `show` with an object in request body|
|4|/shows|GET|List all shows|
|5|/shows|PUT|Modify a document `show`. Can be used to add `comedian(s)` as `performers` in a show.|

Show Collection:
|Field|Type|
|-|-|
|title|String|
|venue|String|
|start|Date|
|duration|NumberInt|
|performers|String[]|

Sample data of `Show` model:

```json
{
    "title":"Funny Night",
    "venue":"Esplanade",
    "start":"2022-12-30T11:00:00Z", // 8PM in UTC
    "duration":90, // in minutes
    "performers":[
        {
            "name":"Ra Ra Kumar",
            "location":"Singapore"
        },
        ...
    ]
}
```

[Link](https://mongoosejs.com/docs/schematypes.html) to Mongoose Schema Field Type