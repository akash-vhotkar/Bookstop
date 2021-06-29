const { data } = require('jquery');
const postsdb = require('../model/posts');
const nodemailer = require('nodemailer');
const userdb = require('../model/user');


const postcontroller = () => {
    return {
        async Createpost(req, res) {
            let postdata = req.body;
            console.log("before ", postdata);
            if (Array.isArray(postdata.userimage) == false) {
                postdata = { ...postdata, userimage: [postdata.userimage] }
            }
            try {


                const newpost = await postsdb.create(postdata);
                if (newpost) {
                    const data = await postsdb.find();
                    res.status(200).json({ err: 0, message: "post created sucessfully", data: data });
                }
                else {
                    res.status(200).json({ err: 1, message: "post not created" })
                }

            }
            catch (err) {
                if (err) res.status(400).json({ err: 1, message: "Internal server error" })
            }
        },
        async Likepost(req, res) {
            const name = req.body.name;
            const postid = req.body.postid;
            const likes = req.body.likes + 1;
            try {

                const temp = await postsdb.findByIdAndUpdate({ _id: postid, name: req.user.name }, { likes: likes }, {});
                if (temp != null) {
                    res.status(200).json({ err: 0, message: "Like successfull" })
                }
                else {

                    res.status(500).json({ err: 1, message: "Internal server error" });
                }

            } catch (err) {
                console.log(err);
                if (err) res.status(500).json({ err: 1, message: "Internal server error" })

            }

        },
        async Dislike(req, res) {
            const name = req.user.name;
            const postid = req.body.postid;
            const likes = req.body.likes - 1;
            try {

                const temp = await postsdb.findByIdAndUpdate({ _id: postid, name: name }, { likes: likes }, {});
                if (temp != null) {
                    return res.status(200).json({ err: 0, message: "Dislike done" })
                }
                else {
                    return res.status(500).json({ err: 1, message: "Internal server error" })
                }

            }
            catch (err) {
                return res.status(500).json({ err: 1, message: "Internal server error" })
            }
        },
        async Getbids(req, res) {
            try {
                console.log(req.user.name);
                const bidespost = await postsdb.find({ name: req.user.name });
                if (bidespost) {
                    return res.status(200).json({ err: 0, message: "Fetch Bids done", data: bidespost });

                }
                else {
                    return res.status(400).json({ err: 1, message: "Fail" })
                }

            }
            catch (err) {
                if (err) console.log(err);
            }
        },
        async Bid(req, res) {
            const bidamount = req.body.bidamount;
            const postid = req.body.postid
            const biddername = req.user.name;
            const bookname = req.body.bookname;
            console.log(req.body);
            try {
                const bid = {
                    postid: postid,
                    Bookname: bookname,
                    Biddername: biddername,
                    Bidamount: bidamount,
                    status: false,
                    Bidderemail: req.body.bidderemail
                }
                const temp = await postsdb.findOneAndUpdate({ _id: postid }, { $push: { bids: bid } }, {})
                const data = await postsdb.find({ name: biddername });
                if (temp != null) {
                    return res.status(200).json({ err: 0, message: "Bid done", data: data })
                }
                else {
                    return res.status(400).json({ err: 1, message: "Internals server error" });
                }

            }
            catch (err) {
                console.log(err);
                if (err) {
                    res.status(500).json({ err: 0, message: "Internal server error" });
                }
            }
        },
        async ConfirmBid(req, res) {
            try {
                console.log(req.body);
                let transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: "akashvhotkar4@gmail.com",
                        pass: "akash@1234567"
                    }
                });

                const user = await userdb.findOne({ name: req.user.name });

                const postdata = await postsdb.findOne({ _id: req.body.postid });

                const bids = postdata.bids;
                console.log("  bids of the page ", bids);
                for (let i = 0; i < bids.length; i++) {
                    if (bids[i].Biddername == req.body.Biddername) {
                        bids[i].status = true;
                    }
                }


                const updatedpostdata = await postsdb.findOneAndUpdate({ _id: req.body.postid }, { $set: { bids: bids } }, {});
                const bidderdata = await userdb.findOne({ name: req.body.Biddername });
                const postuser = await userdb.findOne({ name: req.user.name });

                let info = await transporter.sendMail({
                    from: 'akashvhotkar4@gmail.com', // sender address
                    to: `${postuser.email}`, // list of receivers
                    subject: "BookStop Notification about bid", // Subject line
                    text: "hello", // plain text body
                    html: `<h1>Hi ${postuser.name} your bid is confirm</h1> <h1>${req.body.Bidamount} is bidamount</h1>`, // html body
                });



                let info2 = await transporter.sendMail({
                    from: 'akashvhotkar4@gmail.com', // sender address
                    to: `${bidderdata.email}`, // list of receivers
                    subject: "Notification about bid", // Subject line
                    text: "Hello", // plain text body
                    html:   `<h1>Hi ${bidderdata.name} your bid confirm </h1><h1>${req.body.Bidamount} is bidamount</h1>  <h1> please contact ${postuser.email}</h1>`, // html body
                });

                console.log("confirm mail", req.body);
                console.log(info2);
                console.log(info);


                transporter.sendMail(info, (error, data) => {
                    if (error) {
                        console.log("mail error", err);
                        res.status(500).json({ err: 1, message: "Internal server error" })
                    }
                    else {
                        transporter.sendMail(info2, (error, data) => {
                            if (error) {
                                console.log(" maile rror", err);
                                res.status(500).json({ err: 1, message: "Internal server error" })
                            }
                            else {
                                res.status(200).json({ err: 0, message: "Notification done" });
                            }
                        })

                    }
                })







            }
            catch (err) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ err: 1, message: "Internals server error" })
                }
            }


        }
    }
}
module.exports = postcontroller;