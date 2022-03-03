import Header from "./components/Header";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import FeedbackList from "./components/FeedbackList";
import {useState} from 'react';


import { FeedbackProvider } from "./context/FeedbackContext";

import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackForm from "./components/FeedbackForm";
import "./scss/index.scss";
import AboutPage from "./pages/AboutPage"; 
import PostPage from "./pages/PostPage";  


    
function App(){  
     
    // eslint-disable-next-line
    const [fbData, setFbData] = useState(FeedbackData);



    

    return(
    <>
        <FeedbackProvider>
            <Router>
                <Routes>
                    <Route path='/' element={
                        <div className="row">
                            <div className="col-lg-6 col-11 mx-auto my-3">                  
                            <FeedbackForm  />
                            <FeedbackStats />
                            <FeedbackList  />                
                            </div>
                        </div>}
                        />            
                    <Route path="/about" element={<AboutPage />} />     
                    </Routes>      
            </Router>
        </FeedbackProvider>
    </>
        
           
    
    )
}

export default App;