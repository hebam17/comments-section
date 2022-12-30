import Comments from "./components/Comments";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/:username" element={<Comments />} />
          <Route path="/" element={<Comments username="juliusomo" />} />
        </Routes>
      </Router>
      {/* <Scores /> */}
    </div>
  );
}

export default App;
