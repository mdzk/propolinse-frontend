import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import ScrollToTopOnNavigation from './utilities/ScrollToTopOnNavigation';

import Homepage from './pages/user/Homepage';
import Contact from "./pages/user/Contact";
import About from './pages/user/About';
import Faq from "./pages/user/Faq";
import Findstore from "./pages/user/Findstore";
import Privacypolicy from "./pages/user/Privacypolicy";
import Becomereseller from "./pages/user/Becomereseller";

import BigSize from "./pages/user/BigSize";
import TravelSize from "./pages/user/TravelSize";
import Home from "./pages/user/Home";
import Holiday from "./pages/user/Holiday";
import Collaboration from "./pages/user/Collaboration";
import Bundling from "./pages/user/Bundling";

import { AssetsProvider } from './utilities/AssetsContext';

import Dashboard from './pages/admin/Dashboard';
import KategoriProduk from './pages/admin/KategoriProduk';
import Pesanan from './pages/admin/Pesanan';
import Pembayaran from './pages/admin/Pembayaran';
import Pelanggan from './pages/admin/Pelanggan';
import AdminCollaboration from './pages/admin/AdminCollaboration';
import UbahData from './pages/admin/UbahData';
import TambahData from './pages/admin/TambahData';
import AdminBundling from './pages/admin/AdminBundling';
import AdminHoliday from './pages/admin/AdminHoliday';
import AdminBigSize from './pages/admin/AdminBigSize';
import AdminTravelSize from './pages/admin/AdminTravelSize';
import AdminHome from './pages/admin/AdminHome';
import AdminLogin from './pages/admin/AdminLogin';

import DetailProduct from './pages/user/DetailProduct';
import User from './pages/user/User';
import Profile from './pages/user/Profile';
import axios from 'axios';
import RegisterSuccess from './pages/user/RegisterSuccess';
import Checkout from './pages/user/Checkout';
import CheckoutSuccess from './pages/user/CheckoutSuccess';
import ProfileEdit from './pages/user/ProfileEdit';

const AllRoutes = () => {

  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('auth_token');

    if (authToken) {
      axios.get(import.meta.env.VITE_API_URL + 'api/user', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          setUserRole(response.data.data.role);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
          navigate('/');
        });
    }
  }, [navigate]);
  function auth(element, role) {
    if (userRole === null) {
      const authToken = localStorage.getItem('auth_token');
      if (authToken) {
        return <p>Loading...</p>;
      } else {
        return <Navigate to="/" />;
      }
    }

    return userRole === role ? element : <Navigate to="/" />;
  }

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
            <Route path="bigsize" element={<BigSize />} />
            <Route path="travelsize" element={<TravelSize />} />
            <Route path="home" element={<Home />} />
            <Route path="holiday" element={<Holiday />} />
            <Route path="collaboration" element={<Collaboration />} />
            <Route path="bundling" element={<Bundling />} />
            <Route path="/success" element={<RegisterSuccess />} />
            <Route path="detail/:id" element={<DetailProduct />} />
            <Route path="user" element={auth(<User />, "user")} />
            <Route path="profile" element={auth(<Profile />, "user")} />
            <Route path="profile/edit" element={auth(<ProfileEdit />, "user")} />
            <Route path="checkout" element={auth(<Checkout />, "user")} />
            <Route path="checkout/success" element={auth(<CheckoutSuccess />, "user")} />
          </Route>

          <Route path="/admin" >
            <Route index element={auth(<Dashboard />, "admin")} />
            <Route path="kategori" element={auth(<KategoriProduk />, "admin")} />
            <Route path="pesanan" element={auth(<Pesanan />, "admin")} />
            <Route path="pembayaran" element={auth(<Pembayaran />, "admin")} />
            <Route path="pelanggan" element={auth(<Pelanggan />, "admin")} />
            <Route path="collaboration" element={auth(<AdminCollaboration />, "admin")} />
            <Route path="bundling" element={auth(<AdminBundling />, "admin")} />
            <Route path="home" element={auth(<AdminHome />, "admin")} />
            <Route path="holiday" element={auth(<AdminHoliday />, "admin")} />
            <Route path="bigsize" element={auth(<AdminBigSize />, "admin")} />
            <Route path="travelsize" element={auth(<AdminTravelSize />, "admin")} />
            <Route path="edit/:id" element={auth(<UbahData />, "admin")} />
            <Route path="add/:tipe" element={auth(<TambahData />, "admin")} />
            <Route path="login" element={auth(<AdminLogin />, "admin")} />
          </Route>

        </Routes>
      </AssetsProvider>
    </div>
  );
};

export default AllRoutes;
