import { useState } from "react";
import "./TweetInput.css";

/**
 * 
 * @param {{setTweets:(any[]) => {}}} props 
 * @returns React.Component
 */
export default function TweetInput({setTweets}) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/tweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tweet: inputValue }),
    });
    if (!res.ok) {
        alert("Failed to post tweet");
    }else{
        const tweets = await res.json();
        console.log(tweets);
        setInputValue("");
        setTweets(tweets.tweets);

    }

  };

  return (
    <>
      <form onSubmit={handleSubmit} className="tweet-input">
        <textarea
          placeholder="What's happening?"
          className="tweet-input-textarea"
          value={inputValue}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="tweet-input-button">
          Tweet
        </button>
      </form>
    </>
  );
}
