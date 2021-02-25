const jwt = require("jsonwebtoken"),
  secret = "m38ccnko*xu%zs",
  expiration = "48h",
  express = require("express"),
  db = require("../models"),
  router = express.Router();
router.get("/user", (a, b) => {
  db.User.find({})
    .then((a) => {
      console.log(a), b.json({ allUser: a });
    })
    .catch((a) => {
      console.log(a);
    });
}),
  router.get(
    "/:id",
    (a, b) => (
      console.log(a.params.id),
      console.log(typeof a.params.id),
      a.params.id && "null" !== a.params.id && "undefined" !== a.params.id
        ? void db.User.findById(a.params.id)
            .then((a) => {
              console.log(a),
                b.json({
                  error: !1,
                  data: a,
                  message: "Successfully found user.",
                });
            })
            .catch((a) => {
              console.log(a),
                b
                  .status(500)
                  .json({
                    error: !0,
                    data: null,
                    message: "there has been an error.",
                  });
            })
        : b
            .status(500)
            .json({ error: !0, data: null, message: "no id provided." })
    )
  ),
  router.post("/sign-up", (a, b) => {
    const c = a.body;
    db.User.create(c).then((a) => {
      b.json({ error: !1, data: a, message: "Successfully created user." });
    });
  }),
  router.post("/login", (a, b) => {
    console.log(a.body),
      db.User.findOne({ email: a.body.email }).then((c) => {
        if (c.password === a.body.password) {
          const a = jwt.sign({ data: c }, secret, { expiresIn: expiration });
          b.json({
            error: !1,
            data: { foundUser: c, token: a },
            message: "Successfully logged in user.",
          }),
            console.log(a);
        } else b.status(401).json("User not authorized");
      });
  }),
  router.put("/:id", (a, b) => {
    db.User.findByIdAndUpdate(a.params.id, a.body, { new: !0 })
      .then((a) => {
        console.log(a),
          b.json({
            error: !1,
            data: a,
            message: "Successfully updated profile.",
          });
      })
      .catch((a) => {
        console.log(a),
          b
            .status(500)
            .json({
              error: !0,
              data: null,
              message: "Unable to update profile.",
            });
      });
  }),
  router.delete("/:id", (a, b) => {
    db.User.findByIdAndDelete({ _id: a.params.id })
      .then((a) => {
        console.log(a),
          b.json({
            error: !1,
            data: a,
            message: "Successfully deleted profile.",
          });
      })
      .catch((a) => {
        console.log(a),
          b
            .status(500)
            .json({
              error: !0,
              data: null,
              message: "Unable to delete profile.",
            });
      });
  }),
  (module.exports = router);