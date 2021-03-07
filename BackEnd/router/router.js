const express = require('express');
const routes = express.Router();
require('../database/db')
const User = require('../models/user')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');


routes.use(bodyParser.json())


routes.get('/', (req, res) => {
    res.send(`Opps ...! <a href="http://localhost:5000/api">you click me</a>`)
})

routes.get('/api', (req, res) => {
    User.find((err, data) => {
        if (!err) {
            res.send(data)
        }
        else throw err
    })
})

routes.post('/api', (req, res) => {
    data = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        cnfpassword: req.body.cnfpassword,
    })
    // let err;
    // let {password,cnfpassword}=req.body;
    // if (!name || !email || !phone || !password || !cnfpassword) {
    //     err = "Please Fill All The Fields ..."
    // }
    // if(password != cnfpassword){
    //     let error="mis match";
    //     console.log(error)
    //     res.status(401).json({
    //                         status: "failure",
    //                         error: "INVALID_CREDENTIALS_FORMAT"
    //                     });
    // }
    // else{
    data.save().then((result) => {
        res.status(201).json(result)
    })
        .catch((err) => { console.log(err) })
    // }
})

// Login method
// routes.post(
//     '/login',
//     [
//         check('email', 'Please enter a valid email').isEmail(),
//         check('password', 'Password is required').exists(),
//     ],
//     async (req, res) => {
//         const error = validationResult(req);
//         if (!error.isEmpty()) {

//             res.status(401).json({
//                 status: "failure",
//                 error: "INVALID_CREDENTIALS_FORMAT"
//             });
//         }

//         const {
//             email,
//             password
//         } = req.body;

//         try {

//             let user = await User.findOne({
//                 email
//             });

//             if (!user) {
//                 return res.status(404).json({
//                     status: "failure",
//                     error: 'USER_DOES_NOT_EXIST'
//                 });
//             } else {

//                 const isMatch = await bcrypt.compare(password, user.password);

//                 if (!isMatch) {
//                     return res.status(401).json({
//                         status: "failure",
//                         error: 'INVALID_CREDENTIALS'
//                     });
//                 }

//                 const payload = {
//                     user: {
//                         id: user.id
//                     }
//                 };

//                 const expireTime = 3600;

//                 jwt.sign(payload, process.env.jwtSecret, {
//                     expiresIn: expireTime
//                 }, (err, token) => {

//                     if (err) throw err;

//                     if (!user.active) {
//                         res.status(403).json({
//                             status: "failure",
//                             error: "ACCOUNT_SUSPENDED"
//                         });
//                     }
//                     if (user.banned) {
//                         res.status(403).json({
//                             status: "failure",
//                             error: "ACCOUNT_IS_BANNED"
//                         });
//                     }

//                     let role = user.role;
//                     let userAuth = user.isAuthenticated;
//                     let name = user.name;
//                     let profileImage = user.profileImage;
//                     let assignedUlb = user.assignedUlb;

//                     const refreshToken = jwt.REFRESH_TOKEN;
//                     let success = "USER_LOGGED_IN";

//                     res.status(200).json({
//                         success,
//                         name,
//                         profileImage,
//                         assignedUlb,
//                         exipiresIn: expireTime,
//                         role,
//                         userAuth,
//                         token
//                     });
//                 }
//                 );
//             }
//         } catch (err) {
//             res.status(500).json({
//                 status: "failure",
//                 error: err.message
//             });
//         }
//     }
// );

module.exports = routes