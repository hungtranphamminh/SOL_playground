import React from 'react';
import './App.css';
import { Wallet } from './components/walletbutton/wallet';
import HeaderBar from './components/header/HeaderBar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Route, Routes, Link} from "react-router-dom"
import Playground from './pages/Playground';
import RightBar from './components/rightinfo/RightBar';
import LeftNav from './components/leftnav/LeftNav';
import BuildPage from './pages/Build';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div >
      <div>
        yes this to test ssticky
      </div>
      <HeaderBar />
      <Wallet>
          <div className='w-[100%]'>
            <Routes>
              <Route path='/build' element={<BuildPage />} />
              <Route path='/playground' element={<Playground/>}/>
              <Route path='/homepage' element={<HomePage/>}/>
            </Routes>
          </div>        
      </Wallet>
      <ToastContainer
              position="top-right"
              autoClose={7000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
    </div>

  );
}

export default App;
