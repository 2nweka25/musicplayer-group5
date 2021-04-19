import { InputBase } from "@material-ui/core";
import { makeStyles, styled } from "@material-ui/core/styles";

const Searchbar = styled(InputBase)({
  padding: "4px 16px",
  background: "#F0F0F0",
  color: "#949191",
  borderRadius: "20px",
});

export default makeStyles((theme) => ({
  homeSection: {
    marginTop: theme.spacing(4),
  },

  sectionTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(3),
  },

  sectionRow: {
    display: "flex",
  },
}));

export { Searchbar };
