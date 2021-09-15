import MenuItem from "components/MenuItem";
import { Container, Nav, Navbar } from "react-bootstrap/";
import Logo from "./Logo";
/**
 * Compontent for the Navigation menu
 * @param {*} [active = null] currently active page
 * @param {*} pages list of pages
 * @param {*} callBack function to be called on menu item click
 */
const NaNNavigation = () => {
  return (
    <div className="navigation">
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Logo />
          </Navbar.Brand>
          <Nav>
            <MenuItem link="www.google.com" text="google" active />
            <MenuItem link="www.facebook.com" text="facebook" disabled />
            <MenuItem link="www.nu.nl" text="NU.nl" />
          </Nav>
        </Container>
      </Navbar>
      <style jsx>{``}</style>
    </div>
  );
};

export default NaNNavigation;
