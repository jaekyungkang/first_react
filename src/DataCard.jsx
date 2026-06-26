import * as React from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function DataCard({ imageURL, title, text, likeButton }) {
  // props look like parameters, but note the curly braces!
  return (
    <Card>
      <CardMedia component="img" height="350 px" image={imageURL} />
      <CardContent sx={{ pt: 0 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardContent sx={{ pt: 0 }}>
        <Typography>{text}</Typography>
      </CardContent>
      <IconButton color="alarm">
        <FavoriteIcon />
      </IconButton>
    </Card>
  );
}
