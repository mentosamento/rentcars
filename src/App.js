import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './Screens/MainPage';
import SearchResults from './Screens/SearchResults';
import AddNew from './Screens/AddNew';
import CreatePost from './Screens/CreatePost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/search' element={<SearchResults />} />
        <Route path='/new' element={<AddNew />} />
        <Route path='/post' element={<CreatePost />} />

      </Routes>
    </div>
  );
}

export default App;


