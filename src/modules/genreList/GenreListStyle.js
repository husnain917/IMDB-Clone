import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    mainContainer: {
        backgroundColor: '#fff',
        padding: '0px 20px',
    },
    istHeading: {
        padding: '15px 0px 10px 0px'
    },
    secondContentDiv: {
        backgroundColor: '#e9ecef',
        padding: '30px 10px',
        height: 300,
        borderLeft: '3px solid #adb5bd',
        borderTop: 'none',
        borderRight: 'none',
        borderBottom: 'none',
        display: 'block',
        marginLeft:'10px',
        "@media (max-width: 768px)": {
            display: 'none',
        },

        "@media (max-width: 600px)": {
            display: 'none',
        }
    },
    cardDiv : {
        padding:'0px 10px 0px 0px'
    }
}))