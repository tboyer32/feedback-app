import Card from "../components/shared/Card"
import {Link} from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About</h1>
            <p>This page really only exists to demonstrate routing in React.</p>
            <p><Link to="/">Back to home</Link></p>
        </div>
    </Card> 
  )
}

export default AboutPage