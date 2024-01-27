import Banner from "../components/Banner";

const Layout = ({ children }) => {
  return (
    <>
    <Banner />
    {children}
    </>
  )
}

export default Layout;