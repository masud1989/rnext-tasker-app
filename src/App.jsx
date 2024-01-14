import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import TaskBoard from "./task/TaskBoard";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}

export default App;
