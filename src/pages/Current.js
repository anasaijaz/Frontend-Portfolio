import React from 'react';
import {Box, Button, Grid, Typography, useTheme} from "@mui/material";
import Slider from "../components/Current/Slider/Slider";
import '@splidejs/splide/dist/css/splide.min.css';

const Current = () => {
    const theme = useTheme()
    return (
        <Box pb={5} px={theme.gutter.appbar}>

           <Grid container spacing={8} paddingBottom={3}>
               <Grid xs={6} item>
                   <img
                   width={'100%'}
                       src={'https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg'}/>
                   <Typography align={'right'} color={'textSecondary'} variant={"body2"}>
                       Shot by Anas aijaz
                   </Typography>
                   <Typography align={'right'} color={'textSecondary'} component={'p'} variant={"caption"}>
                       12 december 2021
                   </Typography>
               </Grid>
               <Grid xs={6} item>
                   <Typography gutterBottom color={'textSecondary'} fontWeight={600}
                               fontFamily={theme.typography.secondFontFamily} variant={'h4'}>
                       Anas Aijaz
                   </Typography>

                   <Typography paragraph color={'textSecondary'} variant={'body2'} fontWeight={300}>
                       Lorem ipsum dolor sit amet
                   </Typography>

                   <Typography paragraph color={'textSecondary'} variant={'body2'}>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </Typography>

                   <Typography paragraph  color={'textSecondary'} variant={'body2'}>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum                    </Typography>

                   <Typography paragraph  color={'textSecondary'} variant={'body2'}>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                   </Typography>

                   <Box textAlign={'right'}>
                   <Button size={'small'} variant={'contained'}>
                       Lorem ipsum
                   </Button>
                   </Box>
               </Grid>
           </Grid>

            <Slider/>
        </Box>
    );
};

export default Current;
