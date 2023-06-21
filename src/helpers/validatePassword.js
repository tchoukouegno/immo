/** 
   * function to check that a password is correct
   * @param {string} password
   * @return {Boolean}

 */


export function validatePassword (password) {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    return regex.test(password);

  };