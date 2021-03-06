import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '500px',
    marginBottom: '50px',
    marginLeft: '50px',
    marginRight: '50px',
    backgroundColor: '#183d5db0',
    backdropFilter: 'blur(10px)',
    color: theme.palette.primary.contrastText,
    borderRadius: '15px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '10px',
      marginRight: '10px',
  },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  
  avatar: {
    width: '50px',
    height: '50px',
  },

  OCContainer: {
    marginTop: '30px',
    marginRight: '50px',
  },
  
  button: {
    marginLeft: '10px',
    marginBottom: '10px',
    background: '#3ed1b8',
    transition: '0.5s ease',
    '&:hover': {
      backgroundColor: '#3ed1b8',
      boxShadow: '0px 0px 11px 0px rgb(62 209 184), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
  },
  color:'#00000'
  },

  
}));

export default function OC() {
  const classes = useStyles();

  return (
    <Grid xl={12} md={12} lg={12} container direction="row" justify="space-around" alignItems="center" className={classes.OCContainer}>
    <Card className={classes.root} elevation='6' >
      <CardHeader
        title="BITS 2021 WhatsApp Group"
        subheader="You can join the BITS 2021 WhatsApp group and chat with other participants and get help in if you need any"
      />
      <CardContent>
        <Typography variant="body2"  component="p">
        Please be respectful to other members of the group and help each other.
        It will benefit you when it comes to winning BITS 2021 competition
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        startIcon={<WhatsAppIcon />}
      >
        Join
      </Button>
      </CardActions>
    </Card>
    <Card className={classes.root} elevation='6' >
      <CardHeader
        title="BITS 2021 WhatsApp Group"
        subheader="You can join the BITS 2021 WhatsApp group and chat with other participants and get help in if you need any"
      />
      <CardContent>
        <Typography variant="body2"  component="p">
        Please be respectful to other members of the group and help each other.
        It will benefit you when it comes to winning BITS 2021 competition
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        startIcon={<i class="fab fa-discord"></i>}
      >
        Join
      </Button>
      </CardActions>
    </Card>
    </Grid>
  );
}