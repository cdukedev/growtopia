import "./AddPlantPage.scss";
import Card from "../../components/Card/Card";
import tomatoes from "..//../assets/tomatoes.png"

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
        <Card title="Tomato Plant" body="Tomato plant can be grown in a variety of ways, including in soil, in container..." image={tomatoes} />
        <Card title="Tomato Plant" body="Tomato plant can be grown in a variety of ways, including in soil, in container..." image={tomatoes} />
      </div>
    </div>
  );
}

export default AddPlantPage;
