import { type ChangeEvent, useState, useCallback } from "react";

interface TodoInputProps {
  addTask: (value: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTask }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const handleSubmit = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (value) {
        addTask(value);
        setValue("");
      }
    },
    [addTask, value]
  );

  return (
    <section className=" my-10 flex flex-col items-center">
      <form
        id="inputForm"
        onSubmit={handleSubmit}
        className=" border-[1px] border-black"
      >
        <input type="text" value={value} onChange={handleChange}></input>
      </form>
      <button
        type="submit"
        form="inputForm"
        className=" mt-2 w-[100px] rounded-md bg-indigo-200"
      >
        Add todo
      </button>
    </section>
  );
};

export default TodoInput;
