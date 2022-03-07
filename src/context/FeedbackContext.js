import {createContext,useState,useEffect} from "react"
import {v4 as uuidv4} from 'uuid';
import Header from './../components/Header';


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    // the id of the edit button when we click on 
    
    const [feedback, setFeedBack] = useState([]);
    const [idSelected,setIdSelected] = useState();
    const [selected,setSelected]= useState();
    const [isLoading, setIsLoading] = useState(true);
    const [update,setUpdate] = useState(false);
    const [review, setreview] = useState('Write a review');

    const [feedbackEdit, setFeedbackEdit]=useState({
        item:{
            id:0,
            rating:5,
            text:''
        },
        edit:false
    })



    useEffect (()=>{
        fetchDatas();
    },[])
    

    const fetchDatas = async()=>{
        const response = await fetch(`http://localhost:5000/feedback?sort=id`);
        const datas = await response.json();
        setFeedBack(datas);
        setIsLoading(false);
    }

    const handleChange = (e) =>{        
        document.getElementById('num'+selected).nextSibling.classList.remove('active');
        document.getElementById('num'+e.currentTarget.id).nextSibling.classList.add('active');
        setSelected(Number(e.currentTarget.id));
      }

    const handleDelete =  async(id) => {
        if(window.confirm('Are you ure ?')){
            await fetch(`http://localhost:5000/feedback/${id}`,{method:'DELETE'});
         setFeedBack(feedback.filter((item)=>item.id !== id))
        }          
      }
    
    const addFeedback = async(newFeedback,id) => {
        if(!update){
            const response = await fetch('http://localhost:5000/feedback',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body : JSON.stringify(newFeedback)
                 
        }
        );
            newFeedback.id=uuidv4();
            const data = await response.json();
             setFeedBack([...feedback,data]);    
        }else{
                const response = await fetch(`http://localhost:5000/feedback/${feedbackEdit.item.id}`,{
                method:"PUT",
                headers:{'Content-Type':'application/json'},
                body : JSON.stringify(newFeedback)

            })
            const data = await response.json();
            const newfeed = feedback.map((item)=>item.id===data.id ? {...data} : {...item} ) ;
            console.log('====================================');
            console.log(newfeed);
            console.log('====================================');
            

             setFeedBack(newfeed);
        }
        initialize();
    }

    const initialize = () => {
        setSelected(5);
        document.getElementById('num'+selected).nextSibling.classList.remove('active');
        document.getElementById('num'+selected).checked=false;
        setUpdate(false);
        setreview('')

    }

    const editFeedback = (item) => {
        
        
        // console.log('item->');
        // console.log(item);
        setFeedbackEdit({
            item,
            edit:true
        })
        document.getElementById('num'+selected).nextSibling.classList.remove('active');
        document.getElementById('num'+selected).checked=false;
        document.getElementById('num'+item.rating).nextSibling.classList.add('active');
        setUpdate(true);
        setSelected(Number(item.rating))
    }
    

    return (
    <FeedbackContext.Provider 
        value={{
            feedback,
            handleDelete,
            addFeedback,
            editFeedback,
            feedbackEdit,
            selected,
            setSelected,
            handleChange,
            update,
            setUpdate,
            review,
            setreview,
            isLoading,
            idSelected,
            setIdSelected

        }} >
            {children}
    </FeedbackContext.Provider>
    )



}

export default FeedbackContext;