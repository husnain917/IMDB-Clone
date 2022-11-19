import { Box, Container, Grid, Typography, Paper } from '@material-ui/core'
import React from 'react'
import { useStyles } from "./GenreListStyle";

export default function GenreList() {
    const Styles = useStyles();
    return (
        <>
            <Container>
                <Grid container justifyContent={'center'}>
                    <Grid xs={12} sm={12} md={10} lg={9} className={Styles.mainContainer}>
                        <img src={require('../../assets/images/backImg.jpg')} alt="Image Not Found" height={'270px'} width={'100%'} />
                        <Grid container>
                            {/* ist content */}
                            <Grid item xs={12} sm={12} md={8} lg={8}>
                                <Typography variant='h5' className={Styles.istHeading}>
                                    Popular TV Show and Movie Genres
                                </Typography>
                                <Grid container>
                                    <Grid xs={12} sm={12} md={6} lg={4}>
                                        <Box className={Styles.cardDiv}>
                                            <img src={require('../../assets/images/smallCardImg1.jpg')} alt="Image Not found" height={'120px'} width={'100%'} />
                                        </Box>
                                    </Grid>
                                    <Grid xs={12} sm={12} md={6} lg={4}>
                                        <Box className={Styles.cardDiv}>
                                            <img src={require('../../assets/images/smallCardImg2.jpg')} alt="Image Not found" height={'120px'} width={'100%'} />
                                        </Box>
                                    </Grid>
                                    <Grid xs={12} sm={12} md={6} lg={4}>
                                        <Box className={Styles.cardDiv}>
                                            <img src={require('../../assets/images/smallCardImg3.jpg')} alt="Image Not found" height={'120px'} width={'100%'} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* second content */}
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Box className={Styles.secondContentDiv}>
                                    <img src={require('../../assets/images/cardImg.jpg')} alt="Image Not Found" height={'300px'} width={'100%'} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
