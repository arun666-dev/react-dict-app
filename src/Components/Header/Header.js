import "./Header.css";
import {
  TextField,
  createTheme,
  ThemeProvider,
  MenuItem,
} from "@material-ui/core";

import categories from "../../Data/Category";

export const Header = ({ category, setCategory, word, setWord }) => {
  // import dark theme
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: { main: "#fff" },
    },
  });
  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <>
      <div className="header">
        <span className="title">{word ? word : "word hunt"}</span>
        <div className="inputs">
          {/* ThemeProvider allow us to apply dark theme to comp. we will wrap the comp. inside it */}
          <ThemeProvider theme={darkTheme}>
            <TextField
              id="standard-basic"
              variant="standard"
              className="search"
              label="Search a word"
              value={word}
              onChange={(event) => setWord(event.target.value)}
            />
            <TextField
              id="outlined-select-currency"
              className="select"
              select
              helperText="Please select your language"
              label="language"
              value={category}
              onChange={(event) => handleChange(event.target.value)}
            >
              {categories.map((options) => {
                return (
                  <MenuItem key={options.label} value={options.label}>
                    {options.value}
                  </MenuItem>
                );
              })}
            </TextField>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};
