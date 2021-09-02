const Schedule_item = require("../models/schedule_item");

const all_items = (req, res) => {
  Schedule_item.find() //find all documents inside Blogs collection
    .sort({ createdAt: -1 }) //sort in descending order
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const single_item = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Schedule_item.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(404).render({ error: "Item not found." });
    });
};

const add_get = (req, res) => {
  res.render("add", { title: "Dodaj nowy wykład" });
};

const add_post = (req, res) => {
  const schedule_item = new Schedule_item(req.body);

  schedule_item
    .save()
    .then((result) => {
      res.send({ saved: "true" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ saved: "false" });
    });
};

const delete_item = (req, res) => {
  const id = req.params.id;
  Schedule_item.findByIdAndDelete(id)
    .then((result) => {
      res.json({ delete: "true" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ delete: "false" });
    });
};

const update_item = (req, res) => {
  const id = req.params.id;
  let body = req.body;
  delete body._id;
  Schedule_item.findByIdAndUpdate(id, body, (err) => {
    if (err) {
      console.log(err);
      res.send({ update: "false" });
    } else {
      res.send({ update: "true" });
    }
  });
};

module.exports = {
  all_items,
  single_item,
  add_get,
  add_post,
  delete_item,
  update_item,
};
