// routes/authRoutes.js

const express = require('express'); // Import the Express library
const authController = require('../controllers/authController'); // Import the authController file
const authMiddleware = require('../middleware/authMiddleware'); // Import the authMiddleware file

const router = express.Router(); //Create instance of express router 

//Post router for /api/v1/logon
router.post('/logon', authController.login); //Map the /logon route to the login controller function 

//Get route for /api/v1/hello (protected route)
router.get('/hello', authMiddleware, (req, res) =>
{
    res.status(200).json({msg: `Hello, ${req.username}!`});
    //Map the /hello route to the authMiddleware function and then to route handler function
});

module.exports = router; 
//Export router for use in app js