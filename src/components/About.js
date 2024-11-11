import React from "react";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditionally render the <p> element based on the bio prop */}
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* Placeholder for the <Links /> component if you want to add it */}
    </div>
  );
}

export default About;
