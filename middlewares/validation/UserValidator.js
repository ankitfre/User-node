const { check } = require('express-validator');

const userRules = () => {
  	return [
		check('phone').exists().withMessage('Phone Field is required')
					.isInt().withMessage('Phone Field should be numeric')
					.isLength({min:10,max:10}).withMessage('Phone should be of 10 digits'),
		
		check('username').exists().withMessage('Username Field is required')
					.isAlpha().withMessage('Username Field should contains alphabatic characters'),
		
		check('city').exists().withMessage('City Field is required')
					.isAlpha().withMessage('City Field should contains alphabatic characters'),
		
		check('email').exists().withMessage('Email Field is required')
					.isEmail().withMessage('Email Field should contains valid email address'),
						
	];
}


module.exports = {
	userRules
}