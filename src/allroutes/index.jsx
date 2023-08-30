import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import AdminHeader from '../components/header/AdminHeader';
import AdminFooter from '../components/footer/AdminFooter';
import ScrollToTopOnNavigation from '../components/other/ScrollToTopOnNavigation';

import Homepage from '../pages/homepage/Homepage';
import Contact from "../pages/product/contact";
import About from '../pages/product/About';
import Loginpage from '../pages/loginpage/Loginpage';
import Faq from "../pages/product/Faq";
import Findstore from "../pages/product/Findstore";
import Privacypolicy from "../pages/product/Privacypolicy";
import Becomereseller from "../pages/product/Becomereseller";

import BigSize from "../pages/product/BigSize";
import TravelSize from "../pages/product/TravelSize";
import Home from "../pages/product/Home";
import Holiday from "../pages/product/Holiday";
import Collaboration from "../pages/product/Collaboration";
import TemenFokus from "../pages/product/TemenFokus";
import Bundling from "../pages/product/Bundling";
import PastaGigi from "../pages/product/PastaGigi";

import Sakuraoriginal from "../keranjang/Sakuraoriginal";
import Purehoneyoriginal from "../keranjang/Purehoneyoriginal";
import Orangeoriginal from "../keranjang/Orangeoriginal";
import Yuzuoriginal from "../keranjang/Yuzuoriginal";
import Whiteoriginal from "../keranjang/Whiteoriginal";
import Matchaoriginal from "../keranjang/Matchaoriginal";
import Blackoriginal from "../keranjang/Blackoriginal";
import Yuzutravel from "../keranjang/Yuzutravel";
import Whitetravel from "../keranjang/Whitetravel";
import Sakuratravel from "../keranjang/Sakuratravel";
import Blacktravel from "../keranjang/Blacktravel";
import Homeblack from "../keranjang/Homeblack";
import Homerefills from "../keranjang/Homerefills";
import Holidayrosegold from "../keranjang/Holidayrosegold";
import Delcapitanolemon from "../keranjang/Delcapitanolemon";
import Delcapitanooriginal from "../keranjang/delcapitanooriginal";
import Delcapitanowhitening from "../keranjang/Delcapitanowhitening";
import Homediamond from "../keranjang/Homediamond";
import Holidaywhite from "../keranjang/Holidaywhite";
import Homegold from "../keranjang/Homegold";
import Holidayrefills from "../keranjang/Holidayrefills";
import Holidayred from "../keranjang/Holidayred";
import Bundling1 from "../keranjang/Bundling1";
import Bundling2 from "../keranjang/Bundling2";
import Bundling3 from "../keranjang/Bundling3";
import Bundling4 from "../keranjang/Bundling4";
import Temenfokus1 from "../keranjang/Temenfokus1";
import Temenfokus2 from "../keranjang/Temenfokus2";

const pathsWithoutHeaderFooter = ['/loginpage'];
const adminPaths = ['/admin', '/admin/dashboard'];

const AllRoutes = () => {
  const location = useLocation();

  const isAdminPath = adminPaths.includes(location.pathname);

  const shouldRenderHeaderFooter = !pathsWithoutHeaderFooter.includes(location.pathname);

  const HeaderToRender = isAdminPath ? AdminHeader : (shouldRenderHeaderFooter && Header);
  const FooterToRender = isAdminPath ? AdminFooter : (shouldRenderHeaderFooter && Footer);

  return (
    <div className='d-flex flex-column min-vh-100'>
      {HeaderToRender && <HeaderToRender />}
      <ScrollToTopOnNavigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/becomereseller" element={<Becomereseller />} />
        <Route path="/findstore" element={<Findstore />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/loginpage" element={<Loginpage />} />

        <Route path="/bigsize" element={<BigSize />} />
        <Route path="/travelsize" element={<TravelSize />} />
        <Route path="/home" element={<Home />} />
        <Route path="/holiday" element={<Holiday />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/bundling" element={<Bundling />} />

        <Route path="/temenfokus" element={<TemenFokus />} />

        <Route path="/blackoriginal" element={<Blackoriginal />} />
        <Route path="/sakuraoriginal" element={<Sakuraoriginal />} />
        <Route path="/yuzuoriginal" element={<Yuzuoriginal />} />
        <Route path="/purehoneyoriginal" element={<Purehoneyoriginal />} />
        <Route path="/matchaoriginal" element={<Matchaoriginal />} />
        <Route path="/whiteoriginal" element={<Whiteoriginal />} />
        <Route path="/orangeoriginal" element={<Orangeoriginal />} />
      </Routes>
      {FooterToRender && <FooterToRender />}
    </div>
  );
};

export default AllRoutes;
