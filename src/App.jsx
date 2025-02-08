import { useState } from "react";
import Logo from "./components/Logo";
import Todo from "./components/Todo";
import Footer from "./components/Footer";


const App = () => {
  const [name, setName] = useState("");
  
  return (
    <div className={`h-screen font-serif`}>
      <Logo />
      <Todo name={name} setName={setName} />
      <Footer />
    </div>
  );
};

export default App;
