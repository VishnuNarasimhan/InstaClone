const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const User = require("../models/user");

router.post("/Post", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const avatar = result.secure_url;
    console.log(req.body);
    const { redirectURL } = req.body;
    const { author, location, description } = req.body;

    //Create instance of user
    const user = {
      author: author,
      location: location,
      description: description,
      avatar: avatar,
      cloudinary_id: result.public_id,
    };

    //Save User
    await User.create(user);
    res.status(201).redirect(redirectURL);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  await User.find()
    .sort({ date: -1 })
    .then((post) => res.json(post))
    .catch((err) => res.status(404).send(err));
});

module.exports = router;
