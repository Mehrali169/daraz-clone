import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Rating,
  Button,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../sevices/Api";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LocationIcon from "@mui/icons-material/LocationOnOutlined";
import ShippingIcon from "@mui/icons-material/LocalShippingOutlined";
import NearIcon from "@mui/icons-material/NearMeOutlined";
import Money from "@mui/icons-material/PaidOutlined";

import Header from "./Header";
import { useDispatch } from "react-redux";
import { addToCart } from "../Slices/AddCartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data } = useGetAllProductsQuery();
  const singleProduct = data.find((obj) => obj.id === +id);
  //   console.log(singleProduct);

  const addData = () => {
    dispatch(addToCart({ ...singleProduct, quantity }));
  };

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  return (
    <>
      <Header />
      <Box sx={{ background: "silver" }}>
        <Container sx={{ background: "white" }}>
          <Grid container columnSpacing={5}>
            <Grid item md={4} sm={12} xs={12}>
              <Box
                component="img"
                src={singleProduct?.image}
                alt="product"
                width="350px"
                height="350px"
              />
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { md: "26px", sm: "18px", xs: "16px" },
                  fontWeight: 500,
                }}
              >
                {singleProduct?.title}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
                <Typography
                  variant="body2"
                  sx={{ pr: 2, textTransform: "capitalize", fontSize: "16px" }}
                >
                  {singleProduct?.category}
                </Typography>
                <Rating
                  name="half-rating-read"
                  value={singleProduct?.rating?.rate}
                  readOnly
                />
                <Typography sx={{ mx: 1 }}>
                  {singleProduct?.rating?.rate} Rating
                </Typography>
              </Box>
              <Typography>{singleProduct?.description}</Typography>
              <Typography
                variant="h3"
                sx={{ color: "#f85606", pt: 2, fontSize: "32px" }}
              >
                $ {singleProduct?.price}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
                <Typography>Quantity</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button sx={{ fontSize: "30px" }} onClick={decrement}>
                    -
                  </Button>
                  <Typography>{quantity}</Typography>
                  <Button sx={{ fontSize: "20px" }} onClick={increment}>
                    +
                  </Button>
                </Box>
              </Box>
              <Box>
                <Link to="/cart">
                  <Button
                    sx={{
                      background: "#2abbe8",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#2abbe8",
                        boxShadow: "none",
                      },
                      px: 6,
                      py: 1,
                    }}
                    onClick={addData}
                  >
                    Buy Now
                  </Button>
                </Link>
                <Button
                  sx={{
                    background: "#f57224",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#f57224",
                      boxShadow: "none",
                    },
                    px: 5,
                    ml: { md: 2, sm: 2, xs: 0 },
                    py: 1,
                  }}
                  onClick={addData}
                >
                  Add to Cart
                </Button>
              </Box>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ color: "gray" }}>Delivery</Typography>
                <InfoOutlinedIcon />
              </Box>
              <Box sx={{ display: "flex", py: 2 }}>
                <LocationIcon />
                <Typography sx={{ color: "gray", pl: 2 }}>
                  Sindh, Karachi - Gulshan-e-Iqbal, Block 15
                </Typography>
              </Box>
              <Box sx={{ display: "flex", py: 2 }}>
                <ShippingIcon />
                <Typography sx={{ color: "gray", pl: 2 }}>
                  Ships from Pakistan
                </Typography>
              </Box>
              <Box sx={{ display: "flex", py: 2 }}>
                <NearIcon />
                <Typography sx={{ color: "gray", pl: 2 }}>
                  Free Delivery
                </Typography>
              </Box>
              <Typography px={4}>
                Enjoy free shipping promotion with minimum spend of Rs. 999 in
                certain area Misuli
              </Typography>
              <Box sx={{ display: "flex", py: 2 }}>
                <Money />
                <Typography sx={{ color: "gray", pl: 2 }}>
                  Cash On Delivery Available
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProductDetails;
