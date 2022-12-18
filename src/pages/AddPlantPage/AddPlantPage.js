import "./AddPlantPage.scss";

function AddPlantPage() {
  return (
    <div className="App">
      <h1>This is Add Plant Page</h1>
      <div className="zip-container">
        <h4>Type your zip code</h4>
        <input className="input"></input>
        <button className="zip-button">ENTER</button>
      </div>
    </div>
  );
}

export default AddPlantPage;
