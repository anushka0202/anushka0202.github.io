# Notepad REST API
This is an API for a note - taking application.
Here's the documentation.

## GET
### To GET all the notes
request: `GET`
`
http://localhost:3000/notes
`
- Example:
`
http://localhost:3000/notes
`
gives this
```js
[
    {
        "_id": "5ede58bcc174fd237466dabe",
        "title": "Note 1",
        "description": "Hey! Anushka here.",
        "__v": 0
    },
    {
        "_id": "5ede5918c174fd237466dabf",
        "title": "Note 2",
        "description": "Hey! Anushka here again.",
        "__v": 0
    }
]
```

### To GET a note by ID
request: `GET`
`
http://localhost:3000/notes/noteId
`
- Example:
`
http://localhost:3000/notes/5ede58bcc174fd237466dabe
`
gives this
```js
{
    "note": {
        "_id": "5ede58bcc174fd237466dabe",
        "title": "Note 1",
        "description": "Hey! Anushka here."
    },
    "request": {
        "type": "GET",
        "description": "Get all notes",
        "url": "http://localhost:3000/notes"
    }
}
```

## POST
request: `POST`
`
http://localhost:3000/notes
`
- Example:
`
http://localhost:3000/notes
`
and
```js
    {
         "title": "Note 3",
          "description": "Hey there!"
    }
```
give this
```js
{
    "message": "Created note successfully",
    "createdNote": {
        "title": "Note 3",
        "description": "Hey there!",
        "_id": "5ede87d6bd7c372cd432d592",
        "request": {
            "type": "GET",
            "url": "http://localhost:3000/notes/5ede87d6bd7c372cd432d592"
        }
    }
}
```

## PATCH
request: `PATCH`
`
http://localhost:3000/notes/noteId
`
- Example:
`
http://localhost:3000/notes/5ede58bcc174fd237466dabe
`
and
```js
[
    {
        "propName": "title", "value": "Note 1.1"
    }
]
```
give this
```js
{
    "message": "Note updated",
    "request": {
        "type": "GET",
        "url": "http://localhost:3000/notes/5ede58bcc174fd237466dabe"
    }
}
```

## DELETE
request: `DELETE`
`
http://localhost:3000/notes/noteId
`
- Example:
`
http://localhost:3000/notes/5ede87d6bd7c372cd432d592
`
gives this
```js
{
    "message": "Note deleted",
    "request": {
        "type": "POST",
        "url": "http://localhost:3000/notes",
        "body": {
            "title": "String",
            "description": "String"
        }
    }
}
```
