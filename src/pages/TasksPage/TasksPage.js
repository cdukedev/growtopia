import React from "react";
import "./TasksPage.scss";

class TasksPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          subtitle: "WATER",
          title: "Water tomatoes in two days",
          text: "They need well-draining and regular watering",
          isCompleted: false,
        },
        {
          id: 2,
          subtitle: "SOIL",
          title: "Change dirt of Tomatoes",
          text: "They need nutrient soil changed periodically",
          isCompleted: false,
        },
        {
          id: 3,
          subtitle: "FERTILIZER",
          title: "Tomatos in two days",
          text: "Nutrient fertilizer promotes healthy growth",
          isCompleted: false,
        },
        {
          id: 4,
          subtitle: "WATER",
          title: "Tomatoes in 4 days",
          text: "They need well-draining and regular watering",
          isCompleted: false,
        },
      ],
    };
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
      return { tasks: updatedTasks };
    });
  }

  render() {
    return (
      <div className="App">
        <h3 className="task-title">TASK VIEW</h3>

        <ul className="task-list">
          {this.state.tasks.map((task) => (
            <li key={task.id}>
              <div className="task-list-container">
                <div className="info-container">
                  {task.subtitle} <br></br>
                  {task.title} <br></br>
                  {task.text}
                </div>
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => this.handleChange(task.id)}
                />
              </div>
              <hr></hr>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksPage;
