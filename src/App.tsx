import RootLayout from "./layout/RootLayout";
import Follow from "./pages/Follow";
import Home from "./pages/Home"
import Login from "./pages/login"
import Register from "./pages/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Profile from "./pages/Profile"






function App() {



  return (
    
    <Router>
      <Routes>
        <Route path="/"  element={<RootLayout/>}>
        <Route index element={<Home />} />
         <Route path="/Follows" index element ={<Follow/>} />
         <Route path="/Search" index element ={<Search/>} />
         <Route path="/Profile" index element ={<Profile/>} />
         

        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
    
  )
}




// const App: React.FC = () => {

//   return (
    
//    <div>
//     <Home/>
//    </div>
//   )
// }

export default App
