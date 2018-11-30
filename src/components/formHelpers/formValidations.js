export const signInValidation = values => {

    const errors = {};
  
    if (!values.email) {
      errors.email = "Email address is required";
    }
  
    const checkEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (values.email && !checkEmail.test(values.email)) {
      errors.email = "Email is invalid !";
    }
  
    if (!values.password) {
      errors.password = "Password is required";
    }
  
    return errors;
  };
  
  export const signUpValidation = values => {
    const errors = {};
  
    if (!values.email) {
      errors.email = "Email address is required";
    }
  
    const checkEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!values.name){
        errors.name = "Name is required!"
    }

    if (values.email && !checkEmail.test(values.email)) {
      errors.email = "Email is invalid!";
    }
  
    if (!values.password) {
      errors.password = "Password is required!";
    }
  
    return errors;
  };
  