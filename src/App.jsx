import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Education,
  Feedbacks,
  Home,
  StarsCanvas,
  Navbar,
  Tech,
  Works,
  Skills,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Home />
        </div>

        <About />
        <Education />
        <Works />
        <Tech />
        <Skills />
        {/* <Feedbacks /> */}

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
