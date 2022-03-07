import React from 'react';
import {Box, Slide, useTheme} from "@mui/material";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {makeStyles} from "@mui/styles";

const POTRAITS = [
    {
        id: 1,
        src: "https://shotkit.com/wp-content/uploads/2021/06/Famous-portrait-DT1502_cropped2.jpeg"
    },
    {
        id: 2,
        src: "https://live.staticflickr.com/780/22411236818_1cf8966457_b.jpg"
    },
    {
        id: 3,
        src: "https://static.boredpanda.com/blog/wp-content/uploads/2014/12/Top-10-photographers-for-travel-portraits27__700.jpg"
    },
    {
        id: 4,
        src: "https://www.themost10.com/wp-content/uploads/Audrey-Hepburn-1.jpg"
    },
    {
        id: 5,
        src: "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2021/03/2-25.jpg?iv=355"
    },
    {
        id: 6,
        src: "https://i.postimg.cc/nrjsbsPx/Image-2.jpg"
    },
    {
        id: 7,
        src: "https://farm6.staticflickr.com/5472/10323941034_b54ce89e7b_b.jpg"
    },
    {
        id: 8,
        src: "https://learnodo-newtonic.com/wp-content/uploads/2017/09/Portrait-of-Madame-X-1884-John-Singer-Sargent.jpg"
    }
]

const useStyles = makeStyles(theme=> ({
    portraitImage: {
        filter: "grayscale(100)"
    }
}))

const Slider = () => {
    const theme = useTheme();
    return (
        <Box >
            <Splide options={{
                arrows: false,
                fixedWidth: '150px',
                gap: '30px',
                autoplay: true,
                type: 'loop',
                interval: 2000,
                pagination: false
            }}>
                {POTRAITS.map(Potrait=> <PotraitSlide  key={Potrait.id}  src={Potrait.src}/>)}
            </Splide>
        </Box>
    );
};


const PotraitSlide = ({src}) => {
    const classes = useStyles()
    return (
        <SplideSlide>
            <img className={classes.portraitImage} width={"150px"} src={src} alt="Portrait"/>
        </SplideSlide>
    )
}

export default Slider;
