import React, { useEffect, useState } from "react";
import Nav from './nav'
import Home from "./home";
import Contact from './contact';
import Footer from "./footer";


const App= () =>{
  const [darkmode,setDarkmode] = useState(localStorage.getItem("darkmode")==="true");
  const token = "OTExODEyMjY1ODU3MTM0NjIy.Grj4u5.hjHULgXh5GvZL3fcZWW9W4lBEx3N-Al_k-XQ5U"
  const Togglehandler = () =>{
    darkmode == false ? setDarkmode(true) : setDarkmode(false);
  }
  useEffect(()=>{
    localStorage.setItem("darkmode",darkmode)
  },[darkmode])
  
  return(
    <div className={darkmode?'dark':'light'}>
      <div className="dark:bg-[#181826] bg-[#ebeef3] min-h-screen">
      <Nav darkmode={darkmode} toggle={Togglehandler} />
      <Home />
      
      <div id="contact">
					<Contact darkmode={darkmode} />
			</div>
      <div>
        <Footer/>
        </div>        
      </div>
    </div>
  )
}

export default App;