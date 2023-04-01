import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export interface TaskProps {
  value: string;
  completed: boolean;
}

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([
    { value: "Wash the car", completed: false },
    { value: "Study Docker", completed: false },
    { value: "Complete PR", completed: false },
  ]);

  const addTask = (value: string) => {
    const trimValue = value.trim();
    const repetedValue = tasks.find((task) => task.value === trimValue);
    if (!repetedValue) {
      const newTask = [...tasks, { value: trimValue, completed: false }];
      setTasks(newTask);
    }
  };

  const completeTask = (clickedTask: TaskProps) => {
    const newTasks = tasks.map((task) => {
      if (task === clickedTask) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (clickedTask: TaskProps) => {
    const newTasks = [...tasks];
    const taskIndex = tasks.indexOf(clickedTask);
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  };

  return (
    <>
      <TodoInput addTask={addTask} />
      <TodoList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </>
  );
};

export default Todo;
