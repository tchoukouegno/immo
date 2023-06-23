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
import {AddUsers} from '../views/AddUsers';
import { Manager } from '../views/Manager';
import {Employee} from '../views/Employee';
import {ImmoGYM} from '../views/ImmoGYM';
import { Spa } from '../views/Spa';
import {Resto} from '../views/Resto';
import {AdminDashboard} from '../views/AdminDashboard';






export function RoutesApp () {


    return (

        <>

                <Routes>

                        <Route index element={<Login/>}/>
                        
                        <Route path='/login' element={<Login/>}/>

                        <Route path='/manager' element={<Manager/>}>

                             <Route path='/manager/adminDashboard' element={<AdminDashboard/>}/>

                             <Route path='/manager/immoGYM' element={<ImmoGYM/>}/>

                             <Route path='/manager/spa' element={<Spa/>}/>

                             <Route path='/manager/resto' element={<Resto/>}/>

                             <Route path='/manager/employee' element={<Employee/>}/>

                            <Route path='/manager/Users' element={<Users/>}>
                                
                                 <Route path='/manager/Users/AddUsers' element={<AddUsers/>}/>
                                
                            </Route>
                            
                        </Route>


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