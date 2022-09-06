import { Box, Paper, Button, Container, Grid } from '@material-ui/core';
import React from 'react'
import { useStyles } from "./CreateAccountStyle";

export default function CreateAccount() {
    const Styles = useStyles();
    return (
        <>
            <Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div className={Styles.imgContainer}>
                            <img src={require('../../assets/images/imdbLogo.png')} alt="Image Not Found" className={Styles.img} />
                        </div>

                        <Paper component={Box} className={Styles.cardDiv}>
                            <p className={Styles.heading}>Create Account</p>

                            <form action="">
                                <label className={Styles.labelTxt}>Your Name</label> <br />
                                <input type={'text'} placeholder='First and Last name' className={Styles.inputsFields} />

                                <label className={Styles.labelTxt}>Email</label> <br />
                                <input type={'email'} className={Styles.inputsFields} />

                                <label className={Styles.labelTxt}>Password</label> <br />
                                <input type={'password'} placeholder='at least 8 characters' className={Styles.passwordField} />
                                <span className={Styles.passwordTxt}>Password must be at least 8 characters.</span> <br /> <br />

                                <label className={Styles.labelTxt}>Re-enter password</label> <br />
                                <input type={'password'} className={Styles.inputsFields} />

                                <div className={Styles.btnDiv}>
                                    <Button variant='contained' className={Styles.btnCreateAccount}>Create your IMDb account</Button>
                                </div>
                            </form>

                            <p className={Styles.desTxt}>
                                Already have an account?<span className={Styles.signInTxt}>Sign in</span>
                            </p>
                        </Paper>

                        <div className={Styles.lastContainer}>
                            <p>
                                <span className={Styles.lastContainerTxt}>Help</span>
                                <span className={Styles.lastContainerTxt}>Conditions of Use</span>
                                <span className={Styles.lastContainerTxt}>Privacy Notice</span>
                            </p>
                            <p className={Styles.lastContainerDes}>
                                &copy;1996-2022,Amazon.com, Inc. or its affiliates
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}