import Upload from "./page/upload";
import Main from "./page/main";
import Login from "./page/login";
import { BrowserRouter,Routes,Route } from "react-router";
import { useState,useEffect } from "react";
import Layout from "./component/layout";

function App() {

  const [Token,setToken] = useState (localStorage.getItem('token'))

  console.log (Token)

  if (!Token) {
    return(
      <Login setToken={setToken}/>
    )
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/upload" element={<Upload/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
