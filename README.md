# Moment Counter Server

## Tech Stack

NodeJs server using Express, MongoDB, and Mongoose

## Intro

Maybe it seemed obvious, but I didn't fully get the message that our backend project should ideally work with our frontend project and not necessarily be something new and unique. 🤦

So I'm pivoting to doing a backend that matches with my frontend project rather than the virtual bookshelf idea (which seemed a bit more interesting as far as backend goes).

With that said, I'll start working on an idea of adding some backend functionality to my frontend project: [Moment Counter](https://github.com/johndunstan/moment-counter).

In my original state design of Moment Counter, I set state up to handle multiple lists with a bit data than complete/notComplete. So hopefully that'll keep the backend a bit more interesting.

## Design

### Details

Give the details of your REST API, the various REST API end points and the operations to be supported on these end points.

#### /lists

Endpoint for all the created lists

##### get

Returns all the lists

#### post

Creates a new list of lists (basically a new user)

#### put

Not supported?

#### delete

Deletes all lists

#### /lists/:listId

A specific list

##### get

Returns a list including its name and collections of items

#### post

Creates a new list

#### put

Updates a list (either name or total items)

#### delete

Deletes the desired list

### /lists/:listId/:itemId

The specific item in a list. Curently has an isComplete property, but I would like to expand to include description, date, time, and duration.

##### get

Returns info on the specific item

#### post

Not supported (a different fuction should add items to the list?)

#### put

Updates a specific list-item (at this post likely changing the bool value of isComplete)

#### delete

Removes a specific item from the list

### Schemas, Design, and Structure

Give any details of the database schema and the structure of your database storage (documents etc.).

#### listSchema

name: string, required, unique

#### itemSchema

isComplete: bool, required
descirption: string
date: date
time: time
duration: number

### Communication

Give the structure of the messages to be communicated between the front-end and the back-end.

## Conclusions

## References

Give references to any material / websites / books etc. relevant to your project
