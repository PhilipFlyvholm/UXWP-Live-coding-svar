import { useState } from "react";
import "./Tweet.css";

/**
 * @param {{user: {screen_name:string, name: string}, tweet: string, createdAt: string, img: string}} props
 * @returns React.Component
 */
export default function Tweet(props) {
  const [likes, setLikes] = useState(0);
  const addLike = () => setLikes(likes + 1);

  return (
    <>
      <div className="tweet">
        <div className="tweet-header">
          <img
            src={`https://api.dicebear.com/6.x/lorelei/png/seed=${props.user.screen_name}`}
            alt={`Profile picture of ${props.user.name}`}
            className="tweet-profile-pic"
          />
          <div className="tweet-header-profile">
            <p>{props.user.name}</p>
            <small>@{props.user.screen_name}</small>
            <small>{new Date(props.createdAt).toLocaleString()}</small>
          </div>
        </div>
        <div className="tweet-content">
          <p>{props.tweet}</p>
          {props.img && (
            <img src={props.img} alt="Tweet image" className="tweet-img" />
          )}
          <button type="button" onClick={addLike}>
            Like <span className="badge">{likes}</span>
          </button>
        </div>
      </div>
    </>
  );
}
