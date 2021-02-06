import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  statsItem: {
    alignItems: "center",
    display: "flex",
  },
  statsIcon: {
    marginRight: theme.spacing(1),
  },
  cardSize: {
    display: "inline-block",
  },
}));

const ProductCard = ({ className, product, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={(classes.root, classes.cardSize)} {...rest}>
      <CardContent>
        <img
          src="/image/chatAvtar/4.jpg"
          alt="image"
          width="300"
          height="300"
        />
        <Typography>vishalsingh</Typography>
      </CardContent>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired,
};

export default ProductCard;
