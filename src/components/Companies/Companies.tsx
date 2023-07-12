import pritom from "../../assets/icons/pritom.svg";
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
    <div>
      <div style={text}>Trusted By Top Tech Companies </div>
      <div>
        <img src={pritom} alt="company" />
        <img src={mayabi} alt="company" />
        <img src={popers} alt="company" />
        <img src={dualix} alt="company" />
        <img src={octopus} alt="company" />
        <img src={dualix} alt="company" />
      </div>
    </div>
  );
};

export default Companies;
