import React from 'react';
import {AppBar, Box, Slide, Toolbar, Typography, useScrollTrigger, useTheme} from "@mui/material";
import {orange} from "@mui/material/colors";

const Appbar = () => {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        target: window,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
        <AppBar elevation={0} position={'sticky'}>
            <Toolbar disableGutters={true}>
                <Typography flexGrow={1} fontFamily={theme.typography.secondFontFamily} variant={'h5'}>
                    Web developer
                </Typography>
                <Box sx={{
                    display: {xs: 'none', md: 'flex'}
                }}>
                    <a href={'#education'}>
                    <Typography paddingRight={4} variant={'body2'}>
                        Education
                    </Typography>
                    </a>
                    <a href={'#projects'}>
                    <Typography paddingRight={4} variant={'body2'}>
                        Projects
                    </Typography>
                    </a>
                    <a href={'#work'}>
                    <Typography variant={'body2'}>
                        Work
                    </Typography>
                    </a>
                </Box>
            </Toolbar>
        </AppBar>
        </Slide>
    );
};

export default Appbar;
