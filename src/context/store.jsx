import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const Store = createContext([]);

export function StoreCoins({ children }) {
  const [coins, setCoins] = useState([]);

  const INITIAL_STATE = {
    coins,
    setCoins,
  }

  return(
    <Store.Provider value={ INITIAL_STATE }>
      { children }
    </Store.Provider>
  )
}

StoreCoins.propTypes = {
  children: PropTypes.node.isRequired,
}
