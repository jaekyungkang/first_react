import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import DataCard from "./DataCard";
import "./App.css";
import memory from "./memories.json";
import { useState } from "react";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

console.log("my data:", memory);
//let count = 0;

function App() {
  // STATE VARIABLES
  const [count, setCount] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState(" ");

  // make new array to hold data objects that mearch search input

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleClick() {
    setCount(count + 1);
  }

  function handleSearch(event) {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  // let matching = memory.filter((match) =>
  //   match.toLowerCase().includes(search).toLowerCase(),
  // );

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <Typography>Clicks: {count}</Typography>
      <Button
        variant="contained"
        sx={{ px: 6, mx: "auto" }}
        onClick={handleClick}
      >
        Click Me
      </Button>
      <Typography gutterBottom variant="h1">
        2026 SNAP ACADEMY!
      </Typography>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-controlled"
          label="Controlled"
          value={search}
          onChange={handleSearch}
        />
      </Box>

      <Grid spacing={4} container>
        {memory.map((mem) => (
          <Grid>
            <DataCard
              title={mem.title}
              imageURL={mem.imageURL}
              text={mem.text}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
