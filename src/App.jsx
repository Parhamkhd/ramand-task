import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/pages/unauthorized/Login'
import Typography from '@mui/material/Typography';

function App() {

  const token = useSelector((state)=>{return state.user.token})

  useEffect(() => {
    console.log(token,"this is token");
  }, [])
  

  return (
   <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="Login" element={<Login />} />

      </Routes>
      <Typography variant="h6" sx={{marginTop:"100px"}} component="div" gutterBottom>
        Submition By Parham Kheradmand at: <a target={"_blank"} href="https://github.com/Parhamkhd">https://github.com/Parhamkhd</a> 
      </Typography>
   </>
  );
}

export default App;
