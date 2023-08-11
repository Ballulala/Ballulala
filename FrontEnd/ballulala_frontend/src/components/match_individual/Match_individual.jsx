import TopNavbar from "../top_navbar/TopNavbar";
import DateBar from "../date_bar/Date_Bar.jsx";
import { Link } from "react-router-dom";

function IndividualMatching() {
  const coverImagePath = process.env.PUBLIC_URL + "/images/img_stadium_2.jpg";

  return (
    <div>
      <TopNavbar />
      <div
        className="image-container sliding-image"
        style={{ backgroundImage: `url(${coverImagePath})` }}
      >
        <div className="rank-text">Match (player)</div>
      </div>

      <DateBar />
    </div>
  );
}

export default IndividualMatching;
