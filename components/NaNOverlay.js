import { breakpoint_md, font_weight_bold } from "constants/theme";
import { Modal } from "react-bootstrap";
import { CloseButton } from "../../public/logos/close.svg";
import IF from "./IF";
/**
 * Overlay with given content.
 * @param {*} children content to be shown
 * @param {*} show whether or not the overlay is visible
 * @param {*} [onHide] function to be called onHide
 * @param {*} [title] title of the overlay
 */
const NaNOverlay = ({ children, show, onHide, title, ...props }) => {
  return (
    <div className="testItem">
      <Modal
        size="lg"
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        className="nan_modal_container"
        centered
        onHide={onHide || (() => false)}
      >
        <div className="nan_modal" {...props}>
          <Modal.Header closeButton={false} className="nan_header">
            <IF condition={onHide}>
              <div
                className="close_button"
                onClick={() => {
                  onHide();
                }}
              >
                <CloseButton />
              </div>
            </IF>
          </Modal.Header>
          <Modal.Body>
            <h1>{title}</h1>
            {children}
          </Modal.Body>
        </div>
      </Modal>
      <style jsx>{`
        :global(.nan_modal_container) {
          padding-left: 0 !important;

          :global(.modal-dialog) {
            max-width: 960px;
          }

          :global(.modal-content) {
            border-radius: 0;
            border: 0;
            padding: 2rem 5rem;

            @media screen and (max-width: ${breakpoint_md}) {
              padding: 0;
            }
          }

          .nan_modal {
            padding: 0 1rem 3rem;

            :global(.nan_header) {
              border-bottom: none;
              display: flex;
              align-items: end;

              .close_button {
                position: absolute;
                top: 2rem;
                right: 2rem;
                cursor: pointer;
                z-index: 9999999;
                &:hover > :global(svg g) {
                  stroke: #3e3e3e;
                }
              }
            }

            h1 {
              font-size: 1.8rem;
              font-weight: ${font_weight_bold};
              margin-bottom: 1.2em;
            }

            .modal-body {
              padding: 0 3rem 3rem;
            }
          }
        }
      `}</style>
    </div>
  );
};
export default NaNOverlay;
