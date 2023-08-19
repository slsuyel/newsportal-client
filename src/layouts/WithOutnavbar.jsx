
import { Outlet } from 'react-router-dom'
import Header from '../pages/Shared/Header'
import Footer from '../pages/Shared/Footer'
import TopBar from '../pages/Shared/TopBar'
import Logo from '../pages/Shared/Logo'
import Ticker from '../pages/Shared/Ticker'


export default function WithOutnavbar() {
  return (
    <>
      <TopBar />
      <Logo />
      <Header />
      <Ticker />
      <Outlet />
      <Footer />
    </>
  )
}
