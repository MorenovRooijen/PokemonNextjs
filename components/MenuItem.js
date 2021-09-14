import MenuLink from "components/MenuLink";
import {
  breakpoint_lg,
  color_text_correct,
  color_text_main,
  font_weight_semi_bold,
} from "constants/theme";

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
      <style jsx>{`
        .item_container {
          position: relative;
          cursor: pointer;
          text-align: center;

          &.disabled_container {
            cursor: initial;
          }

          :global(.item) {
            height: 5rem;
            display: flex;
            align-items: center;
            margin: 0 2.5rem;
            position: relative;

            &:after {
              display: block;
              position: absolute;
              content: "";
              bottom: 0;
              left: 0;
              right: 0;
              border-bottom: 0.4em solid transparent;

              @media screen and (max-width: ${breakpoint_lg}) {
                transform: none;
              }
            }
          }

          :global(a) {
            padding: 0 !important;
            font-size: 0.8rem;
            color: ${color_text_main};
            font-weight: ${font_weight_semi_bold};
            transition: border 0.15s ease;
            letter-spacing: 0.24px;
          }

          :global(.disabled) {
            opacity: 0.25;
          }
        }

        .active_container {
          :global(.item) {
            &:after {
              border-color: ${color_text_main};
            }
          }

          &.finished_container {
            :global(.item):after {
              color: ${color_text_correct};
              border-color: ${color_text_correct};
            }
          }
        }
      `}</style>
    </div>
  );
};

export default MenuItem;
