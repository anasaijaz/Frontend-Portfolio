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
        MuiTextField: {
            styleOverrides: {
                root: {
                    "label.Mui-focused": {
                        backgroundColor: 'white !important'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    border: '1px solid black',
                    borderRadius: 0,

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
    },
    palette: {
      primary: {
          main: '#00c853'
      }
    },
    gutter:{
        appbar: '48px',
        section: '32px'
    }
});

