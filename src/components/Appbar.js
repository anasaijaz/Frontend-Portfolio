import React from 'react';
import {AppBar, Box, Slide, Toolbar, Typography, useScrollTrigger, useTheme} from "@mui/material";

const Appbar = () => {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        target: window,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
        <AppBar elevation={0} color={'transparent'} position={'sticky'}>
            <Toolbar>
                <Typography flexGrow={1} fontFamily={theme.typography.secondFontFamily} variant={'h5'}>
                    Web developer
                </Typography>
                <Box display={'flex'}>
                    <Typography paddingRight={4} variant={'body2'}>
                        Present
                    </Typography>
                    <Typography paddingRight={4} variant={'body2'}>
                        Projects
                    </Typography>
                    <Typography variant={'body2'}>
                        Work
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
        </Slide>
    );
};

export default Appbar;
