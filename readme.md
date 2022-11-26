
# Project Setup 

## Database Setup

In your mongosh, run these commands:

```sh
use learn # the database
db.createCollection("comedians") # the collection
db.createCollection("shows") # the collection
```

## Quick Start

```sh
npm i
npm start
```

> This application will exit after execution.

## Schedule for Remaining Lessons

|Date|Topic|
|-|-|
|24 Nov (Thu) |Create and Read API|
|26 Nov (Sat) |Update and Delete API, Work on plants API homework with students|
|29 Nov (Tue) |Explore more use cast for CRUD API|
|01 Dec (Thu) |Passport|
|03 Dec (Sat) |React + API, Deploy (not sure is it still heroku)|
|5 Dec (Mon) |Start Project (total 3 weeks)|

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