import React from "react";
import "./footer.css";

export default function Footer({ link }) {
  const { elon_twitter, flickr, twitter, website } = link;
  return (
    <>
      <footer className="footer">
        <img src="img/logo.svg" alt="logo Space X" className="logo" />
        <nav className="footer-nav">
          <ul className="list">
            <li className="item">
              <a
                href={elon_twitter}
                rel="noopener noreferrer"
                target="_blank"
                className="item-link"
              >
                Elon Musk Twitter
              </a>
            </li>
            <li className="item">
              <a
                href={twitter}
                rel="noopener noreferrer"
                target="_blank"
                className="item-link"
              >
                Twitter
              </a>
            </li>
            <li className="item">
              <a
                href={flickr}
                rel="noopener noreferrer"
                target="_blank"
                className="item-link"
              >
                Flickr
              </a>
            </li>
            <li className="item">
              <a
                href={website}
                rel="noopener noreferrer"
                target="_blank"
                className="item-link"
              >
                Website
              </a>
            </li>
          </ul>
        </nav>
        <p className="footer-text">
          For additional questions, contact
          <a className="footer-link" href="mailto:rideshare@spacex.com">
            rideshare@spacex.com
          </a>
        </p>
      </footer>
    </>
  );
}
