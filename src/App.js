//import logo from 'logo.svg';
//import './App.css';
import{ Route, Routes }from"react-router-dom";
import promoImg from "./assets/sunflowerb.png";
import Home from "./pages/Home";
import Header from './component/Header';
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
function App() {
  
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/sign-up" element={<Signup/>}></Route>
      <Route path="/sign-in" element={<Signin/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
    </Routes>
    </>
  );
  /*  <div className="App"> 
     <header className="App-header">
        <img src={promoImg} className="App-logo" alt="logo" />
        <p>
           <code>Someone tell me "BE AS YOU ARE"</code> 
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=o5CGU_gPyAc"
          target="_blank"
          rel="noopener noreferrer"
        >
          บังเอิญพบทานตะวัน - B.Starlightz
        </a>
      </header>
    </div>
  );*/
  
}

export default App;
