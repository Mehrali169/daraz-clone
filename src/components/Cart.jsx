import { Box, Button, Grid, Typography } from "@mui/material";
import BasicModal from "./BasicModal";
import { useSelector } from "react-redux";

import Header from "./Header";
import React from "react";

const Cart = () => {
  const cartDetails = useSelector((state) => state.addToCart.addcart);
  // const userdetails = useSelector((state) => state.addToCart.user);
  const totalPrice = useSelector((state) =>
    state.addToCart.totalPrice.toFixed(2)
  );
  // console.log("totalPrice..", totalPrice);
  // console.log("userdetails.........", userdetails);

  const [open, setOpen] = React.useState(false);
  const handleOpen = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <Header />
      <Box>
        <Grid container columnSpacing={10}>
          <Grid item md={8} sm={12} xs={12}>
            {cartDetails.map((item, i) => {
              return (
                <Grid container key={i} sx={{ background: "#f4f4f4" }}>
                  <Grid item md={4}>
                    <Box
                      component="img"
                      src={item?.image}
                      width="150px"
                      height="150px"
                    />
                  </Grid>
                  <Grid item md={8} sx={{ alignSelf: "center" }}>
                    <Typography>{item?.title}</Typography>
                    <Typography sx={{ color: "#f57224", fontSize: "30px" }}>
                      $ {item?.price}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Typography>Quantity </Typography>
                      <Typography>{item.quantity}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <Box sx={{ background: "#f4f4f4", p: 2, mt: 2, height: "200px" }}>
              <Typography sx={{ fontSize: "20px" }}>Order Summary</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ color: "#757575", py: 1 }}>Total</Typography>${" "}
                {totalPrice}
              </Box>
              <Button
                sx={{
                  background: "#f57224",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#f57224",
                    color: "white",
                  },
                  px: 12,
                  py: 1,
                  mt: 11,
                }}
                onClick={handleOpen}
              >
                Proceed to Checkout
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <BasicModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Cart;
