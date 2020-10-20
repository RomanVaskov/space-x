import React from "react";
import { useHistory } from "react-router-dom";
import YouTube from "react-youtube";
import "./details.css";
import Main from "../Main/Main";
import { useLaunches } from "../useLaunches/useLaunches";

export default function Details(props) {
  const { getLaunch } = useLaunches();

  const [launch, setLaunch] = React.useState(null);

  React.useEffect(() => {
    setLaunch(getLaunch(props.match.params.id));
  }, [getLaunch]);

  const history = useHistory();

  if (!launch) {
    return null;
  }

  console.log(launch);

  return (
    <>
      <Main name={launch.name} />
      <main className="details">
        <div className="container">
          <div className="details-row">
            <div className="details-image">
              <img src={launch.links.patch.small} alt={launch.name} />
            </div>
            <div className="details-content">
              <p className="details-description">{launch.details}</p>
            </div>
            <YouTube
              videoId={launch.links.youtube_id}
              className="details-youtube"
            />
          </div>
        </div>
        <a className="button button-back" onClick={history.goBack}>
          go back
        </a>
      </main>
    </>
  );
}
