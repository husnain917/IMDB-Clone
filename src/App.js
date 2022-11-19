import { useEffect } from 'react';
import './App.css';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import Navigation from './navigation/Navigation';
import ScrollToTop from './navigation/ScrollToTop';
import { useDispatch } from 'react-redux';
import { getLoggedInUser } from './redux/actions/AuthAction';
import GenreList from './modules/genreList/GenreList';

function App() {
  const history = createBrowserHistory({ window });
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLoggedInUser())
  }, [])


  return (
    <div className="App" style={{ backgroundColor: '#000', paddingBottom: 10 }}>
      <HistoryRouter history={history}>
        <ScrollToTop />
        <Navigation />
      </HistoryRouter>
      {/* <GenreList /> */}
    </div>
  );
}

export default App;
