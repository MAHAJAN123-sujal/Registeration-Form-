const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json("Test working successfully");
}

            //  For Registration
const registerUser = async (req, res) => {
    try {
        const { name, age, phone, email, address, password } = req.body;

        // check if registered data is valid
        if (!name) {
            return res.json({
                error: 'name is required',
            })
        };
        if (!age) {
            return res.json({
                error: 'age is required',
            })
        };
        if (!phone) {
            return res.json({
                error: 'phone is required',
            })
        };
        if (!email) {
            return res.json({
                error: 'email is required',
            })
        };
        if (!address) {
            return res.json({
                error: 'address is required',
            })
        };
        if (!password || password.length < 6) {
            return res.json({
                error: 'password is required and be atleast of 6 characters',
            })
        };
        // check email
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                error: 'Email already exists'
            })
        }

        const hashedPassword = await hashPassword(password)

        const user = await User.create({
            name,
            age,
            phone,
            email,
            address,
            password: hashedPassword
        })

        return res.json(user);
    }
    catch (error) {
        console.log(error);
    }
}


        // For login
const loginUser = async(req,res) => {
    try{
        const {email,password} = req.body;
        
        // checking if user exits
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error:'Invalid User'
            })
        }

        // checking for password
        const match = await comparePassword(password, user.password);
        if(match){
           jwt.sign({email: user.email, id:user._id, name: user.name},process.env.SECRET_KEY, {}, (err,token)=>{
            if(err) throw err;
            res.cookie('token',token).json(user);
        })
        }
        if(!match){
            res.json({
                error:"Invalid Password"
            })
        }
    }
    catch(error){
        console.log(error);
    }
}



module.exports = {
    test,
    registerUser,
    loginUser,
}