"use client";
import React from 'react';

import Header from './components/Header';
import Banner from './components/Banner';
import Logo from './components/Logo';
import Category from './components/Category';
import Achievements from './components/Achievements';
import Courses from './components/Courses';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <Logo />
    <Category />
    <Achievements />
    <Courses />
    <Team />
    <Testimonials />
    <Footer />
    </>
  );
};


