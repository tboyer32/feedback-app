function FeedbackStats({ feedback }) {
  //calculate ratings avg
  //using a reducer on the feedback array
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0) / feedback.length;

  //make sure the average is truncated to one decimal place
  //use a regular expression to remove the zero for whole numbers
  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats;