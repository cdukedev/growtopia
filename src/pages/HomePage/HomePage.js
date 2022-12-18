import "./HomePage.scss";
import CircleButton from "../../components/CircleButton/CircleButton";
import DraggableDiv from "../../components/DraggableDiv/DraggableDiv";
import { data } from "../../data/user";

function HomePage() {
  // const plants = data.get("plants");
  // console.log(plants);
  // const utilities = data.get("utilities");

  // const draggableItems = data.map((item) => (
  //   <DraggableDiv key={item.id} name={item.name} />
  // ));
  return (
    <div className="App">
      <CircleButton />
      {/* <div className="draggable-container">{draggableItems}</div> */}
    </div>
  );
}

export default HomePage;
