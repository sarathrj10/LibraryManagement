const express = require('express');

const router = express.Router();

const managerAuthController = require('../app/controllers/manager/managerAuthController');
const managerDashController = require('../app/controllers/manager/managerDashController');
const managerEmployeeController = require('../app/controllers/manager/managerEmployeeController');
const managerDashProtect = require('../app/middlewares/manager/managerDashProtect');
const managerAuthProtect = require('../app/middlewares/manager/managerAuthProtect');

// getRoutes
router.get('/', managerDashProtect, managerAuthController().login);
router.get('/dash', managerAuthProtect, managerDashController().dashboard);
router.get('/logout', managerAuthController().logout);
router.get('/otpget', managerAuthController().otpGet);
router.get('/employees', managerAuthProtect, managerEmployeeController().employees);

// postRoutes
router.post('/', managerAuthController().postLogin);
router.post('/otp', managerAuthController().otpLogin);
router.post('/otpget', managerAuthController().otpGetPost);
router.post('/addEmp', managerEmployeeController().addEmployee);
router.post('/employeeDelete', managerEmployeeController().deleteEmployee);

module.exports = router;
