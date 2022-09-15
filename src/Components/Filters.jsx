import axios from "axios";
import { useEffect, useState } from "react";

const Filters = ({ setEvents }) => {
  const [order, setOrder] = useState("");

  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  useEffect(() => {
    let query = "?";
    if (category) {
      query += `&&category=${category}`;
    }
    if (gender) {
      query += `&&gender=${gender}`;
    }
    if (ageGroup) {
      query += `&&age_group=${ageGroup}`;
    }
    if (order) {
      query += `&&order=${order}`;
    }

    axios
      .get(`https://babsfindagame.herokuapp.com/api/events${query}`)
      .then((events) => {
        setEvents(events.data.events);
      });
  }, [category, gender, ageGroup, order]);

  return (
    <section className="filters">
      <h4 className="sort_by.label">Filter Games</h4>
      <div className="filters-categories">
        <select
          name="category"
          id="category"
          className="filters-category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">Sport</option>
          <option value="football">Football</option>
          <option value="netball">Netball</option>
          <option value="squash">Squash</option>
        </select>

        <select
          name="gender"
          id="gender"
          className="filters-gender"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="mixed">Mixed</option>
        </select>
        <select
          name="ageGroup"
          id="ageGroup"
          className="filters-age"
          onChange={(e) => {
            setAgeGroup(e.target.value);
          }}
          placeholder="Age Group"
        >
          <option value="">Age Group</option>
          <option value="18-30">18-30</option>
          <option value="30-50">30-50</option>
          <option value="50+">50+</option>
        </select>

        <select
          name="order"
          id="order"
          className="filters-order"
          onChange={(e) => {
            setOrder(e.target.value);
          }}
          placeholder="Order"
        >
          <option value="">Order</option>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
