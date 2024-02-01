import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardMuebles = ({mueblesData}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          //height="140"
          image={mueblesData.img}
          alt={mueblesData.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {mueblesData.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {mueblesData.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
/*}
const CardMuebles = ({escritoriosData}) => {
<Card sx={{ maxWidth: 345 }}>
<CardActionArea>
  <CardMedia
    component="img"
    //height="140"
    image={escritoriosData.img}
    alt={escritoriosData.nombre}
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {escritoriosData.nombre}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {escritoriosData.precio}
    </Typography>
  </CardContent>
</CardActionArea>
</Card>*/
  );
}

export default CardMuebles;