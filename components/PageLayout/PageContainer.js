import { Container } from "react-bootstrap";
import BrandingBar from "./BrandingBar";
import NaNFooter from "./NaNFooter";
import NaNNavigation from "./NaNNavigation";

/**
 * Container of the entire page
 * @param {*} children children of the page
 * @param {*} contact info for the branding bar
 * @param {*} row If the page should be flex row
 * @param {*} column If the page should be flex column
 * @param {*} fluid if the container has to be fluid
 * @param {*} pages list of pages for the navigation
 * @param {*} callBack function callback for Navigation
 * @param {*} activePage Currently active page
 */
const PageContainer = ({ children, fluid = false }) => (
  <>
    <div className="sticky_header">
      <BrandingBar />
      <NaNNavigation />
    </div>
    <Container fluid={fluid} className="page_container_wrapper">
      {children}
    </Container>
    <NaNFooter />
    <style jsx>{`
      .sticky_header {
        position: sticky;
        top: 0;
        z-index: 10;
      }
      :global(.page_container_wrapper) {
      }
    `}</style>
  </>
);
export default PageContainer;
