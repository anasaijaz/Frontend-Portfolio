import React, {useState} from 'react';
import {Box, Button, Grid, IconButton, TextField, Typography, useTheme} from "@mui/material";
import Slider from "../components/Current/Slider/Slider";
import '@splidejs/splide/dist/css/splide.min.css';
import {makeStyles} from "@mui/styles";
import thoughtsutra from '../assets/thoughtsutra.png'
import vevesta from '../assets/vevesta.png'
import titan from '../assets/titan.png'
import racing from '../assets/racing.png'
import payatu from '../assets/payatu.jpg'

import Appbar from "../components/Appbar";
import { useForm } from '@formspree/react';
import useContact from "../hooks/useContact";
import {red} from "@mui/material/colors";
import {FiHeart} from "react-icons/fi";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    section: {
    },
    snapContainer: {
    },
    photo: {
        backgroundImage: 'url(https://i.ibb.co/fpS5qj2/IMG-20220515-164431.jpg)',
        height: '300px',
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
        color: theme.palette.grey.A400,
        width: "50px",
        fontWeight: 500,
        [theme.breakpoints.down('md')] : {
            fontSize: "32px !important"
        }
    },
    project: {
        padding: theme.spacing(1),
        cursor: 'pointer',
        marginInline: theme.spacing(1),
        borderRadius: "100px",
        fontFamily: 'poppins',
        fontSize: "14px",
        color: theme.palette.text.secondary,
        whiteSpace: "nowrap"
    },
    active: {
        backgroundColor: 'tan'
    },
    image: {
        width: "100%",
        objectFit: 'cover',
        height: "350px"
    },
    overflowX: {
        overflowX: "auto"
    }
}))

const Current = () => {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <Box>
            <Appbar/>
            <Box mt={18} sx={{
                px: {md: theme.gutter.appbar, xs: 4}
            }} className={classes.snapContainer}>
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
        <Box className={classes.section} pb={10}>

            <Grid container spacing={8} paddingBottom={3} >
                <Grid xs={12} md={6} item>
                    <Box className={classes.photo} sx={{
                        height: {md: "350px", xs: '200px'}
                    }}>
                    </Box>
                    <Typography pt={1} align={'right'} color={'textSecondary'} variant={"body2"}>
                        Shot by @anuran
                    </Typography>
                    <Typography align={'right'} color={'textSecondary'} component={'p'} variant={"caption"}>
                        12 december 2021
                    </Typography>
                </Grid>
                <Grid xs={12} md={6} item>
                    <Box alignItems={'center'} justifyContent={'space-between'} display={'flex'}>
                        <Box >
                    <Typography gutterBottom color={'textSecondary'} fontWeight={600}
                                fontFamily={theme.typography.secondFontFamily} variant={'h4'}>
                        Anas Aijaz
                    </Typography>

                        </Box>
                        <IconButton>
                            <FiHeart color={'black'} size={'24px'} onClick={()=> window.location = '#work'}/>
                        </IconButton>
                    </Box>

                    <Typography paragraph color={'textSecondary'} variant={'body2'} fontWeight={300}>
                        Passionate about startups
                    </Typography>
                    <Typography paragraph color={'textSecondary'} variant={'body2'}>
                        I am a second year under graduate a NIT K. Implementing complex workflows and designing beautiful UI for startups and companies.
                        Worked with companies like Titan and Aditya Birla Finance for building reliable products used by thousands of people around the country under the mentorship of CTO of Thought Sutra
                        Tries to find an elegant solution to the most difficult problems

                    </Typography>

                    <Typography align={'right'} paragraph  color={'textSecondary'} variant={'body2'}>
                        Always ready to expand my knowledge of tech stacks, quick and keen learner with solid understanding of web technologies such as React, Node Express, Rails and React native
                        I have over 2 years of expereince in web development along with designing
                    </Typography>
                </Grid>
            </Grid>

            <Box pt={5}>
            <Slider/>
            </Box>
        </Box>
    )
}

const PROJECTS = [
    {
        name: "Thought Sutra",
        title: "Six months",
        description: "Learnt new tools and skills under the guidance of Associate Team lead Nagarro Implementation of Input Sanitization, Builder pattern, Integration with S3 bucket, Payment gateway integration coupon management system, Google OAuth and various features such as forums, and admin panel. Redesigned LMS with Material UI principles and incorporating typescript in codebase Used p5.js to create animated self-growing tree with message adding feature. Used Mongo DB aggregation framework and created an OTP authentication system. Deployed to AWS EC2",
        image: thoughtsutra,
        super: "Created using React JS",
        sub: "Designed using figma"
    },
    {
        name: "Titan",
        title: "8000+ Users worldwide",
        description: "Built Tested and Deployed a highly reliable social media with OTP authentication used by titan employees on Christmas, loved by thousands of users and got the project extended for several months. Intelligently designed db schema and load balancers to handle request loads and concurrency issues",
        image: titan,
        super: "Created using p5 JS",
        sub: "Designed using figma"
    },
    {
        name: "Vevesta",
        title: "Aesthetic and Useful",
        description:`Learnt new tools and skills and worked on diverse fields and features under the
        guidance of Amazon SDE II CTO
        Frontend (Vue) Landing page, Login/Sign up page, Solutions, Design changes,
    Integrating new features TipTap editor and building high-level custom features on
    top of it, implemented lazy loading, proposed and implemented a brand new
    design
    Tracking: Integrated mixpanel to track simple and complex activities of a user`,
        image: vevesta,
        super: "Created using Vue JS",
        sub: "Designed using figma"
    },
    {
        name: "Payatu",
        title: "Just Amazing",
        description: "-",
        image: payatu,
        super: "Created using Next JS",
        sub: "Designed using figma"
    },
    {
        name: "NITK Racing",
        title: "Brought Sponsors",
        description: "Designed and Developed using react js and anime.js, The new design of NIT K racing changed the way sponsors looked at NITK racing team",
        image: racing,
        super: "Created using React JS",
        sub: "Designed using figma"
    }]

const Projects = () => {
    const theme = useTheme()
    const classes = useStyles()
    const [active, setActive] = useState(0)
    const activeProject = PROJECTS[active]
    return (
        <Box className={classes.section} minHeight={"100vh"} id={'projects'} sx={{
            px:{xs: 0,
                md:theme.gutter.appbar
            }
        }} py={theme.gutter.section}>
            <Box className={classes.overflowX} px={2} py={2} mb={5}>

                {PROJECTS.map((project, index)=> (<span onClick={() => setActive(index)} className={clsx({
                    [classes.project]: true,
                    [classes.active]: active === index
                })}>{project.name}</span>))}
            </Box>
            <Box position={'relative'} textAlign={'center'}
                 sx={{
                     width: {xs:'100%', md: '60%'}
                 }}
                  mx={'auto'}>
                <img className={classes.image} src={activeProject.image}/>
                <Box sx={{
                    display: {xs: 'none', md: 'block'}
                }} textAlign={'left'} className={classes.photoTitle}>
                <Typography letterSpacing={1} variant={'body2'} fontSize={'10px'}>
                    {activeProject.sub}
                </Typography>
                    <Typography color={'textSecondary'} variant={'subtitle2'}>
                        {activeProject.super}
                    </Typography>
                </Box>

                <Typography sx={{
                    display: {xs: 'none', md: 'block'}
                }} fontFamily={theme.typography.secondFontFamily}  className={classes.title}
                            align={"left"} variant={"h1"} marginTop={3}>
                    {activeProject.name}
                </Typography>
             <Typography gutterBottom align={"left"} variant={"h5"} marginTop={3}>
                 {activeProject.title}
             </Typography>
                <Typography align={"left"} variant={"subtitle2"} color={'textSecondary'}>
                    {activeProject.description}
                </Typography>
            </Box>
        </Box>
    )
}

const Education = () => {
    const theme = useTheme()
    const classes = useStyles()

    return (
        <Box className={classes.section} minHeight={"100vh"} id={'education'} textAlign={'center'} py={theme.gutter.section}>
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
                        name={'Payatu'}
                        duration={'6 months'}
                        src={'https://payatu.com/static/media/Payatu_logo.png'}/>
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
            <img width={'60px'} src={src} alt={'work'}/>
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
    const classes = useStyles()
    const [state, handleSubmit] = useForm('xoqrykpl');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        description: ''
    })

    const [isFormValid, errors] = useContact({fields: formData, types: ['first_name', 'last_name', 'phone', 'description']})

    const handleFirstName = (e) => {
        setFormData(prev=> ({...prev, firstName: e.target.value}))
    }
    const handleLastName = (e) => {
        setFormData(prev=> ({...prev, lastName: e.target.value}))
    }

    const handlePhone = (e) => {
        setFormData(prev=> ({...prev, phone: e.target.value}))
    }
    const handleDescription = (e) => {
        setFormData(prev=> ({...prev, description: e.target.value}))
    }

    if(state.succeeded)
        return <Box className={classes.section} width={'60%'} mx={'auto'} id={'work'} py={theme.gutter.section}
                    sx={{
                        px: {xs:0, md: theme.gutter.appbar}
                    }}> <Typography align={'center'}>
            Thanks for reaching out to me! I will get back to you ASAP
        </Typography></Box>

    return (<Box id={'work'} py={theme.gutter.section} sx={{
        px: {xs:0, md: theme.gutter.appbar}
    }}>
        <Box onSubmit={handleSubmit} component={'form'}   sx={{
            width: {xs:'100%', md: '60%'}
        }} mx={'auto'}>
        <Typography fontFamily={theme.typography.secondFontFamily} variant={'h4'}>
            Contact me
        </Typography>
        <Typography paragraph variant={'body2'} color={'textSecondary'}>
            Fill up the form below and I will get to you ASAP
        </Typography>

<Box display={'flex'} gap={1}>
        <TextField value={formData.firstName} onChange={handleFirstName} name={'first_name'} style={{flexGrow: 1}} label={'First name'} size={'small'} variant={'outlined'}/>
        <TextField value={formData.lastName} onChange={handleLastName} name={'second_name'} style={{flexGrow: 1}} label={'Last name'} size={'small'} variant={'outlined'}/>
</Box>
        <TextField value={formData.phone} onChange={handlePhone} type={'tel'} name={'contact'} style={{marginTop: 8}} fullWidth label={'Contact'} size={'small'} variant={'outlined'}/>
        <TextField value={formData.description} onChange={handleDescription} name={'description'} style={{marginTop: 8}} rows={8} fullWidth={true} label={'Description'} multiline={true} size={'small'} variant={'outlined'}/>
        <Box textAlign={'right'} mt={1}>
            <Button disabled={state.submitting || !isFormValid} type={'submit'}  variant={'contained'}>
                Mail
            </Button>
        </Box>
            {!isFormValid && errors.map(error=> <Typography color={red.A400} variant={'subtitle2'}> {error} </Typography>)}

        </Box>
    </Box>)
}


const Footer = () => {
    const theme = useTheme()

    return <Box  my={theme.gutter.section} py={2} px={theme.gutter.appbar}>
        <Typography align={'center'} variant={'body2'}>
            Made with lot's of effort and ❤️
        </Typography>
    </Box>
}


export default Current;
