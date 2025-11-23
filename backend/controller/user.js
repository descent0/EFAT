const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET="_w%n.^kGC(/]M5A6\:+xyV{v^jy?vq?%?sHQ{$(>uQ7,E5B";


async function handleRegister(req,res){
    try {
        let { email, password, passwordCheck, displayName } = req.body;
        if (!email || !password || !passwordCheck)
          return res.status(400).json({ msg: "Not all fields have been entered." });
        if (password.length < 5)
          return res
            .status(400)
            .json({ msg: "The password needs to be at least 5 characters long." });
        if (password !== passwordCheck)
          return res
            .status(400)
            .json({ msg: "Enter the same password twice for verification." });
    
        const existingUser = await User.findOne({ email: email });
        if (existingUser)
          return res
            .status(400)
            .json({ msg: "An account with this email already exists." });
    
        if (!displayName) displayName = email;
    
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
    
        const newUser = new User({
          email,
          password: passwordHash,
          displayName,
        });
        const savedUser = await newUser.save();
        res.json(savedUser);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

async function handleLogin(req,res){
    try {
        const { email, password } = req.body;
    
        if (!email || !password)
          return res.status(400).json({ msg: "Not all fields have been entered." });
    
        const user = await User.findOne({ email: email });
        if (!user)
          return res
            .status(400)
            .json({ msg: "No account with this email has been registered." });
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });
    
        const token = jwt.sign({ id: user._id }, JWT_SECRET,{ expiresIn: "1h" });
        console.log("token",token);
        res.json({
          token,
          user: {
            id: user._id,
            displayName: user.displayName,
          },
        });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}
module.exports={
    handleLogin,
    handleRegister,
}