import React, {useEffect, useState} from 'react';
import {AppBar, Box, Slide, Toolbar, Typography, useScrollTrigger, useTheme} from "@mui/material";
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai";
import {CSSTransition} from "react-transition-group";
import classes from "./Appbar.module.css"

const Appbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.pageYOffset > 100);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <AppBar elevation={0} position={'fixed'}>
            <Toolbar disableGutters={true}>
                <Title setScrolled={setScrolled} scrolled={scrolled} flexGrow={1}/>
                <Box gap={2} sx={{
                    display: {xs: 'flex'},
                    justifyContent: {xs: 'center'},
                    flexGrow: {xs:1, md: 0}
                }}>
                    <a target='_blank' href="https://github.com/anasaijaz">
                        <AiFillGithub size={'32px'}/>
                    </a>
                    <a target='_blank' href="https://twitter.com/anaz_zzz">
                       <AiFillTwitterCircle size={'32px'}/>
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/in/anas-aijaz-98a2a41bb/">
                       <AiFillLinkedin size={'32px'}/>
                    </a>
                </Box>
            </Toolbar>
        </AppBar>
    );
};


const Title = ({setScrolled ,scrolled ,...props}) => {

    return <Box  sx={{
        display: {
            xs: "none",
            md: "flex"
        }
    }} {...props} display={'flex'}  gap={2}>

        <Box position={'relative'}>
        <Typography color={'textPrimary'} fontWeight={800} variant={'h3'}>
            Web
        </Typography>
            <CSSTransition unmountOnExit mountOnEnter timeout={500} in={!scrolled}  classNames={"appear"}>

            <Typography position={'absolute'} fontWeight={500} color={'textSecondary'} variant={'body1'}>
                Designer
            </Typography>
            </CSSTransition>

        </Box>
        <Box position={'relative'} >
            <CSSTransition unmountOnExit mountOnEnter timeout={500} in={!scrolled}  classNames={"appear"}>
                <Typography position={'absolute'} fontWeight={500} color={'textSecondary'} variant={'body1'}>
                    Open Source
                </Typography>
            </CSSTransition>
        <Typography color={'textPrimary'} className={classes.span} paddingTop={scrolled ? 0 : 2.5 } fontWeight={800} variant={'h3'}>
            Developer
        </Typography>
        </Box>

    </Box>
}
export default Appbar;
