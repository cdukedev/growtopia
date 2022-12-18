import { useState, useEffect } from "react";
import "./DraggableDiv.scss";
function DraggableDiv(props) {
  // Create state variables to store the div's current position
  // and a flag to indicate whether the div is currently being dragged
  // expecting x and y to be numbers
  const [garden, setGarden] = useState({
    garden: [
      {
        id: 1,
        name: "Strawberry",
        x: 0,
        y: 15,
        icon: "https://i.imgur.com/khCTW7P.png",
      },
      {
        id: 2,
        name: "Strawberry",
        x: 0,
        y: 25,
        icon: "https://i.imgur.com/khCTW7P.png",
      },
      {
        id: 3,
        name: "Strawberry",
        x: 0,
        y: 45,
        icon: "https://i.imgur.com/khCTW7P.png",
      },
    ],
  });
  const [data, setData] = useState({
    utilities: [
      {
        x: "1",
        y: "1",
        garden: "box1",
        link: "https://i.imgur.com/u9Ch5OO.png",
      },
    ],
    cp: "286",
  });
  console.log(data.utilities[0].link);
  const [x, setX] = useState(props.x);
  const [y, setY] = useState(props.y);
  const [isDragging, setIsDragging] = useState(false);

  // Add a mousemove event listener to the window object
  // to track the position of the mouse as it moves
  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (event) => {
        // Update the position of the div based on the mouse position
        setX(event.clientX);
        setY(event.clientY);
      };
      window.addEventListener("mousedown", handleMouseMove);

      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("mousedown", handleMouseMove);
      };
    }
  }, [isDragging]);

  // // Calculate the initial position of the div
  // // based on the size of the window
  useEffect(() => {
    setX(window.innerWidth / 2);
    setY(window.innerHeight / 2);
  }, []);

  return (
    <>
      <img className="drag_image" src={data.utilities[0].link} alt="" />
      {garden.garden.map((item) => (
        <div
          key={item.id}
          className="draggable"
          style={{
            top: y,
            left: x,
            position: "absolute",
            opacity: isDragging ? 0.5 : 1,
          }}
          draggable
          // Add event listeners to handle the start and end of the drag
          onDragStart={(event) => {
            event.dataTransfer.setData("text/plain", "anything");
            setIsDragging(true);
          }}
          onDragEnd={(event) => {
            event.preventDefault();
            setIsDragging(false);
          }}
          // Add a click event listener to toggle the drag state
          onClick={() => {
            setIsDragging(!isDragging);
          }}
        >
          <img className="imageDrag" src={item.icon} alt="" />
        </div>
      ))}
    </>
  );
}
export default DraggableDiv;
