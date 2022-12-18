import "./AddPlantPage.scss";
import Card from "../../components/Card/Card";
import tomatoes from "..//../assets/tomatoes.png";
import mango from "../../assets/mango.jpg";
import rosemary from "../../assets/rosemary.jpg"

function AddPlantPage() {
  return (
    <div className="App">
      <div className="zip-container">
        <h4>Type your zip code</h4>
        <input className="input"></input>
        <button className="zip-button">ENTER</button>
      </div>
      <div className="card-container">
        <Card title="Tomato Plant" body="Tomato plant can be grown in a variety of ways, including in soil, in container..." image={tomatoes} />
        <Card title="Mango Tree" body="Mango is a type of fruit that is native to South Asia, although it is now grown..." image={mango} />
        <Card title="Rosemary" body="Rosemary is a perennial evergreen shrub with blue flowers. It's an aromatic and distinctive herb..." image={rosemary} />
      </div>
    </div>
  );
}

export default AddPlantPage;
