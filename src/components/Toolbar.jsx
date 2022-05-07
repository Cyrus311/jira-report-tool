import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#000"
    }
  }
});

const Toolbar = ({ buttons }) => {
  return (
    <ThemeProvider theme={outerTheme}>
      <Stack spacing={2} direction="row" justifyContent="flex-end">
        {buttons.map((button) => button)}
      </Stack>
    </ThemeProvider>
  );
};

export default Toolbar;

{
  /* <ThemeProvider theme={outerTheme}>
      <Stack spacing={2} direction="row" justifyContent="flex-end">
        {buttons.map((button) => (
          <Button
            key={button.name}
            variant="outlined"
            onClick={button.onclick}
            color="primary"
          >
            {button.name}
          </Button>
        ))}
      </Stack>
    </ThemeProvider> */
}
