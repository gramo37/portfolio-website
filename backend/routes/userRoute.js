const express = require('express');
const router = express.Router();
const {sendResumeDetails, editResumeDetails} = require('../controllers/resumeController')

router.get('/getResumeDetails', sendResumeDetails)
router.put('/editResumeDetails', editResumeDetails)

module.exports = router;