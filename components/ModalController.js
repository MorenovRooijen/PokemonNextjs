import NaNOverlay from "components/NaNOverlay";
/**
 * Compontent that controls the opening and closing of Modals.
 * @param {*} children element that need's an onclick.
 * @param {*} overlayContent element that is the content of the overlay
 * @param {*} [step]  when url query matches step slug, it opens automatically
 * @param {*} [overlayTitle] text for the title of content
 * @param {*} [image=null] if image given, show image instead of content.
 * @param {*} [onClick=null]  function to be executed onclick
 */
const ModalController = ({
  children,
  overlayContent,
  overlayTitle,
  onClick = null,
  ...props
}) => {
  return (
    <>
      {/* show the children (mostyl button or text) with onclick on surrounding div */}
      <div
        {...props}
        onClick={() => {
          setShowAction(true);
        }}
      >
        {children}
      </div>

      <NaNOverlay
        show={showAction}
        onHide={() => {
          setShowAction(false);
        }}
        title={overlayTitle}
      >
        {overlayContent}
      </NaNOverlay>
    </>
  );
};
export default ModalController;
