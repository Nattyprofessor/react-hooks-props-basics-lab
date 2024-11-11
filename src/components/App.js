import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      {/* Pass name, city, and color props to Home */}
      <Home name={user.name} city={user.city} color={user.color} />
      {/* Pass bio and links props to About */}
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;
