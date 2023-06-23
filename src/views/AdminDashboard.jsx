/** 
   * component that manages the view dashboard
   * @param {string} userName
   * @return {Boolean}

 */
import { useEffect} from 'react';
import {  useNavigate } from "react-router-dom";
import dumbbellSolid from "../assets/icons/dumbbellSolid.svg";
import moneyCheckDollarSolid from "../assets/icons/moneyCheckDollarSolid.svg";
import user from "../assets/icons/user.svg";
import moneyBillTrendUpSolid from "../assets/icons/moneyBillTrendUpSolid.svg";
import buildingColumnsSolid from "../assets/icons/buildingColumnsSolid.svg"


export function AdminDashboard () {

    let navigate = useNavigate();

    const userInfo = localStorage.getItem('userConnect');

   
    const adminConnect = localStorage.getItem('adminConnect');

    
    useEffect(()=>{

        if(userInfo === null && adminConnect === null ){

            return navigate('/login')
    
        }       


    },[]);

    return (

        <>

            <div className='dashboardContainer'>


                    
                    <div className='summaryCustomer'>

                        <span className='totalNumber'>200</span>

                        <img src={dumbbellSolid} className='dumbbellSolid' alt='dumbbell-solid'/>

                        <span className='summaryContext'>Total Clients Salle De Sport</span>
                    </div>

                    <div className='summaryCustomer' id='gradientColor'>

                        <span className='totalNumber'>5.521.850</span>

                        <img src={moneyCheckDollarSolid} className='dumbbellSolid' alt='dumbbell-solid'/>

                        <span className='summaryContext'>Total  Entrées</span>
                    </div>

                    <div className='summaryCustomer'>

                        <span className='totalNumber'>22</span>

                        <img src={user} className='dumbbellSolid' alt='dumbbell-solid'/>

                        <span className='summaryContext'>Total Des Emploiyés</span>
                    </div>

                     <div className='summaryCustomer' id="gradientColorSortie">

                        <span className='totalNumber'>1.229.000</span>

                        <img src={moneyCheckDollarSolid} className='dumbbellSolid' alt='dumbbell-solid'/>

                        <span className='summaryContext'>Total Des Sorties</span>
                    </div>

                    <div className='summaryCustomer' id='gradientColor'>

                        <span className='totalNumber'>1.229.000</span>

                        <img src={moneyCheckDollarSolid} className='dumbbellSolid' alt='dumbbell-solid'/>

                        <span className='summaryContext'>Total Des Salaires</span>
                    </div>

                      <div className='summaryCustomer' id="gradientColorSortie">

                        <span className='totalNumber'>2.000.000</span>

                        <img src={buildingColumnsSolid} className='dumbbellSolid' alt='dumbbell-solid'/>

                        <span className='summaryContext'>Total IMMO- BANK </span>
                    </div>

                    






            </div>
                    
        
        
        </>






    );



}



