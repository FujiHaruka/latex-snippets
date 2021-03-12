import SVG from "react-inlinesvg";
import "./Logo.css";

export const Logo = ({ size }) => (
  <SVG
    className="Logo"
    src={`
<svg viewBox="0 0 100 100">
  <polygon points="0,0 100,0 50.0,86" style="fill:rgb(182 212 233);"></polygon>
</svg>
`}
    width={size}
    height={size}
  />
);
