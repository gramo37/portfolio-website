const catchAsyncError = require("../middleware/catchAsyncErrors");
const data = require("../data/user.json")
const fs = require('fs')
const path = require('path');

exports.sendResumeDetails = catchAsyncError(async (req, res, next) => {
  res.status(200).json(data)
});

exports.editResumeDetails = catchAsyncError(async (req, res, next) => {
  fs.writeFileSync(path.join(process.cwd(), 'data/user.json'), JSON.stringify(req.body));
  res.status(200).json({
    success: true
  })
})
