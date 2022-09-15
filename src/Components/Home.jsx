import Map from "./Map";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getEvents } from "../Utility/api";
import Loading from "./Loading";
const Home = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getEvents()
      .then((events) => setEvents(events))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="home">
      <img
        className="sportpic"
        src="http://www.colleges-fenway.org/wp-content/uploads/2020/04/bigstock-Four-Sports-a-lot-of-balls-an-50626115-480x240.jpg"
        alt="sportimage"
      ></img>
      <h3 className="eventslist.subtitle">Find Games Below</h3>
      <div className="map-wrapper">
        <Map events={events} />
      </div>
      <br />
      <div className="home.buttons">
        <Link to="/events">
          <button>Find A Game</button>
        </Link>
        <Link to="/create">
          <button>Create A Game</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
