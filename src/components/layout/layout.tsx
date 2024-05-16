import Footer from "./footer/footer";
import { LayoutProps } from "./model";
import Navbar from "./navbar/navbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
