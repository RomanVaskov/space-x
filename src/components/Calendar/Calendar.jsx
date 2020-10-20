import React from "react";
import "./calendar.css";
import Main from "../Main/Main";
import { Link } from "react-router-dom";
import { useLaunches } from "../useLaunches/useLaunches";

export default function Calendar() {
  const { data } = useLaunches();

  return (
    <>
      <Main name="Календарь SpaceX" />
      <section className="calendar">
        <div className="container">
          <ul className="calendar-list">
            {data.map((item) => {
              return (
                <li className="calendar-item" key={item.id}>
                  <article className="launches">
                    <div className="launches-image">
                      <img src={item.links.patch.small} alt="" />
                    </div>
                    <div className="launches-content">
                      <h2 className="launches-title">{item.name}</h2>
                      <Link
                        to={`/details/${item.id}`}
                        className="button launches-details"
                      >
                        Подробнее
                      </Link>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
