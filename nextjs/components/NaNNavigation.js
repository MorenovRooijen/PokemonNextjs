import MenuItem from "components/MenuItem";
import { breakpoint_xl } from "constants/theme";
import { Container, Nav, Navbar } from "react-bootstrap/";
import css from "styled-jsx/css";
/**
 * Compontent for the Navigation menu
 * @param {*} [active = null] currently active page
 * @param {*} pages list of pages
 * @param {*} callBack function to be called on menu item click
 */
const NaNNavigation = () => {
  return (
    <div className="navigation">
      <Navbar expand="lg">
        <Container>
          <Nav>
            <MenuItem link="www.google.com" text="google" active />
            <MenuItem link="www.facebook.com" text="facebook" disabled />
            <MenuItem link="www.nu.nl" text="NU.nl" />
          </Nav>
        </Container>
      </Navbar>
      <style jsx>{style}</style>
    </div>
  );
};

const style = css`
  .navigation {
    box-shadow: 0rem 0.6rem 0.6rem rgba(0, 0, 0, 0.05);
    background: white;
    display: flex;
    justify-content: center;
    text-transform: uppercase;

    :global(nav) {
      width: 100%;
      padding: 0;
      @media screen and (min-width: ${breakpoint_xl}) {
        padding-bottom: 0;
      }

      :global(.navbar-nav) {
        width: 100%;
        margin: 0 auto;
        display: flex;
        text-transform: uppercase;
        justify-content: center;

        @media screen and (max-width: ${breakpoint_xl}) {
          flex-direction: row;
          overflow: auto;
          justify-content: normal;
        }
      }
    }
  }
`;
export default NaNNavigation;
