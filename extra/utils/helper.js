//Validate Email
const validateEmail = (email) => {

	//regex
	const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(successive.tech|successive.tech)$/
	var check =  emailRegexp.test(email)
	console.log(check);
	return check;

}

export { validateEmail }