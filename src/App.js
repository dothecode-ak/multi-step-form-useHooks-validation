import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        component={Box}
        p={4}
        style={{
          display: "FLEX",
          alignItems: "CENTER",
          justifyContent: "CENTER",
          minHeight: "100vh",
        }}
      >
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
