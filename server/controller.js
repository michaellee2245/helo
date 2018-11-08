const bcrypt = require('bcrypt-nodejs');

function loginUser(req, res) {
    const db = req.app.get('db')
    // const { username, password } = req.body
    console.log(req.body)
    db.search_user([req.body.username])
        .then(user => {
            if (!user[0]) {
                return res.status(401).send("User doesn't exist.")

            }

            bcrypt.compare(req.body.password, user[0].password, function (err, isCorrectPassword) {
                if (err) {
                    return res.status(500).send(err)
                }
                if (isCorrectPassword) {
                    req.session.user = user[0]
                    res.status(200).send('Login Successful')
                }
                else {
                    res.status(401).send('Username or password incorrect')
                }
            });
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
}


module.exports = {
    loginUser
}