import { Route, Routes } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Main from '../Components/Main/Main';


function MainPage() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default MainPage;
