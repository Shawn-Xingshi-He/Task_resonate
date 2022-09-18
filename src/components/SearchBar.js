import "./list.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  Paper,
  MenuItem,
  IconButton,
  InputBase,
  Divider,
  TextField,
} from "@mui/material";

function SearchBar({
  setFilteredData,
  usersData,
  searchFields,
  targetFiled,
  setTargetFiled,
  setSearchContent,
  targetSearch,
}) {
  return (
    <div className="searchBar">
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
        }}
      >
        <TextField
          value={targetFiled}
          onChange={(e) => {
            setTargetFiled(e.target.value);
            // console.log(targetFiled);
            targetSearch(e.target.value);
          }}
          select
          color="primary"
          label={" "}
          InputLabelProps={{ shrink: false }}
          sx={{
            m: 0.3,
            bgcolor: "rgba(70, 184, 252,0.6)",
          }}
        >
          {searchFields.map((filed, index) => (
            <MenuItem key={"searchField" + index} value={filed}>
              {filed}
            </MenuItem>
          ))}
        </TextField>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search here"
          inputProps={{ "aria-label": "type here" }}
          onChange={(e) => {
            if (!e.target.value) {
              setFilteredData(usersData);
              setSearchContent(e.target.value);
            } else {
              setSearchContent(e.target.value);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              targetSearch(targetFiled);
            }
          }}
        />
        <Divider
          sx={{ height: 28, m: 0.5, borderRight: 1 }}
          orientation="vertical"
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => {
            targetSearch(targetFiled);
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}

export default SearchBar;
