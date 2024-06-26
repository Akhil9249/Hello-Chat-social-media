// ******************************************
// followers: [{
// userId: {
//   type: mongoose.Types.ObjectId,
//   ref: 'Users',
//   required: true
// },
//     status:Boolean
//   }]
// ******************************************


  
// ******************************************
// followers

// alluser = await Users.find().select("-password");
// alluser = await user.followers.map((data,index)=>data._id)
// alluser = await Users.find({"followers._id": {$nin: following}}).select("-password");
// alluser = await Users.find({_id:{$in: following}});  //{ followers: "66747267bd498e61a377d88c" }

// const user = await Users.findById(req.userId).populate('followers.userId');
// console.log(user,"===user");
//    const followingUserIds = user.followers.map(follower => follower.userId);
//    const allUsers = await Users.find({
//     _id: { $nin: followingUserIds }
// }).select("-password");
// console.log(allUsers.length,"===allUsers");
// following = await user.followers.map((data,index)=>data._id)
// ******************************************