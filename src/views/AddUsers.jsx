/** 
   * component that manages the view addUsers
   * @param {} 
   * @return {html}jsx

 */
import { useEffect} from 'react';
import {  useNavigate,Outlet } from "react-router-dom";




export function AddUsers() {


    let navigate = useNavigate();

    const userInfo = localStorage.getItem('userConnect');

   
    useEffect(()=>{

        if(userInfo === null){

            return navigate('/login')
    
        }


    },[]);

    const handleBack = (e)=>{

        // e.preventDefault();

       

        return  navigate('/sideNavBar/Users');


    }
    







    return(


        <>
        
        
        <div className='containerUsers'>



    <h3 className='createUsers'>Ajouter un client</h3>

    <form className='addUsers'>

        <div className='ItemsForm'>

            
            <div className='itemForm'>

                        <label style={{width:"50px",color:"#78808A"}}  htmlFor="name">Nom:</label>
                        <input   type="text"  />

            </div>

            <div className='itemForm'>

                        <label style={{width:"50px",color:"#78808A"}}  htmlFor="name">Prénoms:</label>
                        <input type="text"  />

            </div>

             <div className='itemForm'>

                        <label style={{width:"50px",color:"#78808A"}}  htmlFor="name">Sexe:</label>
                        <input type="text"  placeholder='ex: Masculin / Féminin' />

            </div>

             <div className='itemForm'>

                        <label style={{width:"50px",color:"#78808A"}}  htmlFor="name">Taille:</label>
                        <input type="number" placeholder='ex: 1.74' />

            </div>

            <div className='itemForm'>

                        <label style={{width:"50px",color:"#78808A"}}  htmlFor="name">Poids:</label>
                        <input type="number" placeholder='ex: 90'   />

            </div>

             <div className='itemForm'>

                        <label style={{width:"50px",color:"#78808A", transform:"translate3d(-30px,0,0)"}}  htmlFor="name">Antécédants:</label>
                        <input type="text" placeholder='ex: allergies, problèmes de santé' />

            </div>

             <div className='itemForm'>

                        <label style={{width:"50px",color:"#78808A", transform:"translate3d(-30px,0,0)"}}  htmlFor="name">Téléphone:</label>
                        <input type="number" placeholder='ex:690005634 / 677450017' />

            </div>

             <div className='itemForm'>

                        <label style={{width:"50px",color:"#78808A", transform:"translate3d(-30px,0,0)"}}  htmlFor="name">Nationalité:</label>
                        <input type="text" placeholder='ex: Camerounaise' />
                        
            </div>








        </div>

        <div className='submitForm'></div>


        <div className='fileBtnBackAdd'>

            <input type='file'/>

            <div className='btnBackAdd'>

                    <button onClick={handleBack} className='btnForm' id='btnFormBack'>Retour</button>
                    <button className='btnForm' id='btnFormAdd'>Ajouter</button>


            </div>


          
            
        </div>







    </form>



</div>

         

        
        
        </>







    );








}