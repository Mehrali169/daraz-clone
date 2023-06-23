import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Close from "@mui/icons-material/Close";

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
export default function CompleteModal({ complete, setComplete }) {
  const handleClose = () => {
    setComplete(false);
  };

  return (
    <>
      <Modal open={complete} onClose={handleClose}>
        <Box component="form" sx={style}>
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
            <Typography>Infomation Submit Succefully</Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
