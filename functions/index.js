
const admin = require('firebase-admin');
const sendEmail = require("./sendEmail"); // doesn't exist yet

admin.initializeApp();

exports.sendEmail = sendEmail;