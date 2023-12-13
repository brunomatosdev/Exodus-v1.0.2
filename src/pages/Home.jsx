import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="exodus-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was develped By <a href="https://www.exodus.com">Exodus</a>
        . Quickly use below links to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/userprofile">Userprofile</Link>
        </li>
        <li>
          <Link to="/downloadpage">Downloadpage</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
