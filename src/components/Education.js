import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  paper: {
    padding: theme.spacing(1),
  }
})

const Education = withStyles(styles)(({ classes }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Box className={classes.paper}>
          <Typography variant="body1" align="center">
            <a href="https://flatironschool.com/" target="_blank" rel="noopener noreferrer" >
              <img src="/img/flatironschool.png" alt="flatiron school logo" />
              <br />
              Flatiron School
            </a>
          </Typography>
          
          <Typography variant="body1" align="center">
            Location: <a href="https://www.google.com/maps/place/1411+4th+Ave,+Seattle,+WA+98101/@47.6092823,-122.3385627,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab38338e227:0x96ab350fef4c3d47!8m2!3d47.6092787!4d-122.336374" target="_blank" rel="noopener noreferrer">Seattle, Washington</a>
            <br />
            Degree: Certificate in Full Stack Web Development
          </Typography>

          <Typography variant="body2" align="center">
            Graduated: May, 2019
          </Typography>
        </Box>
      </Grid>
      
      <Grid item xs={12} sm={6}>
        <Box className={classes.paper}>
          <Typography variant="body1" align="center">
            <a href="https://www.washington.edu/" target="_blank" rel="noopener noreferrer">
              <img src="/img/uw2.gif" alt="university of washington logo" />
              <br />
              The University of Washington
                </a>
          </Typography>
          <Typography variant="body1" align="center">
            Location: <a href="https://www.google.com/maps/place/1411+4th+Ave,+Seattle,+WA+98101/@47.6092823,-122.3385627,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab38338e227:0x96ab350fef4c3d47!8m2!3d47.6092787!4d-122.336374" target="_blank" rel="noopener noreferrer">Seattle, Washington</a>
            <br />
            Degree: Bachelor of Arts in Law, Society, and Justice
          </Typography>
          <Typography variant="body2" align="center">
            Graduated: December, 2004
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
})

export default Education;