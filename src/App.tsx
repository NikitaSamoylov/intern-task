import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './store';
import './App.scss';
import RegisterPage from './pages/register-page/RegisterPage';
import MainPage from './pages/main-page/MainPage';
import TeamItem from './pages/team-item-info/TeamItemPage';

function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <RegisterPage /> } />
            <Route path='/main' element={ <MainPage /> } />
            <Route path='/main/:id' element={ <TeamItem /> } />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
