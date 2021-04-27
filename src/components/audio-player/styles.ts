import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  artwork: {
    // width: "100.39px",
    // height: "97.08px",
    width: "100%",
    height: "100%",
    boxShadow:
      "inset 0px -1px 0px rgba(0, 0, 0, 0.2), inset 0px 1px 0px rgba(255, 255, 255, 0.2)",
    filter: "drop-shadow(0px 20px 30px rgba(39, 14, 4, 0.47))",
    borderRadius: "20px",
  },

  mediaControl: {
    marginTop: "32px",
    marginRight: "8px",
    background: "#950A1B",
    boxShadow:
      "3px 5px 10px rgba(0, 0, 0, 0.2), -3px -8px 8px rgba(255, 255, 255, 0.12)",
  },
}));
