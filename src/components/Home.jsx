import react, {useState} from "react";


function Home() {
    return (
        <>
        <div id="navbar"><Navigations> </Navigations></div>
  
        <h1>
          <img id="logo-image" src={bookLogo} />
          Library App
        </h1>
  
        <Account />
     <Login/>
      <SingleBook />
      <Books />

      <Register token={token} setFunction={setToken} />
        <Register token={token} setFunction={setToken} />


        <div class="home"></div>

        <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      </>
      
    );
}

export default Home 