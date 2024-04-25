import { useEffect, useState } from "react";
import Tweet from "../components/Tweet";
export default function MyTweets() {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    const response = await fetch("http://localhost:8080/tweets/me");
    const data = await response.json();
    setTweets(data);
  };

  useEffect(() => {
    fetchTweets();
  }, []);
  
  return (
    <>
      {tweets.map((tweet, i) => (
        <Tweet
          key={i}
          user={tweet.user}
          tweet={tweet.text}
          img={tweet.img}
          createdAt={tweet.created_at}
        />
      ))}
    </>
  );
}
