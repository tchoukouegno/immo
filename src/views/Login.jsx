/** 
   * component that manages the view login
   * @param {} 
   * @return {html} jsx

 */
import immofitnessLogo from '../assets/logo/immofitnessLogo.jpg'
import eyeSolid from '../assets/icons/eyeSolid.svg'
import eyeSlash from '../assets/icons/eyeSlash.svg'
import { useEffect, useState } from 'react';
import { controlInputSign } from '../modules/controlInputSign';
import { snackbar } from '../widget/snackbar';
import { checkDataAuthorization } from '../modules/checkDataAuthorization';
import {  useNavigate } from "react-router-dom";




export function Login () {



    const [isShowPassword, setIsShowPassword]= useState(false);
    const[dataSign, setDataSign]= useState({name : "",password : ""});
    let navigate = useNavigate();

    const userInfo = localStorage.getItem('userConnect');

   

    useEffect(()=>{

        if(userInfo != null){

            return navigate('/sideNavBar')
    
        }


    },[])

    const handleChange = (e)=>{

    const newdataSign = {...dataSign};

    newdataSign[e.target.id]=e.target.value;       

    setDataSign(newdataSign);

    };


    const handleShowPassword= ()=>{

        setIsShowPassword(!isShowPassword);
        console.log( setIsShowPassword(!isShowPassword));

    };

    const handleSbumit= (e)=>{

        e.preventDefault();

        controlInputSign(dataSign).then((result)=>{


            if(result.message === "Veillez remplir les champs SVP!!!") {

                return snackbar(document.querySelector("#root"),"../src/assets/icons/info.svg", result.message, 3000);

            };

            if(result.message === "Vous n'avez pas d'autorisation") {

            return snackbar(document.querySelector("#root"),"../src/assets/icons/info.svg", result.message, 3000);

            };

        
        return checkDataAuthorization(result).then((responseConnection)=>{

            if(responseConnection.message === "Vous n'avez pas d'autorisation") {

            return snackbar(document.querySelector("#root"),"../src/assets/icons/info.svg", responseConnection.message, 3000);

            };

            return localStorage.setItem('userConnect', JSON.stringify(responseConnection)), navigate("/sideNavBar/dashboard");
        

        });
        


        });

    }




return (
    <div id='loginConatiner'>
      
        <div className='login-content'>

            <img src={immofitnessLogo} alt='logo' className='Immologo'/>

            <h2>Connexion</h2>
          
         <form action="submit" onSubmit={handleSbumit}>

                <div className="input-wrapper">
                    <label htmlFor="name">Nom</label>
                    <input type="text" className='inputLogin' id="name" value={dataSign.name} onChange={handleChange} />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="password">Mot de passe</label>
                    <input type={isShowPassword ?  "text": "password"} className='inputLogin' id="password" value={dataSign.password}  onChange={handleChange} />
                    <img src={isShowPassword ? eyeSolid : eyeSlash} className= {isShowPassword ? 'eyeSolid': 'eyeSlash'} onClick={handleShowPassword}     />
                </div>

                <button className="loginButton">Se connecter</button>


         </form>

        </div>


    </div>
  )




}