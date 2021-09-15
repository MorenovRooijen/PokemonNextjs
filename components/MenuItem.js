import MenuLink from "components/MenuLink";

/**
 * Compontent for each of the menu items
 * @param {*} page the page the menu links to
 * @param {boolean} active whether or not this item is active
 * @param {function} onClick function to be called on click
 */
const MenuItem = ({
  link = "#",
  text = "geenTekst",
  disabled = false,
  active = false,
}) => {
  return (
    <div className={`item_container`}>
      <MenuLink
        useShallow
        link={link}
        text={text}
        disabled={disabled}
        active={active}
      />
      <style jsx>{``}</style>
    </div>
  );
};

export default MenuItem;
