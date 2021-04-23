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
  .get((req, res) => {
    List.find().then((lists) => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.json(lists)
    })
  })
  .post((req, res) => {
    res.end(`Will add the list: ${req.body.name} with much data`)
  })
  .put((req, res) => {
    res.statusCode = 403
    res.end('PUT is not supported on /lists')
  })
  .delete((req, res) => {
    res.end('Deleted all lists. Are you sure you wanted to do that?!')
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
