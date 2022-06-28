import dynamic from "next/dynamic";
const DynamicNavbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

const Layout = ({ children }) => {
  return (
    <>
      <DynamicNavbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
