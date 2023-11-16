import React from 'react'

import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

<<<<<<< HEAD
const Main = ({loggedIn}) => {
  // const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      <Header loggedIn={loggedIn}/>
        {/* <Header /> */}
=======
const Main = () => {
  return (
    <>
      <Header
      />
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Main
