/** 
   * module that checks the information entered by the user
   * @param {object} dataSign
   * @return {Promise}

 */

import { validateName } from "../helpers/validateName";
import { validatePassword } from "../helpers/validatePassword";


export function controlInputSign(dataSign) {


    return new Promise((resolve)=>{


        if(dataSign.name === "" || dataSign.password === "") {


            return resolve({message:"Veillez remplir les champs SVP!!!"});


        };

        if(validateName(dataSign.name)=== false) {


            return resolve({message:"Vous n'avez pas d'autorisation"});


        };

        if(validatePassword(dataSign.password)=== false) {


            return resolve({message:"Vous n'avez pas d'autorisation"});


        };



    return resolve(dataSign);


    });





}