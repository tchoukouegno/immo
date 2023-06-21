/** 
   * function to check that a user name is correct
   * @param {string} userName
   * @return {Boolean}

 */


export function validateName (userName) {

    const regex = /^[a-zA-Z0-9-\s]{2,}$/;

    return regex.test(userName);

  };