const express = require("express");
const router = express.Router(); 

const {create_user,get_user,add_single_course,get_all_courses,get_single_course,update_single_course,delete_single_course} = require("../controllers/users.js")


router.get("/user/:emailId",get_user)
router.post('/user',create_user)
router.get('/view-courses',get_all_courses)
router.get('/get-course/:courseId',get_single_course)
router.post('/add-course/:courseId',add_single_course)
router.put('/update-course/:courseId',update_single_course)
router.delete('/delete-course/:courseId',delete_single_course)


module.exports = router