const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    // validation
    if (!targetDev) {
      return res.status(400).json({ error: "Dev Not Exists"});
    }

    // update
    loggedDev.dislikes.push(targetDev._id);

    // persist
    await loggedDev.save();

    // return 
    return res.json(loggedDev)
  }
};