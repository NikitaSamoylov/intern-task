import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './store';
import './App.scss';
import RegisterPage from './pages/register-page/RegisterPage';
import MainPage from './pages/main-page/MainPage';

function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <RegisterPage /> } />
            <Route path='/main' element={ <MainPage /> } />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
