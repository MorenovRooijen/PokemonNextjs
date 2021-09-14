import { breakpoint_md, color_text_main } from "constants/theme";
import Logo from "../Logo";

/**
 * Component of the footer
 */
const NaNFooter = () => (
  <>
    <div className="footer_container">
      <div className="footer_flex">
        <div className="footer_nav">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            magnam.
          </p>
        </div>
        <div className="footer_logo">
          <Logo />{" "}
        </div>
      </div>
    </div>
    <style jsx>{`
      .footer_container {
        background: ${color_text_main};
        height: 4rem;
        color: white;
        width: 100%;

        .footer_flex {
          display: flex;
          justify-content: space-between;
          padding: 0 2.5rem;
          height: 100%;

          @media screen and (max-width: ${breakpoint_md}) {
            justify-content: flex-start;
          }

          div {
            display: flex;
            align-items: center;
            flex: 0 0 50%;
          }

          .footer_nav {
            font-size: 0.9rem;

            @media screen and (max-width: ${breakpoint_md}) {
              display: none;
            }

            p {
              display: flex;
              align-items: center;
              margin: 0;

              :global(.divider) {
                display: block;
                flex: unset;
                margin: 0 20px;
              }
            }
          }

          .footer_logo {
            justify-content: flex-end;

            @media screen and (max-width: ${breakpoint_md}) {
              justify-content: flex-start;
            }
          }
        }
      }
    `}</style>
  </>
);
export default NaNFooter;
