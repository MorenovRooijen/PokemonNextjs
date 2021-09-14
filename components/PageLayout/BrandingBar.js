import { breakpoint_sm, color_background_hr } from "constants/theme";
import {
  Container,
  Dropdown,
  Navbar,
  OverlayTrigger,
  Popover,
} from "react-bootstrap/";
import { FaEllipsisV } from "react-icons/fa";
import css from "styled-jsx/css";
import Logo from "../Logo";

/**
 * Compontent that shows the branding bar.
 * @param {*} contact object with info about contact part.
 */
const BrandingBar = ({ contact }) => {
  const doSometing = () => {
    alert("clicked on item");
  };

  //Popover Menu
  const popover = (
    <Popover id="popover_menu">
      <Popover.Content>
        <Dropdown.Item eventKey="1" onClick={doSometing}>
          Menu item 1
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
          eventKey="2"
          onClick={() => {
            doSomething();
          }}
        >
          Menu item 2
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="3" onClick={doSometing}>
          Menu item 3
        </Dropdown.Item>
      </Popover.Content>

      <style jsx>{``}</style>
    </Popover>
  );

  return (
    <div className="branding_container">
      <Navbar expand="lg">
        <Container fluid>
          <div className="branding_wrapper">
            <Navbar.Brand href="/">
              <Logo />
            </Navbar.Brand>
          </div>

          {/* Questions page */}
          <div className="branding_wrapper right_wrapper">
            {/* User email */}
            <div className="user_email_wrapper">
              <div className="user_email"> hello@notanumber.digital</div>
            </div>
            {/* Menu  */}
            <OverlayTrigger
              trigger="click"
              placement="left-start"
              overlay={popover}
              rootClose
            >
              <FaEllipsisV className="menu_trigger" />
            </OverlayTrigger>
          </div>
        </Container>
      </Navbar>
      <style jsx>{style}</style>
    </div>
  );
};

const style = css`
  .branding_container {
    background: white;
    padding: 0;

    @media screen and (max-width: ${breakpoint_sm}) {
      :global(.navbar-brand) {
        position: relative;

        :global(svg) {
          position: absolute;
          top: 0;
          left: 0;

          :global(.logo_normaal:last-of-type) {
            display: none;
          }
        }
      }
    }

    :global(nav) {
      background: white;
      width: 100%;
      margin: 0 auto;
      height: 5rem;
      padding: 0 2.5rem;

      :global(.container-fluid),
      :global(a) {
        height: 100%;
      }

      :global(.container-fluid) {
        border-bottom: 0.08rem solid ${color_background_hr};
      }
    }

    .branding_wrapper {
      display: flex;
      align-items: center;
      height: 100%;

      div {
        padding: 0 1rem;
        height: 100%;
      }

      .user_email_wrapper {
        display: flex;
        align-items: center;

        .user_email {
          height: fit-content;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
      }
    }
  }
`;

export default BrandingBar;
