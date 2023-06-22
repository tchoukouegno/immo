/** 
   * component that manages the view dashboard
   * @param {string} userName
   * @return {Boolean}

 */
import { useEffect, useState} from 'react';
import { useNavigate, Outlet, json } from "react-router-dom";
import immofitnessLogo from "../assets/logo/immofitnessLogo.jpg"
import woman from "../assets/img/woman.jpg"
import crossfit from "../assets/img/crossfit.jpg"
import fitnessBoy from "../assets/img/fitnessBoy.jpg"



export function Users () {

    const arrayCustomer= [{photo:immofitnessLogo,nom:"Immo fitness club",phone:"678455665", echéance:"23/06/2023"},
    {photo:woman,nom:"Julie Atangana",phone:"689062212", echéance:"25/06/2023"}, {photo:crossfit,nom:"Manuella Arcange",phone:"620093454", echéance:"22/06/2023"},
    {photo:fitnessBoy,nom:"Kenfack jeau de Dieu",phone:"698304566", echéance:"09/06/2023"},{photo:woman,nom:"Dieudonné",phone:"672445665", echéance:"27/06/2023"},
    {photo:immofitnessLogo,nom:"karl snow",phone:"676455665", echéance:"29/06/2023"},

]

    localStorage.setItem('arraycustomer', JSON.stringify(arrayCustomer))
    const [showButton, setShowButton] = useState(true);

   

    let navigate = useNavigate();

    const userInfo = localStorage.getItem('userConnect');

    
    useEffect(()=>{

        if(userInfo === null){

            return navigate('/login')
    
        }       


    },[]);

    const [arrayData, setArrayData]= useState(arrayCustomer);
    const [dataInput, setDataInput] = useState("");

    const string = dataInput;

    const userInput = string.toLowerCase();
   
    const datafilter =  arrayData.filter((data)=>{


        if(data.nom.toLowerCase().includes(userInput) === true ) {


            return data;

        }

        if(data.phone.toLowerCase().includes(userInput) === true) {
           
            return data;

        }

        if(data.echéance.toLowerCase().includes(userInput) === true) {
           
            return data;

        }
        
       
        
    })


    const handleChange = (e)=>{ 
        
        setDataInput(e.target.value);

        setCurrentPage(1);
   
        setArrayData(arrayData);
       
    }

    

    const [selectValue, setSelectValue] = useState(5);

    
   const handleChangeSelect = (e)=>{     

    setSelectValue(e.target.value);

    setCurrentPage(1);
   
    setArrayData(arrayData);
   
    };

    const [currentPage, setCurrentPage]= useState(1);
    const recordsPerPage= selectValue;
    let lastIndex = currentPage * recordsPerPage ;
    let firstIndex = lastIndex  - recordsPerPage;
    const displaydata = datafilter.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(arrayData.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);

    const prevPage = ()=>{

        if(currentPage !== 1 && dataInput.length === 0) {
    
        
         setCurrentPage(currentPage - 1);
        
    
        }
    
    
       }
    
    //    const changePage = (page)=>{
        
    //     setCurrentPage(page) ;
    
    //    }
    
       const nextPage = ()=>{
    
        if(currentPage !== nPage && currentPage <= nPage && dataInput.length === 0) {
    
            setCurrentPage(currentPage + 1);
    
        }
    
    
       }

   


    const handleAdd = ()=>{

        setShowButton(!showButton)

      return  navigate('/sideNavBar/Users/addUsers');


    };


    const filterByName = (arrayOfElements, nameOfFilter)=>{

        return arrayOfElements.sort((a, b)=>{


            if(nameOfFilter === "nom"){
    
                return a.nom.localeCompare(b.nom);
    
            }
    
            if(nameOfFilter === "phone"){
    
                return a.phone.localeCompare(b.phone);
    
            }
    
            if(nameOfFilter === "echéance"){
    
                return a.echéance.localeCompare(b.echéance);
    
            }
    
           
    
            return a.localeCompare(b);
        });  
    




    }

   const [filterNameShow, setFilterNameShow]= useState(true);
   const [filterPhoneShow, setFilterPhoneShow]= useState(true);
   const [filterEcheanceShow, setFilterEcheanceShow]= useState(true);


   const handleFilterName= ()=>{

        setFilterNameShow(!filterNameShow);
        setFilterPhoneShow(true);
        setFilterEcheanceShow(true);

        if(filterNameShow === true) {

            setArrayData(filterByName(arrayData,"nom"));

        } else {

            const initialArray = localStorage.getItem('arraycustomer');

            setArrayData(JSON.parse(initialArray));
        }

       

        


   };

   const handlefilterPhone= ()=>{

    setFilterPhoneShow(!filterPhoneShow);
    setFilterEcheanceShow(true);
    setFilterNameShow(true);

    if(filterPhoneShow === true) {

        setArrayData(filterByName(arrayData,"phone"));

    }else {

        const initialArray = localStorage.getItem('arraycustomer');

        setArrayData(JSON.parse(initialArray));
    }


};

const handlefilterEcheance= ()=>{

    setFilterEcheanceShow(!filterEcheanceShow);
    setFilterPhoneShow(true);
    setFilterNameShow(true);

    if(filterEcheanceShow === true) {

        setArrayData(filterByName(arrayData,"echéance").reverse());

    }else {

        const initialArray = localStorage.getItem('arraycustomer');

        setArrayData(JSON.parse(initialArray));
    }



};

    

    const isDateBeforeEndOfMonth = (dateString) => {

        const normeDate=dateString.split("/").reverse().join("-");
        console.log(normeDate)
        const date = new Date(normeDate);
        const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const diffInDays = Math.ceil((endOfMonth.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
        return diffInDays <= 7;
      };

    



   
    return (

        <>
        
       
       <div className='usersArray'>

       <Outlet/>

       {showButton&& <button onClick={handleAdd} className='goToAddUser'>+</button> }


            <h3 className='users'>Clients</h3>

                <div className='arrayContainer'>


                    <div className='searchContainer'>

                        <input placeholder='Recherche rapide' value={userInput}  onChange={handleChange} className='search'/>



                    </div>

                    <div className='arrayContent' >

                    <table>
                    
                        <thead>

                            <tr>
                                

                                    <td>Photo</td>
                                    <td onClick={handleFilterName} className={filterNameShow ?  "namehiddenShow": "name" }>Nom complet</td>
                                    <td onClick={handlefilterPhone} className={filterPhoneShow ? "namehiddenShow": "name"}>Téléphone</td>
                                    <td onClick={handlefilterEcheance } className={filterEcheanceShow ? "namehiddenShow": "name"}>Echéance</td>
                               
            
                            </tr>
                            

                        </thead>  
            
                    </table>

                    <div className='scrollContent'>

                    <table className='arrayBody'>

                       

                        { displaydata.length !== 0 ?displaydata.map((customer,index)=>(

                                    <tbody key={index}>

                                    <tr>

                                        <td><img src={`${customer.photo}`} className='customerPicture' /></td>
                                        <td>{customer.nom}</td>
                                        <td>{customer.phone}</td>
                                        <td style={{ color: isDateBeforeEndOfMonth(customer.echéance) ? 'red' : 'black' }} >{customer.echéance}</td>


                                    </tr>

                                    </tbody>

                                ))
                                
                                
                            :
                            <tbody id='errorFound' >

                                    <tr ><td >No matching records found</td></tr>

                            </tbody>
                            
                            
                            
                            }
        
                    
    
                    </table>

                   
        
                    </div>
                    

                    </div>

                    <div className='arrayFooter'>
                            
                        <div className={`${currentPage !==1 && dataInput.length === 0 ? 'activeChange' : 'prevOrNext'}`} onClick={prevPage} >Préc.</div>

                        <div className='sizeArray'>


                                <div>Page  {currentPage} /{nPage}</div>

                                {/* <input type="number" className='pageInput' /> */}

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

                        <div className= {` ${currentPage !== nPage && currentPage <= nPage && dataInput.length === 0   ? 'activeChange' : 'prevOrNext'}`}  onClick={nextPage}>Suiv.</div>


                    </div>








                </div>
            
        


       </div>
        
        
            
        
      
            
           
        
        </>






    );



}
