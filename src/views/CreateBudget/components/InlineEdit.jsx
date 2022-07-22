import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

const InlineEdit = ({name, setName}) => {
  const [editMode, setEditMode] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <TextField
      variant="standard"
      fullWidth
      error={name === ""}
      onChange={handleChange}
      disabled={!editMode}
      focused={editMode}
      value={name}
      InputProps={{
        style: { fontSize: 35 },
        endAdornment: editMode ? (
          <InputAdornment position="end">
            <IconButton onClick={() => setEditMode(false)}>
              <DoneIcon />
            </IconButton>
          </InputAdornment>
        ) : (
          <InputAdornment position="end">
            <IconButton onClick={() => setEditMode(true)}>
              <EditIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        mb: 2,
        "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "black",
        },
      }}
    />
  );
};

export default InlineEdit;
