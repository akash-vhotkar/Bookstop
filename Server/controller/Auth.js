const jwt = require('jsonwebtoken');
const userdb = require('../model/user');
const bcrypt = require('bcryptjs');
const auth = () => {
    return {
        async Login(req, res) {
            const { username, password } = req.body;
            try {
                const olduser = await userdb.findOne({ username: username });
                if (olduser) {
                    const validpass = await bcrypt.compare(password, olduser.password);
                    if (validpass) {
                        const token = await jwt.sign({ username: username }, "secret", { expiresIn: "1h" });
                        res.status(200).json({err:0, message: "Login successfull", data :{token ,result: olduser}})
                    }
                    else {
                        res.status(200).json({ err: 1, message: "please enter correct password" })
                    }
                }
                else {
                    res.status(200).json({ err: 1, message: "Please Register dont have account" })
                }
            }
            catch (err) {
                if (err) {
                    res.status(500).json({ err: 1, message: "Internal server error" })
                }
            }
        },
        async Register(req, res) {
            console.log("req body is the method  ",req.body);
            const { username, password, name } = req.body;

            try {
                const olduser = await userdb.findOne({ username: username });
                if (olduser) {
                    res.status(200).json({ err: 1, message: "Account already exist please login" });
                }
                else {
                    const hashpassword = await bcrypt.hash(password, 12);
                    const newuser = await userdb.create({ name: name, username: username, password: hashpassword });
                    const token = await jwt.sign({ username: username }, 'secret', { expiresIn: '1h' });
                    res.status(200).json({ err: 0, message: "Registration successfull", data: { token, result: newuser } })
                }

            }
            catch (err) {
                consolse.log(err);
                if (err) res.status(500).json({ err: 1, message: "Internal server error" })
            }
        },
        async checkuserexist(req, res) {


        }
    }
}
module.exports = auth;