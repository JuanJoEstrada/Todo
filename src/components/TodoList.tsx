import { useMemo } from "react";
import { type TaskProps } from "./Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  tasks: TaskProps[];
  completeTask: (clickedTask: TaskProps) => void;
  deleteTask: (clickedTask: TaskProps) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  completeTask,
  deleteTask,
}) => {
  const list = useMemo(
    () =>
      tasks.map((task, taskIndex) => (
        <TodoItem
          key={`${taskIndex}-${task.value}`}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      )),
    [completeTask, deleteTask, tasks]
  );
  return <section className=" overflow-y-auto px-2">{list}</section>;
};

export default TodoList;
