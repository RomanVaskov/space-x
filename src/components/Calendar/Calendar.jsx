import React from "react";
import "./calendar.css";
import Main from "../Main/Main";
import { Link } from "react-router-dom";
import { useLaunches } from "../useLaunches/useLaunches";
import Pagination from "../Pagination/Pagination";

export default function Calendar() {
  const { data } = useLaunches();

  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(3);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Main name="Календарь SpaceX" />
      <section className="calendar">
        <div className="container">
          <ul className="calendar-list">
            {currentPosts.map((item) => {
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
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </section>
    </>
  );
}
