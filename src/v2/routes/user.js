const express = require('express');
const validate = require('express-validation');
const userController = require('../controllers/user.js');
const router = new express.Router();

const postLogin = require('../validators/user/postLogin.js');
const postAuth = require('../validators/user/postAuth.js');
const postProfile = require('../validators/user/postProfile.js');
const getProfile = require('../validators/user/getProfile.js');
const postAccount = require('../validators/user/postAccount.js');
const getSnapshot = require('../validators/user/getSnapshot.js');
const postPassword = require('../validators/user/postPassword.js');

router.route('/updatepassword/').post(
    validate(postPassword.validate), userController.postUpdatePassword);
router.route('/password/').post(
    validate(postPassword.validate), userController.postPassword);
router.route('/login/').post(
    validate(postLogin.validate), userController.postLogin);
router.route('/auth/').post(
    validate(postAuth.validate), userController.postAuth);
router.route('/profile/').post(
    validate(postProfile.validate), userController.postProfile);
router.route('/profile/').get(
    validate(getProfile.validate), userController.getProfile);
router.route('/account/').post(
    validate(postAccount.validate), userController.postAccount);
router.route('/snapshot/').get(
    validate(getSnapshot.validate), userController.getSnapshot);
router.route('/security/').get(
    userController.getSecurity);
router.route('/sharedrop/').get(
    userController.getSharedrop);
router.route('/name/').get(
    userController.getName);

module.exports = router;
