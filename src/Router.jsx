import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar';
import ChatBotModal from './components/bot/ChatBotModal';
import TopButton from './components/TopButton/TopButton';
// import Ticketing from './components/Reservation/Ticketing';

import {
  MainPage,
  LoginPage,
  ReservationPage,
  MyPage,
  DetailPage,
  MapPage,
  PurchasePage,
  SignUpPage,
  SearchPage,
  StayDetailPage,
  RestaurantDetailPage,
} from './pages';

import Footer from './components/Footer/Footer';
import SlotMachine from './components/Slot/SlotMechine';
import styled from 'styled-components';

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Navbar />
        <ChatBotModal />
        <TopButton />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/spot/:id" element={<DetailPage />} />
          <Route path="/:id/map" element={<MapPage />} />
          <Route path="/stay/:id" element={<StayDetailPage />} />
          <Route path="/restaurant/:id" element={<RestaurantDetailPage />} />
          {/* <Route path="/stay/:id/reservation" element={<ReservationPage />} /> */}
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/slot" element={<SlotMachine />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;