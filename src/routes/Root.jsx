
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom'; //This file is okay.

const Root = () => {
  return (
    <>
<Header/>
<main>
    <Outlet/>
    </main>
<Footer/>
</>
  );
};

export default Root;