import GitTerminal from "./components/GitTerminal";
import Grid from "@mui/material/Grid2";

function App() {
  return (
    <Grid
      container
      width="100%"
      height="100vh"
      sx={{ backgroundColor: "#282c34", color: "#ffffff" }}
    >
      <Grid size={9} sx={{ backgroundColor: "#aaccff", color: "#000000" }}>
        <h1>Git Visualizer</h1>
      </Grid>

      <Grid
        size={3}
        container
        direction="column"
        sx={{ backgroundColor: "#333333", color: "#ffffff" }}
      >
        <Grid width="100%" height="67%" sx={{ backgroundColor: "purple" }}>
          Folder Structure
        </Grid>
        <Grid width="100%" height="33%">
          <GitTerminal />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
