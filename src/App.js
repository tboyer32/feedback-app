//library to create a unique id
import { v4 as uuidv4 } from "uuid";

//browser router uses the HTML 5 history API - gives you a normal url like mysite.com/about
//hash router uses the hash portion of the url to keep things in sync. With hash your URL would be mysite.com/#about, which isn't what we want
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { useState } from "react";

import FeedbackData from "./data/FeedbackData";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";

import AboutPage from "./pages/AboutPage";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        //set the feedback state to an array with all the old feedback (spread operator, and the new feedback at the beginning of the array)
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                        } >
                    </Route>
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
    );
}

export default App;