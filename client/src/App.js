import Comments from "./components/Comments";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scores from "./components/Scores";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Comments username="juliusomo" />} />
          <Route path="/:username" element={<Comments />} />
        </Routes>
      </Router>
      {/* <Scores /> */}
    </div>
  );
}

export default App;
