const jwt = require('jsonwebtoken');
const userdb = require('../model/user');
const bcrypt = require('bcryptjs');
const auth = () => {
    return {
        async Login(req, res) {
            const { name, password } = req.body;
            try {
                const olduser = await userdb.findOne({ name: name });
                if (olduser) {
                    const validpass = await bcrypt.compare(password, olduser.password);
                    if (validpass) {
                        const token = await jwt.sign({ name: name }, "secret", { expiresIn: "1h" });
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
          
            const {  password, name, imageUrl } = req.body;

            try {
                const olduser = await userdb.findOne({ name: name });
                if (olduser) {
                    res.status(200).json({ err: 1, message: "Account already exist please login" });
                }
                else {
                    const hashpassword = await bcrypt.hash(password, 12);
                    const newuser = await userdb.create({ name: name,  password: hashpassword , imageUrl: imageUrl});
                    const token = await jwt.sign({ name: name }, 'secret', { expiresIn: '1h' });
                    res.status(200).json({ err: 0, message: "Registration successfull", data: { token, result: newuser } })
                }

            }
            catch (err) {
                console.log(err);
                if (err) res.status(500).json({ err: 1, message: "Internal server error" })
            }
        },
        async checkuserexist(req, res) {


        }
    }
}
module.exports = auth;