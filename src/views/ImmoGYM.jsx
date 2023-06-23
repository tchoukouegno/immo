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



export function ImmoGYM () {

    const arrayCustomer= [{photo:"139.850 ",nom:"",phone:"117.500 ", echéance:"01/05/2023"},
    {photo:"259.500",nom:"transport Mr Paulin 2000",phone:"204.500", echéance:"02/05/2023"}, {photo:"124.000 ",nom:"surfilage serviettes",phone:"88.000", echéance:"04/05/2023"},
    {photo:"271.000",nom:"flocage tenue coach 15000",phone:"160.000 ", echéance:"03/05/2023"},{photo:"219.500 ",nom:"achat pain, transport groupe électrogène 4500",phone:"185.500 ", echéance:"05/05/2023"},
    {photo:"243.500",nom:"achat pain, maintenance plomberie 4500",phone:"236.500 ", echéance:"06/05/2023"},

]

const arrayRecap= [{photo:"4.241.000 ",nom:"115.000",phone:"4.126.000 ", echéance:"535.000",month:"mai",gains:"3.591.000"},

]

    localStorage.setItem('arraycustomer', JSON.stringify(arrayCustomer));

    localStorage.setItem('arrayRecap', JSON.stringify(arrayRecap))
    const [showButton, setShowButton] = useState(true);

   

    let navigate = useNavigate();

    const userInfo = localStorage.getItem('userConnect');

    const adminConnect = localStorage.getItem('adminConnect');

    
    useEffect(()=>{

        if(userInfo === null && adminConnect === null ){

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

        setShowButton(!showButton);

        if(adminConnect!== null) {

            return  navigate('/manager/Users/addUsers');


        }

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

    


            <h3 className='users'>IMMO-GYM</h3>

                <div className='arrayContainer'>


                    <div className='searchContainer'>

                        <input placeholder='Recherche rapide' value={userInput}  onChange={handleChange} className='search'/>



                    </div>

                    <div className='arrayContent' >

                    <table>
                    
                        <thead>

                            <tr>
                                

                                    <td>ENTREES</td>
                                    <td onClick={handleFilterName} className={filterNameShow ?  "namehiddenShow": "name" }>SORTIES</td>
                                    <td onClick={handlefilterPhone} className={filterPhoneShow ? "namehiddenShow": "name"}>RECETTE EN CAISSE</td>
                                    <td onClick={handlefilterEcheance } className={filterEcheanceShow ? "namehiddenShow": "name"}>Date</td>
                               
            
                            </tr>
                            

                        </thead>  
            
                    </table>

                    <div className='scrollContent'>

                    <table className='arrayBody'>

                       

                        { displaydata.length !== 0 ?displaydata.map((customer,index)=>(

                                    <tbody key={index}>

                                    <tr>

                                        <td>{customer.photo}</td>
                                        <td>{customer.nom}</td>
                                        <td>{customer.phone}</td>
                                        <td >{customer.echéance}</td>


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
            
        
                    <div>

                         <h3 className='users'>RECAPITULATIF</h3>

                <div className='arrayContainer'>


                    <div className='searchContainer'>

                        <input placeholder='Recherche rapide' value={userInput}  onChange={handleChange} className='search'/>



                    </div>

                    <div className='arrayContent' >

                    <table>
                    
                        <thead>

                            <tr>
                                

                                    <td>ENTREES</td>
                                    <td onClick={handleFilterName} className={filterNameShow ?  "namehiddenShow": "name" }>SORTIES</td>
                                    <td onClick={handlefilterPhone} className={filterPhoneShow ? "namehiddenShow": "name"}>Recap</td>
                                    <td onClick={handlefilterEcheance } className={filterEcheanceShow ? "namehiddenShow": "name"}>Salaire</td>
                                    <td onClick={handlefilterEcheance } className={filterEcheanceShow ? "namehiddenShow": "name"}>Mois</td>
                                    <td onClick={handlefilterEcheance } className={filterEcheanceShow ? "namehiddenShow": "name"}>Gains</td>
                               
            
                            </tr>
                            

                        </thead>  
            
                    </table>

                    <div className='scrollContent'>

                    <table className='arrayBody'>

                       

                        { arrayRecap.length !== 0 ?arrayRecap.map((customer,index)=>(

                                    <tbody key={index}>

                                    <tr>

                                        <td>{customer.photo}</td>
                                        <td>{customer.nom}</td>
                                        <td>{customer.phone}</td>
                                        <td >{customer.echéance}</td>
                                        <td >{customer.month}</td>
                                        <td >{customer.gains}</td>


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


                                <div>Page  1 /1</div>

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
                            
       </div>
        
        
            
        
      
            
           
        
        </>






    );



}
