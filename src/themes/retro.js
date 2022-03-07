import { createTheme } from '@mui/material/styles';

export default createTheme({
    components:{
        MuiAppBar: {
            styleOverrides: {
                root: {
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor:"white",
                    color:"black",
                    padding: "24px 48px"
                }
            }
        },
        MuiTypography: {
          styleOverrides: {
              root: {
                  fontWeight: 300
              }
          }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow:"none",
                    borderRadius: "0px",
                    textTransform: "unset",
                    "&:hover": {
                        boxShadow:"none",
                        textDecoration:"underline"
                    }
                }
            }
        }
    },
    typography:{
        fontFamily:"'Poppins', sans-serif",
        secondFontFamily: "'Bodoni Moda', serif",
        fontSize:14
    },
    gutter:{
        appbar: '48px',
    }
});

