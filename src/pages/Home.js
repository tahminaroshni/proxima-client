import Form from "../components/Form";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="grid grid-cols-5 gap-5 p-10">
      <Projects />
      <Form />
    </div>
  );
};

export default Home;