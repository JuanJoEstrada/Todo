import { type TaskProps } from "./Todo";

interface TodoItemProps {
  task: TaskProps;
  completeTask: (clickedTask: TaskProps) => void;
  deleteTask: (clickedTask: TaskProps) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  completeTask,
  deleteTask,
}) => {
  return (
    <section className=" my-2 flex items-center justify-start rounded-md border border-indigo-200 p-2">
      <button
        className=" mr-5"
        onClick={() => {
          deleteTask(task);
        }}
      >
        X
      </button>
      <div
        className={`${
          task.completed ? "line-through" : ""
        } cursor-pointer select-none`}
        onClick={() => {
          completeTask(task);
        }}
      >
        {task.value}
      </div>
    </section>
  );
};

export default TodoItem;
