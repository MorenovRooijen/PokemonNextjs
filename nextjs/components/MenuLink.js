import { Nav } from "react-bootstrap";

/**
 * Compontent showing a menu link with a text
 * @param {*} link url the item should link to
 * @param {*} text text of the link item
 * @param {boolean} useShallow if the page should be reloaded or not
 * @param {boolean} disabled if the item should be disabled
 * @param {boolean} finished if the item is finished
 * @param {boolean} active if the item is active
 */
const LinkItem = ({
  link,
  text,
  useShallow = false,
  disabled = null,
  active = null,
}) => (
  <>
    <Nav.Item className="item">
      <Nav.Link
        disabled={disabled || null}
        className={` ${active ? "active_menu_item" : ""}`}
      >
        {text}
      </Nav.Link>
    </Nav.Item>
    <style jsx>{``}</style>
  </>
);

export default LinkItem;
