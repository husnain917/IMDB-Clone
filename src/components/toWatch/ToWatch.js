
import { Button } from '@material-ui/core';
import React, { useRef } from 'react'
import Swiper from './swiper/Swiper';
import bookIcon from "../../assets/images/bookIcon.svg";
import ArrowNextIcon from '@material-ui/icons/NavigateNext';


import { useStyles } from './ToWatchStyle';
import BookMarkButton from '../../common/BookMarkButton/BookMarkButton';

export default function ToWatch(props) {
  const { topPickMovies, fanFavoritesMovies } = props;
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1 className={classes.h1} >What to watch</h1>
      <div className={classes.swiperContainer}>
        <div className={classes.topPicks}>
          <div className={classes.line} />
          <h1 className={classes.h3}>{'Top picks'}</h1>
          <ArrowNextIcon className={classes.nextIcon} />
        </div>
        <p className={classes.topPicksText}>{'TV shows and movies just for you'}</p>
        <Swiper isSwiper info_btn movies={topPickMovies} />
      </div>

      <div className={classes.topSpace} />

      <div className={classes.swiperContainer}>

        <div className={classes.topPicks}>
          <div className={classes.line} />
          <h1 className={classes.h3}>{'From your Watchlist'}</h1>
          <ArrowNextIcon className={classes.nextIcon} />
        </div>

        {
          true ?
            <div className={classes.contentContainer}>
              <BookMarkButton />
              <span className={classes.contentHeading}>
                Sign in to access your Watchlist
              </span>
              <br />
              <span className={classes.contentDes}>
                Save shows and movies to keep track of what you want to watch.
              </span>
              {/* Sign in Button */}
              <div className={classes.signInButtonDiv}>
                <Button variant="contained" size="medium" className={classes.signInButton}>
                  Sign in to IMDb
                </Button>
              </div>
            </div>
            :
            <>
              <p className={classes.topPicksText}>{'Movies and TV shows that you have watchlisted'}</p>
              <Swiper isSwiper info_btn={false} />
            </>
        }
      </div>


      <div className={classes.topSpace} />

      <div className={classes.swiperContainer}>

        <div className={classes.topPicks}>
          <div className={classes.line} />
          <h1 className={classes.h3}>{'Fan favorites'}</h1>
          <ArrowNextIcon className={classes.nextIcon} />
        </div>
        <p className={classes.topPicksText}>{"This week's top TV and movies"}</p>

        <Swiper isSwiper info_btn={false} movies={fanFavoritesMovies} />
      </div>

      <div className={classes.swiperContainer}>
        <div className={classes.topSpacePadding} />
        <div className={classes.topPicks}>
          <div className={classes.line} />
          <h1 className={classes.h3}>{'More to watch'}</h1>
          <ArrowNextIcon className={classes.nextIcon} />
        </div>
        <p className={classes.topPicksText}>{'IMDb helps you select the perfect next show or movie to watch.'}</p>
        <Swiper isSwiper={false} info_btn={false} />
      </div>
      <div className={classes.topSpace} />


    </div>
  )
}
