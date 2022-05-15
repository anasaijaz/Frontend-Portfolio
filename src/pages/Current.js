import React from 'react';
import {Box, Button, Grid, TextField, Typography, useTheme} from "@mui/material";
import Slider from "../components/Current/Slider/Slider";
import '@splidejs/splide/dist/css/splide.min.css';
import {makeStyles} from "@mui/styles";
import thoughtsutra from '../assets/thoughtsutra.png'
import Appbar from "../components/Appbar";

const useStyles = makeStyles(theme => ({
    photo: {
        backgroundImage: 'url(https://i.ibb.co/fpS5qj2/IMG-20220515-164431.jpg)',
        height: '100%',
        backgroundSize: 'cover',

        backgroundRepeat: 'no-repeat'
    },
    photoTitle: {
        position: "absolute",
        top: 0,
        right: "-50px",
        writingMode: 'vertical-lr'
    },
    title: {
        position: "absolute",
        top: "5%",
        left: "-20%",
        color: theme.palette.text.secondary,
        width: "50px",
        fontWeight: 500
    }
}))

const Current = () => {
    const theme = useTheme()
    return (
        <Box>
            <Appbar/>
            <Box px={theme.gutter.appbar}>
            <Hero/>
            <Education/>
            <Projects/>
            <Contact/>
            <Footer/>
        </Box>
        </Box>
    );
};


const Hero = () => {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <Box pb={10}>

            <Grid container spacing={8} paddingBottom={3} >
                <Grid xs={6} item>
                    <Box className={classes.photo}>

                    </Box>
                    <Typography pt={1} align={'right'} color={'textSecondary'} variant={"body2"}>
                        Shot by @anuran
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
                        Passionate about tech stacks
                    </Typography>

                    <Typography paragraph color={'textSecondary'} variant={'body2'}>
                        I am a second year under graduate a NIT K. Implementing complex workflows and designing beautiful UI for startups and companies. I have an experience of over 1.5 years
                    </Typography>

                    <Typography paragraph  color={'textSecondary'} variant={'body2'}>
                        Worked with companies like Titan and Aditya Birla Finance for building reliable products used by thousands of people around the country under the mentorship of CTO of Thought Sutra
                    </Typography>
                    <Typography paragraph  color={'textSecondary'} variant={'body2'}>
                        Tries to find an elegant solution to the most difficult problems
                    </Typography>
                    <Typography paragraph  color={'textSecondary'} variant={'body2'}>
                        Always ready to expand my knowledge of tech stacks, quick and keen learner with solid understanding of web technologies such as React, Node Express, Rails and React native
                    </Typography>
                    <Box textAlign={'right'}>
                        <a href='#work'>
                        <Button size={'small'} variant={'contained'}>
                            Connect
                        </Button>
                        </a>
                    </Box>
                </Grid>
            </Grid>

            <Box pt={5}>
            <Slider/>
            </Box>
        </Box>
    )
}

const Projects = () => {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <Box id={'projects'} px={theme.gutter.appbar} py={theme.gutter.section}>
            <Box position={'relative'} textAlign={'center'} width={"60%"} mx={'auto'}>
                <img width={"100%"} src={thoughtsutra}/>
                <Box textAlign={'left'} className={classes.photoTitle}>
                <Typography letterSpacing={1} variant={'body2'} fontSize={'10px'}>
                    Designed using figma
                </Typography>
                    <Typography color={'textSecondary'} variant={'subtitle2'}>
                        Created using React JS
                    </Typography>
                </Box>

                <Typography fontFamily={theme.typography.secondFontFamily}  className={classes.title}
                            align={"left"} variant={"h1"} marginTop={3}>
                    Thought Sutra
                </Typography>
             <Typography gutterBottom align={"left"} variant={"h5"} marginTop={3}>
                 Six months
             </Typography>
                <Typography align={"left"} variant={"subtitle2"} color={'textSecondary'}>
                    Learnt new tools and skills under the guidance of Associate Team lead Nagarro
                    Implementation of Input Sanitization, Builder pattern,
                    Integration with S3 bucket, Payment gateway integration coupon management
                    system, Google OAuth and various features such as forums, and admin panel.
                    Redesigned LMS with Material UI principles and incorporating typescript in
                    codebase Used p5.js to create animated self-growing tree with message adding
                    feature. Used Mongo DB aggregation framework and created an OTP
                    authentication system. Deployed to AWS EC2

                </Typography>
            </Box>
        </Box>
    )
}

const Education = () => {
    const theme = useTheme()

    return (
        <Box id={'education'} textAlign={'center'} py={theme.gutter.section}>
            <img  width={"100px"} src={'https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png'} alt={'graduation school'}/>
            <Typography marginTop={2} gutterBottom  fontWeight={600}
                        fontFamily={theme.typography.secondFontFamily} variant={'h5'}>
                NITK B. Tech
            </Typography>
            <Typography color={'textSecondary'} gutterBottom
                        variant={'subtitle2'}>
                2020 - 2024
            </Typography>

            <Grid container>
                <Grid  item xs={2}>
                    <Work
                        name={'Thought Sutra'}
                        duration={'8 months'}
                        src={'https://media-exp1.licdn.com/dms/image/C4E0BAQHv-j9vFA8u0g/company-logo_200_200/0/1635853599472?e=2159024400&v=beta&t=3n7jVkgAtJILsrFMyOkNHYneV33C6YZAq4wpJX7qY-o'}/>

                </Grid>
                <Grid item xs={8}>

                </Grid>
                <Grid item xs={2}>
                    <Work
                        name={'NITK Racing'}
                        duration={'4 months'}
                        src={'https://photo.isu.pub/nitkracing/photo_large.jpg'}/>
                </Grid>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={2}>
                    <Work
                        name={'Vevesta Labs'}
                        duration={'4 months'}
                        src={'https://media-exp1.licdn.com/dms/image/C4E0BAQG36CD4H74yjQ/company-logo_200_200/0/1634834767135?e=2147483647&v=beta&t=uBfHRWrldI0WlaOzAkeiGIY9p6XAvBsTBdEJ1fH99j0'}/>
                </Grid>

                <Grid item xs={2}>

                </Grid>
                <Grid item xs={2}>
                    <Work
                        name={'E-Cell'}
                        duration={'1 month'}
                        src={'https://media-exp1.licdn.com/dms/image/C4E0BAQE4WJYZ99eTlg/company-logo_200_200/0/1593514426980?e=1660780800&v=beta&t=ylZhvP5iBkztXcLuXwTCoZ9Y-XICTXUPCv2UeAIjUQI'}/>
                </Grid>
            </Grid>
        </Box>
    )
}

const Work = ({src, name, duration}) => {
    return (
        <Box mb={5} textAlign={'center'}>
            <img height={'50px'} src={src} alt={'work'}/>
            <Typography variant={'subtitle2'} color={'textSecondary'}>
                {name}
            </Typography>
            <Typography variant={'subtitle2'} color={'textSecondary'}>
                {duration}
            </Typography>
        </Box>
    )
}


const Contact = ()=> {
    const theme = useTheme()

    return (<Box id={'work'} py={theme.gutter.section} px={theme.gutter.appbar}>
        <Box width={'60%'} mx={'auto'}>
        <Typography fontFamily={theme.typography.secondFontFamily} variant={'h4'}>
            Contact us
        </Typography>
        <Typography paragraph variant={'body2'} color={'textSecondary'}>
            Lorem ipsumm random text to fill up
        </Typography>

<Box display={'flex'} gap={1}>
        <TextField style={{flexGrow: 1}} label={'First name'} size={'small'} variant={'outlined'}/>
        <TextField style={{flexGrow: 1}} label={'Last name'} size={'small'} variant={'outlined'}/>
</Box>
        <TextField style={{marginTop: 8}} fullWidth label={'Contact'} size={'small'} variant={'outlined'}/>
        <TextField style={{marginTop: 8}} rows={8} fullWidth={true} label={'Description'} multiline={true} size={'small'} variant={'outlined'}/>
        <Box textAlign={'right'} mt={1}>
            <Button variant={'contained'}>
                Mail
            </Button>
        </Box>
        </Box>
    </Box>)
}


const Footer = () => {
    const theme = useTheme()

    return <Box bgcolor={'black'}  my={theme.gutter.section} py={2} px={theme.gutter.appbar}>
        <Typography align={'center'} variant={'body2'} color={'white'}>
            Made with lot's of effort and ❤️
        </Typography>
    </Box>
}


export default Current;
