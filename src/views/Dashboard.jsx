/** 
   * component that manages the view dashboard
   * @param {string} userName
   * @return {Boolean}

 */
import { useEffect} from 'react';
import {  useNavigate } from "react-router-dom";
import dumbbellSolid from "../assets/icons/dumbbellSolid.svg"


export function Dashboard () {

    let navigate = useNavigate();

    const userInfo = localStorage.getItem('userConnect');

   
    useEffect(()=>{

        if(userInfo === null){

            return navigate('/login')
    
        }


    },[])
    

    return (

        <>

            <div className='dashboardContainer'>


                    
                    <div className='summaryCustomer'>

                        <span className='totalNumber'>200</span>

                        <img src={dumbbellSolid} className='dumbbellSolid' alt='dumbbell-solid'/>

                        <span className='summaryContext'>Total Salle de sport</span>
                    </div>




            </div>
                    
        
        
        </>






    );



}



