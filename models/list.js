const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
  isComplete: {
    type: Boolean,
    required: true,
    default: false
  },
  description: {
    type: String,
    default: null
  }
})

const listSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  items: [itemSchema]
})

const List = mongoose.model('List', listSchema)
