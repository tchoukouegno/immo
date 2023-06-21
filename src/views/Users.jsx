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

    const [selectValue, setSelectValue] = useState(5);
    
   const handleChangeSelect = (e)=>{     

    setSelectValue(e.target.value);

    // setCurrentPage(1);
   
    // setEmployeeData(employees);
   
    };

    // const [currentPage, setCurrentPage]= useState(1);
    // const recordsPerPage= selectValue;
    // let lastIndex = currentPage * recordsPerPage ;
    // let firstIndex = lastIndex  - recordsPerPage;
    // const displayEmployeeList = employeeDataFilterList.slice(firstIndex, lastIndex);
    // const nPage = Math.ceil(employees.length / recordsPerPage);
    // const numbers = [...Array(nPage + 1).keys()].slice(1);

    // const prevPage = ()=>{

    //     if(currentPage !== 1 && dataInput.length === 0) {
    
        
    //      setCurrentPage(currentPage - 1);
        
    
    //     }
    
    
    //    }
    
    //    const changePage = (page)=>{
        
    //     setCurrentPage(page) ;
    
    //    }
    
    //    const nextPage = ()=>{
    
    //     if(currentPage !== nPage && currentPage <= nPage && dataInput.length === 0) {
    
    //         setCurrentPage(currentPage + 1);
    
    //     }
    
    
    //    }

    const arrayCustomer= [{photo:'../src/assets/logo/immofitnessLogo.jpg',nom:"Immo fitness club",phone:"678455665", echéance:"23/06/2023"},
    {photo:'../src/assets/img/woman.jpg',nom:"Julie Atangana",phone:"689062212", echéance:"12/06/2023"}, {photo:'../src/assets/img/crossfit.jpg',nom:"Manuella Arcange",phone:"620093454", echéance:"21/06/2023"},
    {photo:'../src/assets/img/fitnessBoy.jpg',nom:"Kenfack jeau de Dieu",phone:"698304566", echéance:"09/06/2023"},{photo:'../src/assets/img/fitnessBoy.jpg',nom:"Dieudonné",phone:"672445665", echéance:"13/06/2023"},
    {photo:'../src/assets/logo/immofitnessLogo.jpg',nom:"karl snow",phone:"676455665", echéance:"11/06/2023"},

]


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

                    <div className='scrollContent'>

                    <table className='arrayBody'>

                        {arrayCustomer.map((customer,index)=>(

                                    <tr key={index}>

                                        <td><img src={`${customer.photo}`} className='customerPicture' /></td>
                                        <td>{customer.nom}</td>
                                        <td>{customer.phone}</td>
                                        <td>{customer.echéance}</td>


                                    </tr>



                                ))}
        
                    
    
                    </table>

                   
        
                    </div>
                    

                    </div>

                    <div className='arrayFooter'>
                            
                        <div className='prevOrNext'>Préc.</div>

                        <div className='sizeArray'>


                                <div>Page <input type="number" className='pageInput' />  /1</div>

                                <div>

                            
                                    <select onChange={handleChangeSelect} value={selectValue}>

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
        
        
            
        
      
            
           
        
        </>






    );



}
