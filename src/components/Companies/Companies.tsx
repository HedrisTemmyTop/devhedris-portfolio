import pritom from "../../assets/icons/pritom.svg";
import { LazyImage } from "../LazyImage/LazyImage";
import popers from "../../assets/icons/poppers.svg";
import mayabi from "../../assets/icons/mayabi.svg";
import dualix from "../../assets/icons/dualiex.svg";
import octopus from "../../assets/icons/octopus.svg";

const text = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "4rem",
};

const Companies = (): JSX.Element => {
  return (
    <div className="marquee">
      <div style={text}>Trusted By Top Tech Companies </div>
      <div className="marquee-content">
        <LazyImage src={pritom} alt="company" />
        <LazyImage src={mayabi} alt="company" />
        <LazyImage src={popers} alt="company" />
        <LazyImage src={dualix} alt="company" />
        <LazyImage src={octopus} alt="company" />
        <LazyImage src={dualix} alt="company" />
        
        {/* Duplicate for infinite marquee effect */}
        <LazyImage src={pritom} alt="company" />
        <LazyImage src={mayabi} alt="company" />
        <LazyImage src={popers} alt="company" />
        <LazyImage src={dualix} alt="company" />
        <LazyImage src={octopus} alt="company" />
        <LazyImage src={dualix} alt="company" />
      </div>
    </div>
  );
};

export default Companies;
