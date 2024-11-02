import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Screens/MainPage";
import SearchResults from "./Screens/SearchResults";
import AddNew from "./Screens/AddNew";
import CreatePost from "./Screens/CreatePost";
import AdminPage from "./Screens/AdminPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/new" element={<AddNew />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
