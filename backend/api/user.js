const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
  const obterHash = (password, callback) => {
    bcrypt.genSalt(10, (_err, salt) => {
      bcrypt.hash(password, salt, null, (_err, hash) => callback(hash))
    })
  }
  const save = (req, res) => {
    obterHash(req.body.password, hash => {
      const password = hash
      app.db('users')
        .insert({
          name: req.body.name,
          email: req.body.email,
          password
        })
        .then(_ => res.status(204).send())
        .catch(err => res.status(400).json(err))
    })
  }

  const getUsers = (req, res) => {
    app.db('users')
      .then(users => res.json(users))
      .catch(err => res.status(400).json(err))
  }

  return { save, getUsers }
}
