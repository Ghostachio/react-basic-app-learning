import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";

export const TodoInputField = ({ add, handleInput, value }) => {
  return (
    <Box
      sx={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: 60,
      }}
    >
      <TextField
        id="outlined-basic"
        label="Add a Todo"
        variant="outlined"
        size="small"
        onChange={handleInput}
        value={value}
      />
      <AddCircleIcon fontSize="large" sx={{ cursor: "pointer" }} onClick={add} />
    </Box>
  );
};
