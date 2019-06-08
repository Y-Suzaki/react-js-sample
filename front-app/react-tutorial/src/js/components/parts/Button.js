import React from "react";
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        margin: "2px"
    }
});

export default function CustomButton(props) {
    const classes = useStyles();
    const title = props.title;
    return <Button className={classes.root} variant="contained" color="primary">{title}</Button>;
}