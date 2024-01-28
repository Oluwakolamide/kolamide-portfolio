import { css } from "styled-components";

import FuturaBlock from "../fonts/futura-block.ttf";
import FuturaItalics from "../fonts/futura-itallics.ttf";

const futuraNormalWeight = {
  400: FuturaBlock,
};

const futuraItalicsWeight = {
  400: FuturaItalics,
};

const futura = {
  name: "Futura",
  normal: futuraNormalWeight,
  italic: futuraItalicsWeight,
};

const createFontFaces = (family, style = "normal") => {
  let styles = "";

  for (const [weight, format] of Object.entries(family[style])) {
    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${format}) format('truetype');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const futuraNormal = createFontFaces(futura);
const futuraItalic = createFontFaces(futura, "italic");

const Fonts = css`
  ${futuraNormal + futuraItalic}
`;

export default Fonts;
