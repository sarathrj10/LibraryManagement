const express = require('express');

const router = express.Router();

const employeeAuthController = require('../app/controllers/employee/employeeAuthController');
const employeeDashController = require('../app/controllers/employee/employeeDashController');
const employeeStudentController = require('../app/controllers/employee/employeeStudentController');
const employeeBookController = require('../app/controllers/employee/employeeBookController');
const employeeBorrowController = require('../app/controllers/employee/employeeBorrowController');
const employeeReturnController = require('../app/controllers/employee/employeeReturnController');
const employeeDashProtect = require('../app/middlewares/employee/employeeDashProtect');
const employeeAuthProtect = require('../app/middlewares/employee/employeeAuthProtect');

// getRoutes
router.get('/', employeeDashProtect, employeeAuthController().login);
router.get('/dash', employeeAuthProtect, employeeDashController().dashboard);
router.get('/otpget', employeeAuthController().otpGet);
router.get('/students', employeeAuthProtect, employeeStudentController().students);
router.get('/books', employeeAuthProtect, employeeBookController().listBooks);
router.get('/getCategory', employeeBookController().getCategory);
router.get('/borrow', employeeAuthProtect, employeeBorrowController().listBorrow);
router.get('/return', employeeAuthProtect, employeeReturnController().listReturn);
router.get('/logout', employeeAuthController().logout);

// postRoutes
router.post('/', employeeAuthController().postLogin);
router.post('/otp', employeeAuthController().otpLogin);
router.post('/otpget', employeeAuthController().otpGetPost);
router.post('/addStudent', employeeStudentController().addStudent);
router.post('/studentDelete', employeeStudentController().deleteStudent);
router.post('/getSubjects', employeeBookController().getSubject);
router.post('/addBook', employeeBookController().addBook);
router.post('/bookDelete', employeeBookController().deleteBook);
router.post('/borrowBook', employeeBorrowController().borrowBook);
router.post('/returnBook', employeeReturnController().returnBook);

module.exports = router;
