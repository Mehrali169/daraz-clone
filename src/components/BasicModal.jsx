import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Button, TextField } from "@mui/material";
import Close from "@mui/icons-material/Close";

import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../Slices/AddCartSlice";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "10px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

// eslint-disable-next-line react/prop-types
export default function BasicModal({ open, setOpen }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.addToCart.user);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    // setState(true);
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(userDetails({ ...user, [name]: value }));
    console.log("Updated User:", { ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSnackbarOpen(true);
    setOpen(false);
  };
  console.log("snackbar status==================>", snackbarOpen);
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                pb: 2,
                fontSize: "24px",
                fontWeight: 500,
              }}
            >
              Address Details
            </Typography>
            <Close onClick={() => handleClose()} />
          </Box>
          <Box>
            <TextField
              name="phone"
              value={user.phone}
              label="Phone No."
              variant="standard"
              sx={{ width: "100%", mb: 4 }}
              onChange={handleChange}
            />
            <TextField
              name="email"
              value={user.email}
              label="Email Address"
              variant="standard"
              sx={{ width: "100%", mb: 4 }}
              onChange={handleChange}
            />
            <TextField
              name="city"
              value={user.city}
              label="City"
              variant="standard"
              sx={{ width: "100%", mb: 4 }}
              onChange={handleChange}
            />
            <TextField
              name="address"
              value={user.address}
              label="Home Address"
              variant="standard"
              sx={{ width: "100%", mb: 4 }}
              onChange={handleChange}
            />
            <Button
              sx={{
                background: "#f57224",
                color: "white",
                fontSize: "16px",
                py: 1,
                width: "100%",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#f57224",
                  color: "white",
                },
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Your order has been successfully submitted!
        </Alert>
      </Snackbar>
    </>
  );
}
