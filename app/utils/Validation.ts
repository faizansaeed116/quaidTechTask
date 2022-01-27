var passwordValidator = require('password-validator');
// Password schema
var passSchema = new passwordValidator();
passSchema
.is().min(6)                        // Minimum length 8
.is().max(100)                      // Maximum length 100
.has().uppercase()                  // Must have uppercase letters
.has().lowercase()                  // Must have lowercase letters
.has().not().spaces();              // Should not have spaces

function ValidatePass(password:String){
    let validatePass = passSchema.validate(password, { list: true});

        let errMessage = "Password should contain "
        if(validatePass.includes('min')){errMessage = errMessage+"minimum 6 characters";}
        if(validatePass.includes('max')){errMessage = errMessage+ ", maximum 50 characters";}
        if(validatePass.includes('uppercase')){errMessage = errMessage+ ", atleast 1 uppercase letter";}
        if(validatePass.includes('lowercase')){errMessage = errMessage+ ", atleast 1 lowercase letter";}
        if(validatePass.includes('spaces')){errMessage = errMessage+ ", no spaces";};
        
        if(validatePass.length>0){
            return errMessage;
        }
        else{
            return "";
        }
        
}
// function ValidateEmail(email: String) {

//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if (email.match(validRegex)) {
//         return true;
//     } else {
//         return false;
//     }

// }
export default { ValidatePass };