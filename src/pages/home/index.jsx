import { useContext, useEffect } from "react";
import { getFromStorage, saveOnStorage } from "../../utils/storage";
import { getEndpoint } from "../../utils/handleEnpoints";
import { Store } from "../../context/store";
import { trending } from "../../utils/handleData";

import Mapper from "../../components/Mapper";
import Header from "../../components/header/header";
import HeaderTable from "../../components/headerTable";
import Wrapper from "../../components/wrapper";
import Footer from "../../components/footer";

export default function Home() {
  const { coins, setVault, setCoins } = useContext(Store);

  useEffect(() => {
    (async () => {
      const db = getFromStorage('crypto-hub');

      if (db.length === 0) {
        const request = await fetch(getEndpoint());
        const response = await request.json();
        saveOnStorage('crypto-hub', response);
        setVault(response);
        return setCoins(trending(response, 'price_change_percentage_24h', 3));
      }

      setCoins(trending(db, 'price_change_percentage_24h', 3));
    })()

  }, [setCoins, setVault]);

  return (
    <>
      <Header />
      <Wrapper>
        <HeaderTable />
        <Mapper list={ coins }/>
      </Wrapper>
      <Footer />
    </>
  );
}
