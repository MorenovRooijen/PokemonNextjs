import { CSSTransition } from "react-transition-group";
/**
 * Compontent that handles horizontal scrolling transition
 * @param {*} children Content to be scrolled
 * @param {boolean} inCondition whether or not the content has to be in screen
 * @param {boolean} larger direction in which the transition must be.
 */
const NaNScrollTransition = ({ children, inCondition, larger, name = "" }) => {
  return (
    <>
      <CSSTransition
        unmountOnExit
        in={inCondition}
        timeout={{ enter: 500, exit: 500 }}
        classNames="goedhuis_page"
      >
        <div className="nan_scroll_transition">{children}</div>
      </CSSTransition>
      <style global jsx>
        {`
          .nan_scroll_transition {
            flex: 1 0;
            flex-basis: 100%;
            max-width: 100vw;
          }
          .goedhuis_page-enter,
          .goedhuis_page-exit {
            position: relative;
            ${larger != null
              ? `
            transform: translateX(${larger ? "0" : "-100vw"});
            `
              : ``}
          }
          .goedhuis_page-enter-active,
          .goedhuis_page-exit-active {
            position: relative;
            ${larger != null
              ? `
              transform: translateX(${larger ? "-100vw" : "0"});
              `
              : ``}
            transition: transform 500ms ease;
          }
          .goedhuis_page-appear .center_container,
          .goedhuis_page-appear .left_container {
            opacity: 0;
            transform: translateY(10rem);
          }
        `}
      </style>
    </>
  );
};
export default NaNScrollTransition;
