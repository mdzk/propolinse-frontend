import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTopOnNavigation from './utilities/ScrollToTopOnNavigation';

import Homepage from './pages/user/Homepage';
import Contact from "./pages/user/Contact";
import About from './pages/user/About';
import Loginpage from './pages/user/Loginpage';
import Faq from "./pages/user/Faq";
import Findstore from "./pages/user/Findstore";
import Privacypolicy from "./pages/user/Privacypolicy";
import Becomereseller from "./pages/user/Becomereseller";

import BigSize from "./pages/user/BigSize";
import TravelSize from "./pages/user/TravelSize";
import Home from "./pages/user/Home";
import Holiday from "./pages/user/Holiday";
import Collaboration from "./pages/user/Collaboration";
import TemenFokus from "./pages/user/TemenFokus";
import Bundling from "./pages/user/Bundling";

import Sakuraoriginal from "./pages/user/Sakuraoriginal";
import Purehoneyoriginal from "./pages/user/Purehoneyoriginal";
import Orangeoriginal from "./pages/user/Orangeoriginal";
import Yuzuoriginal from "./pages/user/Yuzuoriginal";
import Whiteoriginal from "./pages/user/Whiteoriginal";
import Matchaoriginal from "./pages/user/Matchaoriginal";
import Blackoriginal from "./pages/user/Blackoriginal";
import { AssetsProvider } from './utilities/AssetsContext';
import Dashboard from './pages/admin/Dashboard';

const AllRoutes = () => {

  return (
    <div className='d-flex flex-column min-vh-100'>
      <ScrollToTopOnNavigation />
      <AssetsProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<Faq />} />
            <Route path="contact" element={<Contact />} />
            <Route path="becomereseller" element={<Becomereseller />} />
            <Route path="findstore" element={<Findstore />} />
            <Route path="privacypolicy" element={<Privacypolicy />} />
            <Route path="loginpage" element={<Loginpage />} />

            <Route path="bigsize" element={<BigSize />} />
            <Route path="travelsize" element={<TravelSize />} />
            <Route path="home" element={<Home />} />
            <Route path="holiday" element={<Holiday />} />
            <Route path="collaboration" element={<Collaboration />} />
            <Route path="bundling" element={<Bundling />} />

            <Route path="temenfokus" element={<TemenFokus />} />

            <Route path="blackoriginal" element={<Blackoriginal />} />
            <Route path="sakuraoriginal" element={<Sakuraoriginal />} />
            <Route path="yuzuoriginal" element={<Yuzuoriginal />} />
            <Route path="purehoneyoriginal" element={<Purehoneyoriginal />} />
            <Route path="matchaoriginal" element={<Matchaoriginal />} />
            <Route path="whiteoriginal" element={<Whiteoriginal />} />
            <Route path="orangeoriginal" element={<Orangeoriginal />} />
          </Route>

          <Route path="/admin">
            <Route index element={<Dashboard />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </AssetsProvider>
    </div>
  );
};

export default AllRoutes;
