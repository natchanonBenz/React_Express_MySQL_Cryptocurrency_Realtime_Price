import React, { useReducer } from 'react'
import './App.css';
import NavBar from './component/NavBar';
import Jumbotron from './component/Jumbotron';
import ArticleCrypto from './component/ArticleCrypto';
import Footer from './component/Footer';
import ArticleTransasction from './component/ArticleTransasction';

export const ScreenNameContext = React.createContext();

const initialScreen = 1;
//--Action--//
const reducerScreen = (state, action) => {
  switch (action) {
    case 'Crypto':
      return state = 1
    default:
      return 0
  }
}

function App() {
  //--Reducer--//
  const [Screen, dispatch] = useReducer(reducerScreen, initialScreen)

  const tempName = 'THB_XXX'
  const tempprice = '0 $'


  return (
    <div className="App">
      <ScreenNameContext.Provider value={{ dataState: Screen, dataDispatch: dispatch }}>
        <NavBar ScreenName={Screen} />
      </ScreenNameContext.Provider>
      <Jumbotron />
      <ArticleCrypto ScreenName={Screen} CoinName={tempName} CoinPrice={tempprice} />
      <ArticleTransasction ScreenName={Screen} />
      <Footer />
    </div>
  );
}

export default App;
