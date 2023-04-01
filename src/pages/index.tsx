import { type NextPage } from "next";
import Todo from "~/components/Todo";

const Home: NextPage = () => {
  return (
    <>
      <header className=" flex h-[10vh] flex-col items-center justify-center bg-sky-300">
        <h1>ToDo App</h1>
      </header>
      <main className=" flex h-[calc(100vh-10vh)] w-[100%] flex-col items-center bg-sky-50 py-5">
        <Todo />
      </main>
    </>
  );
};

export default Home;
