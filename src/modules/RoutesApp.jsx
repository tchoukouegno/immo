/** 
   *module responsible for managing all the application's routes
   * @param {} 
   * @return {html} jsx

 */
import {Routes,Route} from 'react-router-dom';
import { Login } from "../views/Login";
import { SideNavBar } from '../views/SideNavBar';
import { Users } from '../views/Users';
import { Dashboard } from '../views/Dashboard';
import {AddUsers} from '../views/AddUsers'






export function RoutesApp () {


    return (

        <>

                <Routes>

                        <Route index element={<Login/>}/>
                        
                        <Route path='/login' element={<Login/>}/>

                        <Route path='/login' element={<Login/>}/>

                        <Route path='/sideNavBar' element={<SideNavBar/>}>

                            <Route path='/sideNavBar/dashboard' element={<Dashboard/>}/>
        
                            <Route path='/sideNavBar/Users' element={<Users/>}>

                                <Route path='/sideNavBar/Users/AddUsers' element={<AddUsers/>}/>

                            </Route>

                        </Route>

                </Routes>     



        </>


    );



};