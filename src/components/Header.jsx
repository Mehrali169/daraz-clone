import { Badge, Box, Button, Container, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Cart from "@mui/icons-material/ShoppingCartOutlined";
import daraz_logo from "../assets/daraz_logo.png";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const productLength = useSelector((state) => state.addToCart);
  // console.log("numbers of products .....", productLength.addcart?.length);
  return (
    <Container>
      <Box
        py={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <Box
            component="img"
            src={daraz_logo}
            alt="daraz_logo"
            width="13%"
            height="13%"
            minWidth="100px"
          />
        </Link>
        <Box sx={{ background: "#f5f5f5", display: "flex" }}>
          <InputBase
            sx={{
              ml: 1,
              py: { md: 1, xs: 0 },
              width: { md: "600px", sm: "100%", xs: "80%" },
            }}
            placeholder="Search in Site"
            inputProps={{
              "aria-label": "search google maps",
            }}
          />
          <Button sx={{ background: "#f57224", height: "50px" }}>
            <SearchIcon sx={{ color: "white" }} />
          </Button>
        </Box>
        <NavLink to="/cart">
          <Badge badgeContent={productLength.addcart?.length} color="primary">
            <Cart sx={{ fontSize: "40px" }} />
          </Badge>
        </NavLink>
      </Box>
    </Container>
  );
};

export default Header;
