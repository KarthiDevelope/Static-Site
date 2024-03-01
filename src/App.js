import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Screen1/Home';
import AboutUsScreen from './Components/Screen2/AboutUs';
import NoContentScreen from './Components/Screen3/404Page';

function App() {
  return (
   <>
   <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route  path='about-us' element={<AboutUsScreen />}/>
          <Route path='no-page' element={<NoContentScreen />} />
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
