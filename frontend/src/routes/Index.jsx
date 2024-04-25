import { useEffect, useState } from "react";
import Tweet from "../components/Tweet";
import TweetInput from "../components/TweetInput";
export default function Index() {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    const response = await fetch("http://localhost:8080/tweets");
    const data = await response.json();
    setTweets(data);
  };

  useEffect(() => {
    fetchTweets();
  }, []);
  return (
    <>
      <TweetInput setTweets={setTweets} />
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
