require("dotenv").config();

const generateInfo = require("./generateInfo");
const calculateMacros = require("./calculateMacros");
const createNewsletter = require("./createNewsletter")
const calculateBMI = require("./calculateBMI")
const stripeWebhooks = require("./stripeWebhooks.js")
const stripeCreateCheckout = require("./stripeCreateCheckout.js")
const getOrderForSuccessPage = require("./getOrderForSuccessPage.js")

// // The Firebase Admin SDK to access Firestore.
const { initializeApp } = require("firebase-admin/app");
initializeApp();

exports.generateInfo = generateInfo.generateInfo
exports.calculateMacros = calculateMacros.calculateMacros
exports.createNewsletter = createNewsletter.createNewsletter
exports.calculateBMI = calculateBMI.calculateBMI
exports.stripeWebhooks = stripeWebhooks.stripeWebhooks
exports.stripeCreateCheckout = stripeCreateCheckout.stripeCreatecheckout
exports.getOrderForSuccessPage = getOrderForSuccessPage.getOrderForSuccessPage


