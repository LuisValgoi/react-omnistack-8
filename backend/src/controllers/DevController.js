const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
  async store (req, res) {
    const { username } = req.body;
    const userExists = await Dev.findOne({ user: username });
    if (userExists) {
      return res.json(userExists);
    }

    const response = await axios.get(`https://api.github.com/users/${username}`);
    const { name, bio, avatar_url } = response.data;
    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar: avatar_url
    });

    return res.json(dev)
  },

  async getAll (req, res) {
    return res.json(await Dev.find());
  },

  async getAllAvailable (req, res) {
    const { user } = req.headers;
    const loggedDev = await Dev.findById(user);
    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },               // bring me all user where id is not this one
        { _id: { $nin: loggedDev.likes }},    // bring me all users which id are not inside a list - prevents from showing already likes
        { _id: { $nin: loggedDev.dislikes }}  // bring me all users which id are not inside a list - prevents from showing already dislikes
      ]
    });

    return res.json(users);
  }
};