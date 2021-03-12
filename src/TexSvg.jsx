import { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import { Placeholder } from "semantic-ui-react";
import { useMathJaxContext } from "./MathJaxLoader";

export const TexSvg = ({ tex, scale }) => {
  const { ready } = useMathJaxContext();
  const [svg, setSvg] = useState(null);
  useEffect(() => {
    if (!ready) {
      return;
    }
    if (!tex) {
      setSvg(null);
      return;
    }
    window.MathJax.tex2svgPromise(tex, { display: false }).then((svg) => {
      const svgText = svg.firstElementChild.outerHTML;
      const width =
        svg.firstElementChild.width.baseVal.valueInSpecifiedUnits * scale;
      const height =
        svg.firstElementChild.height.baseVal.valueInSpecifiedUnits * scale;
      setSvg({ svgText, width, height });
    });
  }, [ready, tex, setSvg, scale]);

  if (!tex) {
    return null;
  }
  if (!svg) {
    return (
      <Placeholder>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    );
  }

  return <SVG src={svg.svgText} width={svg.width} height={svg.height} />;
};
