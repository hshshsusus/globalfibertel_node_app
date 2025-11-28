// src/components/Layout/UserLayout.jsx
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default UserLayout;
