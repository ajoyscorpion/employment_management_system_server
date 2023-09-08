const express = require('express')
const userController = require('../controllers/userController')
const multerInstance = require('../multerConfig/multerMiddleware')

const router = new express.Router()

//register
router.post('/register',multerInstance.single("user_profile"),userController.register)

//get all users
router.get('/allemployees',userController.getallemployees)

// view user
router.get('/view-employee/:id',userController.viewuser)

// delete user
router.delete('/delete-employee/:id',userController.deleteUser)

// edit
router.put('/edit-employee/:id',multerInstance.single("user_profile"),userController.edit)

module.exports = router