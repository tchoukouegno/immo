/** 
   * component that manages the view dashboard
   * @param {string} userName
   * @return {Boolean}

 */
import { useEffect, useState} from 'react';
import {  NavLink, useNavigate, Outlet } from "react-router-dom";
import user from '../assets/icons/user.svg';
import dashboard from '../assets/icons/dashboard.svg';
import immofitnessLogo from '../assets/logo/immofitnessLogo.jpg';
import logout from '../assets/icons/logout.svg';
import dumbbellSolid from '../assets/icons/dumbbellSolid.svg';
import pieChart from '../assets/icons/pieChart.svg';
import fishSolid from '../assets/icons/fishSolid.svg';
import waterSolid from '../assets/icons/waterSolid.svg';








export function Manager() {




    const [isOpen, setIsOpen] = useState(false);

    let navigate = useNavigate();

    

    const userInfo = localStorage.getItem('userConnect');

    const handleClose = ()=>{


        setIsOpen(!isOpen);


    }

    

    // useEffect(()=>{

    //     if(userInfo === null){

    //         return navigate('/login')
    
    //     }


    // },[]);


    const handleLogout = ()=>{

        localStorage.clear();

        return navigate('/login');

    };

 
    return (

        <>

            <div className={isOpen ?  'container' :  'containersmall'}>

                <div className={isOpen ?  'sideNavBarContent' :  'sideNavBarContentSmall'}>
                
                       <div className='sideBarTitle'>

                            <img style={{display: isOpen ? "block":"none", transition:"all 0.7s ease-in-out"}} src={immofitnessLogo} className='ImmologoSidebar' alt='logo'/>
                            <h2 style={{display: isOpen ? "block":"none",transition:"all 0.7s ease-in-out"}} >IMMO</h2>
                           
                            <button
						className={
							isOpen ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setIsOpen(!isOpen)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>


                       </div>

                          
                        <div className='menuNav'>
                           
                            <div className='navItem'>
                                <img className='iconsSize' src={dashboard}/>
                                
                                <NavLink className={isOpen ? "displayItem" : "offItem"} to="/sideNavBar/dashboard">Dashboard</NavLink>

                            </div>

                            <div className='navItem'>
                                <img className='iconsSize' src={pieChart}/>
                                
                                <NavLink className={isOpen ? "displayItem" : "offItem"} to="/sideNavBar/dashboard">Statistiques</NavLink>

                            </div>
                           
                           <div className='navItem'>

                             <img className='iconsSize' src={user}/>

                            <NavLink className={isOpen ? "displayItem" : "offItem"} to="/manager/Users">Clients</NavLink>

                           </div>

                           <div className='navItem'>

                             <img className='iconsSize' src={user}/>

                            <NavLink className={isOpen ? "displayItem" : "offItem"} to="/manager/employee">Employés</NavLink>

                           </div>

                           <div className='navItem'>

                             <img className='iconsSize' src={dumbbellSolid}/>

                            <NavLink className={isOpen ? "displayItem" : "offItem"} to="/manager/immoGYM">Immo-GYM</NavLink>

                           </div>

                           <div className='navItem'>

                             <img className='iconsSize' src={waterSolid}/>

                            <NavLink className={isOpen ? "displayItem" : "offItem"} to="/manager/spa">Immo-SPA</NavLink>

                           </div>

                           <div className='navItem'>

                             <img className='iconsSize' src={fishSolid}/>

                            <NavLink className={isOpen ? "displayItem" : "offItem"} to="/sideNavBar/Users">Immo-RESTO</NavLink>

                           </div>

                           <div className='navItem' id='logOut'  style={{width:isOpen? "226px": "35px" }} >

                             <img className='iconsSize' src={logout} alt='logout'/>

                            <span className={isOpen ? "displayItem" : "offItem"} onClick={handleLogout} >Déconnexion</span>

                           </div>

                        </div>


                </div>
        
                <Outlet/>


            </div>

        
        
        
        </>






    );




















}