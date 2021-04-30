const express = require('express')
const List = require('../models/list')

const listsRouter = express.Router()

listsRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })
  .get((req, res, next) => {
    List.find()
      .then((lists) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(lists)
      })
      .catch((err) => next(err))
  })
  .post((req, res, next) => {
    List.create(req.body)
      .then((list) => {
        console.log('List Created ', list)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(list)
      })
      .catch((err) => next(err))
  })
  .put((req, res) => {
    res.statusCode = 403
    res.end('PUT is not supported on /lists')
  })
  .delete((req, res, next) => {
    List.deleteMany()
      .then((response) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'Application/json')
        res.json(response)
      })
      .catch((err) => next(err))
  })

listsRouter
  .route('/:listId')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })
  .get((req, res) => {
    res.end(`Will send list ID #${req.params.listId} to you`)
  })
  .post((req, res) => {
    res.end(`Will add the list ${req.params.listId}`)
  })
  .put((req, res) => {
    res.end(
      `Will update the list ${req.params.listId} with info like name: ${req.body.name}`
    )
  })
  .delete((req, res) => {
    res.end(
      `Deleted the list: ${req.params.listId} with a name of ${req.body.name}`
    )
  })

listsRouter
  .route('/:listId/:itemId')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })
  .get((req, res) => {
    res.end(
      `Will send the item ${req.params.itemId} to you from list ${req.params.listId}`
    )
  })
  .post((req, res) => {
    res.end(
      `Will add an item of ${req.params.itemId} to the list ${req.params.listId}`
    )
  })
  .put((req, res) => {
    res.end(
      `Will update the item ${req.params.itemId} - probably with a isComplete value`
    )
  })
  .delete((req, res) => {
    res.end(
      `Will delete the item ${req.params.itemId} from the list ${req.params.listId}`
    )
  })

module.exports = listsRouter
