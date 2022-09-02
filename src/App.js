import {Routes, Route} from "react-router-dom"

import './App.css';
import Home from "./pages/home/Home"
import RegisterPerson from "./pages/registerperson/RegisterPerson"
import RegisterComp from "./pages/registercomp/RegisterComp"
import Success from "./pages/success/Success"
import List from "./pages/list/List"
import ListDetailed from "./pages/listditailed/Listdetailed"
import "./assets/fonts/HelveticaNeue.ttc"



function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/registerperson" element= {<RegisterPerson />} />
          <Route path="/registercomp" element= {<RegisterComp/>} />
          <Route path='/success' element={<Success />} />
          <Route path="/list" element= {<List />} />
          <Route path="/listdetailed" element={<ListDetailed />} />
      </Routes>
    </div>
  );
}

export default App;
