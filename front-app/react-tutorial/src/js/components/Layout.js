import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Contents from "./Contents"
import Menu from "./Menu"
import {Grid} from "@material-ui/core"

// Need to add export default because of reference from other file.
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {name: "Login: Guest"}
    }

    render() {
        let userName = "y-suzaki";
        setTimeout(
            () => { this.setState({name: "Login: ys"}); }, 2000
        );

        return (
            <Grid container spaacing={16} >
                <Grid container>
                    <Grid item>
                        <Header/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={1}>
                        <Menu/>
                    </Grid>
                    <Grid item>
                        <Contents/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4}>
                        <Footer/>
                    </Grid>
                </Grid>
            </Grid>
            // <div>
            //     <Header/>
            //     <h2>{this.state.name}</h2>
            //     <Contents/>
            //     <div>{this.get_now()}</div>
            //     <Footer/>
            // </div>
        );
    }

    get_now() {
        return "2019-06-01"
    }
}