import { useState } from "react";
import Card from './shared/Card';
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
      if (text === '') {
          setBtnDisabled(true);
          setMessage('');
      } else if (text !== '' && text.trim().length <= 10) {
          setBtnDisabled(true);
          setMessage('Text must be at least 10 characters');
      } else {
        setBtnDisabled(false);
        setMessage(null);
      }
      setText(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      if(text.trim().length > 10){
          const newFeedback = {
              text: text,
              rating: rating
          }
          handleAdd(newFeedback);
          setText('');
      }
  }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>Rate your experience</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className='input-group'>
                <input onChange={handleTextChange} type="text" value={text} placeholder='Write a review' />
                <Button type='sumbit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm