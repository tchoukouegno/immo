/** 
   * component that manages the view dashboard
   * @param {string} userName
   * @return {Boolean}

 */
import { useEffect, useState} from 'react';
import { useNavigate, Outlet } from "react-router-dom";
import immofitnessLogo from "../assets/logo/immofitnessLogo.jpg"
import woman from "../assets/img/woman.jpg"
import crossfit from "../assets/img/crossfit.jpg"
import fitnessBoy from "../assets/img/fitnessBoy.jpg"



export function Users () {

    const [showButton, setShowButton] = useState(true);

    let navigate = useNavigate();

    const userInfo = localStorage.getItem('userConnect');

    

   

    useEffect(()=>{

        if(userInfo === null){

            return navigate('/login')
    
        }       


    },[]);


    const handleAdd = ()=>{

        setShowButton(!showButton)

      return  navigate('/sideNavBar/Users/addUsers');


    };

   
    return (

        <>
        
       
       <div className='usersArray'>

       <Outlet/>

       {showButton&& <button onClick={handleAdd} className='goToAddUser'>+</button> }


            <h3 className='users'>Clients</h3>

                <div className='arrayContainer'>


                    <div className='searchContainer'>

                        <input placeholder='Recherche rapide' className='search'/>



                    </div>

                    <div className='arrayContent' >

                    <table>
                    
                        <thead>

                            <tr>
                                



                                    <td>Photo</td>
                                    <td>Nom complet</td>
                                    <td>Téléphone</td>
                                    <td>Echéance</td>
                                {/* {employeeTitle.map((employee)=>(

                                    <td key={employee.data} onClick={()=>handleClick(employee.data)}>{employee.title}</td>

                                ))} */}
            
                            </tr>
                            

                        </thead>  
            
                    </table>

                    <table className='arrayBody'>
        
                        
                            <tr>
                    
                                <td><img src={immofitnessLogo} className='customerPicture' /></td>
                                <td>Immo fitness club</td>
                                <td>678455665</td>
                                <td>23/06/2023</td>
                    
                            </tr>
                    
    
                    </table>

                    <table className='arrayhover'>
        
                        
                            <tr>
                    
                                <td><img src={woman} className='customerPicture' /></td>
                                <td>Julie Atangana</td>
                                <td>689062212</td>
                                <td>12/06/2023</td>
                    
                            </tr>
                    
    
                    </table>

                    <table className='arrayBody'>
        
                        
                            <tr>
                    
                                <td><img src={crossfit} className='customerPicture' /></td>
                                <td>Manuella Arcange</td>
                                <td>620093454</td>
                                <td>21/06/2023</td>
                    
                            </tr>
                    
    
                    </table>

                    <table className='arrayhover'>
        
                        
                            <tr>
                    
                                <td><img src={fitnessBoy} className='customerPicture' /></td>
                                <td>Kenfack jeau de Dieu</td>
                                <td>698304566</td>
                                <td>09/06/2023</td>
                    
                            </tr>
                    
    
                    </table>

                     <table className='arrayhover'>
        
                        
                            <tr>
                    
                                <td><img src={fitnessBoy} className='customerPicture' /></td>
                                <td>Kenfack jeau de Dieu</td>
                                <td>698304566</td>
                                <td>09/06/2023</td>
                    
                            </tr>
                    
    
                    </table>
        
        

                    <div className='arrayFooter'>
                            
                        <div className='prevOrNext'>Préc.</div>

                        <div className='sizeArray'>


                                <div>Page <input type="number" className='pageInput' />  /1</div>

                                <div>

                            
                                    <select>

                                        <option value={5}>5rows</option>
                                        <option value={10}>10rows</option>
                                        <option value={25}>25rows</option>
                                        <option value={50}>50rows</option>
                                        <option value={100}>100rows</option>

                                    </select>




                                </div>

                        </div>

                        <div className='prevOrNext'>Suiv.</div>


                    </div>

                    </div>








                </div>
            
        


       </div>
        
        
            
        
      
            
           
        
        </>






    );



}
