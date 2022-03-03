import {createContext,useState} from "react"
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    // the id of the edit button when we click on 
    
    const [feedback, setFeedBack] = useState([
        {
            id:1,
            rating:9,
            reverse:false,
            text:'Commodo reprehenderit aute cupidatat ipsum occaecat non cupidatat aliqua ut culpa eiusmod laborum.'
        },
        {
            id:2,
            rating:5,
            reverse:true,
            text:'Labore non cupidatat adipisicing occaecat elit ut tempor voluptate laborum ut.'
        },
        {
            id:3,
            rating:1,
            text:'Id ea ullamco dolore eiusmod ipsum id do et aute sint ea duis ipsum cupidatat.'
        },
    ]);

    const [selected,setSelected]= useState();
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

    const handleChange = (e) =>{        
        document.getElementById('num'+selected).nextSibling.classList.remove('active');
        document.getElementById('num'+e.currentTarget.id).nextSibling.classList.add('active');
        setSelected(Number(e.currentTarget.id));
      }

    const handleDelete = (id) => {
        if(window.confirm('Are you ure ?')){
            setFeedBack(feedback.filter((item)=>item.id !== id))
        }          
      }
    
    const addFeedback = (newFeedback) => {
        if(!update){
            newFeedback.id=uuidv4();
            setFeedBack([...feedback,newFeedback]);    
        }else{
             const newfeed = feedback.map((item)=>item.id===feedbackEdit.item.id ? {...item,rating:selected,text:review} : {...item} ) ;
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
        console.log(item);
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
            setreview

        }} >
            {children}
    </FeedbackContext.Provider>
    )



}

export default FeedbackContext;