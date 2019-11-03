const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async store(req, res) {
    console.log(req.body);
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.json(user);
  }
};
