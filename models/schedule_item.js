const mongoose = require("mongoose");
//schema defines a structre of the documents stored in the database
const Schema = mongoose.Schema;

const schedule_itemSchema = new Schema(
  {
    conference: {
      type: String,
      required: true,
    },
    room: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    person: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    startingHour: {
      type: String,
      required: true,
    },
    startingMinute: {
      type: String,
      required: true,
    },
    endingHour: {
      type: String,
      required: true,
    },
    endingMinute: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: false,
    },
    alert: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

// model surrounds schema and provides us with an interface by which we communicate a database collection type
// "Blog" name is important, should be singular name of collection (without s character at the end)
const Schedule_item = mongoose.model("Schedule_item", schedule_itemSchema);
module.exports = Schedule_item;
