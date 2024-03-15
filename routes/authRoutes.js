const express = require('express')
const Router = express.Router();
const cors = require('cors');
const {test ,registerUser, loginUser} = require('../controllers/authController')

// middleware
Router.use(
    cors({
        credentials:true,
        origin:'http://localhost:3000'
    })
)

Router.get('/', test)
Router.post('/register',registerUser);
Router.post('/login',loginUser);
module.exports = Router;