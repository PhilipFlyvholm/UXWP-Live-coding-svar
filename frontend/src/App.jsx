import "./Reset.css";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./routes/Index";
import MyTweets from "./routes/MyTweets";
function App() {
  return (
    <>
      <Router>
        <Header />
        <div id="content">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mytweets" element={<MyTweets />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
