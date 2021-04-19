const { validationResult } = require('express-validator');
var fs = require('fs');

const validate = (req,res,next) => {
	const errors = validationResult(req)
	if (errors.isEmpty()) {
		return false
	}
	const extractedErrors = []
	errors.array().map(err => extractedErrors.push(err.msg))

	return Object.values(extractedErrors)
}


module.exports = {
	validate,
}
