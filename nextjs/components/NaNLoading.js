import { Spinner } from "react-bootstrap";
/**
 * Compontent that displays a spinning loading icon.
 * @param {*} [margin=true] if it needs margin left and right
 */
const NaNLoading = ({ margin = true, center = false, ...props }) => (
  <>
    <Spinner
      className="custom_spinner"
      animation="border"
      role="status"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
    <style jsx>{`
      :global(.custom_spinner) {
        ${margin ? "margin: 0 1rem;" : ""}
      }
    `}</style>
  </>
);
export default NaNLoading;
