import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
export const Button = ({ name, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      name={name}
      value={name}
      css={{
        margin: 5,
        padding: 18,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 19,
        width: 30,
        display: "flex",
        height: 34,
      }}
    >
      {name}
    </button>
  );
};
