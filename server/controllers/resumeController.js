const catchAsyncError = require("../middleware/catchAsyncErrors");
const fs = require('fs')
const path = require('path');
const userModel = require("../model/userModel");

exports.sendResumeDetails = catchAsyncError(async (req, res, next) => {
  // const { name } = req.body
  const name = "prasanna"
  let user = await userModel.find({ "name": { $regex: name, $options: "i" } })
  console.log(user)
  res.status(200).json({
    success: true,
    data: user?.[0]
  })
});

exports.editResumeDetails = catchAsyncError(async (req, res, next) => {
  const { name } = req.body
  let user = await userModel.find({ "name": name })

  if (user.length <= 0) {
    await userModel.create(req.body)
  }

  else {
    await userModel.findByIdAndUpdate(user[0]._id, req.body)
  }

  return res.status(200).json({
    success: true
  })
})
