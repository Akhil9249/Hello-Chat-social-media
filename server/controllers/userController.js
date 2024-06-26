const mongoose = require("mongoose");
const { Users } = require("../models/userModel");
const { generatePasswordHash, comparePasswordHash } = require("../utils/bcrypt");
const { generateAccessToken, verifyRefreshToken, generateRefreshToken } = require("../utils/jwt");


const signup = async (req, res) => {

    const { emailorphonenumber, fullname, username, password } = req.body;
    //************** Check if user exixt *******************
    const isExist = await Users.findOne({ emailorphonenumber });
    if (isExist) {
        return res.status(400).json({
            message: "User Already Exist",
        });
    }
    //**************** Password hash ***********************
    const hashedPassword = await generatePasswordHash(password);
    //************** Creat user *****************************
    await Users.create({
        username: username,
        emailOrPhoneNumber: emailorphonenumber,
        fullName: fullname,
        password: hashedPassword,
    });
    res.json({
        message: "Account has been Created",
    });
};


const login = async (req, res) => {
    const { emailorphonenumber, password } = req.body;
    //************** find user ******************************
    const user = await Users.findOne({emailOrPhoneNumber:emailorphonenumber});
    // console.log(user);
    if (!user) {
        return res.status(404).json({
            message: "Username is not valid",
        });
    }
    //**************** Compare hashed password *******************
    const validPassword = await comparePasswordHash(password, user.password);
    if (!validPassword) {
        return res.status(404).json({
            message: "Password is not valid",
        });
    }
    //************ Generate access token and refresh token ***********
    const accessToken = generateAccessToken(user._id);  
    const refreshToken = generateRefreshToken(user._id);

    //  res
    // .cookie("token",accessToken,{
    //     httpOnly:true,
    //     expires:new Date(Date.now()+5000)
    //   })
    //   .json({accessToken});
    
    res.cookie("refreshToken", refreshToken,{
        httpOnly:true,
        secure:true 
      }).json({ accessToken ,user, message:"login successfull"});
};

 
const home = async (req, res) => {
try {
  console.log("get profile");

  let user =[]
  let alluser =[]
  let posts = []
  
user = await Users.findById(req.userId).select("-password");
  
let withOutFollowers = await Users.findById(req.userId).select("followers -_id")

alluser = await Users.find({_id:{$nin:withOutFollowers.followers}});

posts = await Users.find().select("posts -_id")
console.log(posts,"====posts");

res.status(200).json({alluser,user,posts})
} catch (error) {
  console.log(error);
}

};


const refreshToken = (req, res) => {
    // refresh token
  const userId =  verifyRefreshToken(req.cookies.refreshToken)
  if(!userId){
    return res.status(401).json({message:"Refresh token is expired"})
  }

  const accessToken = generateAccessToken(userId);
   
  const refreshToken = generateRefreshToken(userId);

  res.cookie("refreshToken", refreshToken,{
    httpOnly:true,
    secure:true 
  }).json({ accessToken });

};

const findAccount =async (req, res) => {

  console.log(req.body,"findAccount");
  // return;
  const user = await Users.findOne({emailOrPhoneNumber:req.body.emailOrPhone});
  console.log(user);
  if (!user || user == null) {
    console.log("404444");
      return res.json({
          message: "Username is not valid",
      });
  }
  generate()
  return res.json({
    message: "Youser Exist",
});

};

const profile =async (req, res) => {

};
const postsupload = async (req, res) => {
  console.log("postsupload");
  console.log(req.file);

  // const lastHyphenIndex = req.file.path.lastIndexOf('file');
  const searchString = 'upload_file-';
  const searchStringIndex = req.file.path.indexOf(searchString);


if (searchStringIndex === -1) {
  return req.file.path;
}
const result = req.file.path.slice(searchStringIndex + searchString.length);

console.log(result,"====result");

  await Users.findByIdAndUpdate(req.userId, {$push: {"posts": {image:result,like:0}}},{ new: true, useFindAndModify: false })
  res.status(200).json({message: "Post added successfully"})
};

const otp = (req, res) => {};
const resetpassword = (req, res) => {};


const follow = async (req, res) => {
try {
  console.log("follow ========================");
  let alluser=[];
  const {followerId}=req.body
  console.log(followerId);
  // await Users.findByIdAndUpdate(req.userId, {$push: {"followers": {userId: changefollowerId,status:false}}},{ new: true, useFindAndModify: false })
  await Users.findByIdAndUpdate(req.userId, {$push: {"followers": followerId}},{ new: true, useFindAndModify: false })
  // let user = await Users.findById(req.userId).select("followers _id")


  // alluser = await Users.find({followers: { $nin: result }}).select("-password");

  let withOutFollowers = await Users.findById(req.userId).select("followers -_id")

alluser = await Users.find({_id:{$nin:withOutFollowers.followers}});

  res.status(200).json({alluser})

} catch (error) {
  console.log(error);
}

};
const unfollow = (req, res) => {

};






const generate = (req, res) => {
  // Function to generate a random number between 1111 and 9999
  function generateRandomNumber() {
      const randomNum = Math.floor(Math.random() * (9999 - 1111 + 1) + 1111);
      return randomNum;
  }

  // Call the function and store the result
  const randomResult = generateRandomNumber();
  console.log(randomResult);

  // Define a function to be called with the random number
  function processRandomNumber(randomNum) {
      console.log(`Random number generated: ${randomNum}`);
      // You can perform any further processing with the random number here
  }

  // Call the function with the random number
  processRandomNumber(randomResult);

  // req.session.myValue = randomResult;
};



// const profile =(req,res)=>{
// }

module.exports = { login,
    signup,
    profile,
    home,
    profile,
    resetpassword,
    refreshToken,
    otp,
    findAccount,
    follow,
    unfollow,
    postsupload
 };
