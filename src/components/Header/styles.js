import { alpha } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { createTheme} from '@mui/material/styles';

const theme = createTheme();


export default makeStyles(()=>({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        
        
    },
    searchIcon: {
        padding: theme.spacing(0,2), 
        height: '100%', 
        position: 'absolute', 
        pointerEvents: 'none', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        
    },
        inputBox:{
            color: 'inherit',  
            '& .MuiInputBase-input': {
                color:'white',
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create('width'),
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                    width: '20ch',
                    '&:focus': {
                        width: '20ch',
                    },
                },
            },
        },
    toolbar: {
        display: 'flex', 
        justifyContent: 'space-between',
    },

}))

