import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const Store = createContext([]);

export default function StoreCoins({ children }) {
  const [coins, setCoins] = useState([]);
  const [vault, setVault] = useState([]);

  const INITIAL_STATE = {
    coins,
    setCoins,
    vault,
    setVault,
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
