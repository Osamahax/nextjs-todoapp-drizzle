import Image from "next/image";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-primary to-secondary h-screen flex justify-center items-center">
      <div className="px-3 py-4 rounded-xl bg-white max-w-md w-full">

        <TodoList />
        <AddTodo />
        {/* Bar */}
        <div className="w-1/2 h-1.5 bg-black/80 rounded mx-auto mt-6">

        </div>
      </div>
    </main>
  );
}
