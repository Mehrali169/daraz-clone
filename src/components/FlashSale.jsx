import {
  Box,
  Card,
  CardContent,
  Container,
  Rating,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useGetAllProductsQuery } from "../sevices/Api";

const FlashSale = () => {
  const { data } = useGetAllProductsQuery();
  return (
    <Box py={2}>
      <Container>
        <Typography
          sx={{ fontFamily: "Roboto", color: "#757575", fontSize: "22px" }}
        >
          Flash Sale
        </Typography>
        <Box
          p={6}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {data?.map((item, i) => {
            return (
              <NavLink
                to={"/productdetails/" + item.id}
                style={{ textDecoration: "none" }}
                key={i}
              >
                <Card
                  sx={{
                    width: "230px",
                    height: "300px",
                    maxWidth: 345,
                    m: 2,
                    textAlign: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={item?.image}
                    height="150px"
                    width="200px"
                    alt="products"
                  />
                  <CardContent>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        {item?.title?.slice(0, 51)}...
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="#f85606">
                      $.{item?.price}
                    </Typography>
                    <Rating
                      name="half-rating-read"
                      value={item?.rating?.rate}
                      readOnly
                    />
                  </CardContent>
                </Card>
              </NavLink>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default FlashSale;
