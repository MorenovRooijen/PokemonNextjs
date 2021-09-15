import { Col, Container, Row } from "react-bootstrap";
import Logo from "./Logo";

/**
 * Component of the footer
 */
const NaNFooter = () => (
  <>
    <div className="footer">
      <Container className="footer">
        <Row>
          <Col sx={12} sm={8}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              magnam.
            </p>
          </Col>
          <Col sx={12} sm={4}>
            <Logo />
          </Col>
        </Row>
      </Container>{" "}
    </div>
    <style jsx global>{``}</style>
    <style jsx>{`
      .footer {
        background: green;
      }
    `}</style>
  </>
);
export default NaNFooter;
