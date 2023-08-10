import TopNavbar from "../top_navbar/TopNavbar";
import DateBar from "../date_bar/Date_Bar.jsx";
import { Link } from "react-router-dom";

function Individual_Matching() {
  return (
    <div>
      <TopNavbar />
      <div className="center-container">
        <h1>개인 매칭</h1>
        <Link to="/">
          <img className="month-team-img" src="league.png" alt="league" />
        </Link>
      </div>
      <DateBar />
    </div>
  );
}

export default Individual_Matching;
