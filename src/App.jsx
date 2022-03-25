import { Routes, Route } from "react-router-dom";

import Home from './pages';
import Upload from './pages/upload';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/upload" element={<Upload />} />
  </Routes>
);

export default App;
