const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema(
  {
    isComplete: {
      type: Boolean,
      required: true,
      default: false
    },
    description: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true
  }
)

const listSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    items: [itemSchema]
  },
  {
    timestamps: true
  }
)

const List = mongoose.model('List', listSchema)

module.exports = List
