import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";


export default function App() {
  return (
  <BrowserRouter>
  
    <Routes>
    
      <Route path='/' element={<Home/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>
  </BrowserRouter>
  )
}