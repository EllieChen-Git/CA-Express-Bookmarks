const express = require("express");
const router = express.Router();
const passport = require("passport");
const AuthRoutes = require("./auth_routes");
const BookmarkRoutes = require("./bookmark_routes");

router.get("/", (req, res) => res.send("Welcome to Your Express Server"));
router.use("/auth", AuthRoutes);
router.use(
  "/bookmarks",
  passport.authenticate("jwt", { session: false }),
  BookmarkRoutes
);

module.exports = router;
