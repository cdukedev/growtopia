import { useState, useEffect } from "react";
function DraggableDiv(props) {
  // Create state variables to store the div's current position
  // and a flag to indicate whether the div is currently being dragged
  // expecting x and y to be numbers
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
      window.addEventListener("mousemove", handleMouseMove);

      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isDragging]);

  // Calculate the initial position of the div
  // based on the size of the window
  useEffect(() => {
    setX(window.innerWidth / 2);
    setY(window.innerHeight / 2);
  }, []);

  return (
    <div
      className="draggable"
      style={{
        top: y,
        left: x,
        position: "absolute",
        background: isDragging ? "red" : "blue",
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
      Drag me!
    </div>
  );
}
export default DraggableDiv;