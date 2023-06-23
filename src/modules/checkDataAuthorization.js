/** 
   *module that checks authorisations
   * @param {object} dataSign
   * @return {Promise}

 */


export function checkDataAuthorization (dataSign) {



    return new Promise((resolve)=>{


        if(dataSign.name === "immo" && dataSign.password === "Immo12345") {

            return resolve(dataSign);

        };

        if(dataSign.name === "admin" && dataSign.password === "Immo12345") {

            return resolve({authorization:dataSign,message:"admin"});

        };

        return resolve({message:"Vous n'avez pas d'autorisation"});

        





    })



}