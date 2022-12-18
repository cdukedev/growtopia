import './SinglePlantPage.scss';
import tomaticos from "../../assets/tomaticos.png"


function SinglePlantPage() {
  return (
    <div className="App">
      <div className='plant-container'>
        <div>
          <img></img>
          <h4>Tomato Plant</h4>
        </div>
        <img src={tomaticos} className="single-plant-image"></img>
        <p>Tomato plants are members of the nightshade family (Solanaceae) and are native to South America. They are typically grown in warm, sunny climates and are sensitive to frost. Tomato plants can grow to be quite large, reaching heights of up to 10 feet or more. They have a branching, vine-like growth habit and typically produce clusters of small, yellow flowers that give way to the tomato fruit.</p>
        <button className="card-button">+</button>
        

      </div>
      
    </div>
  );
}

export default SinglePlantPage;