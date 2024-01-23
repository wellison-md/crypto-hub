import { useEffect, useState } from "react";
import Mapper from "../../components/Mapper";
import Header from "../../components/header/header";
import HeaderTable from "../../components/headerTable";
import Wrapper from "../../components/wrapper";
import Footer from "../../components/footer";

export default function Home() {
  const [dt, setDt] = useState([]);

  useEffect(() => {
      const db = JSON.parse(localStorage.getItem('cw'));
      setDt(db)
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <HeaderTable />
        <Mapper list={ dt }/>
      </Wrapper>
      <Footer />
    </>
  );
}
