import Card from "../../components/Card";
import Header from "../../components/header/header";
import HeaderTable from "../../components/headerTable";
import Wrapper from "../../components/wrapper";

export default function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <HeaderTable />
        <Card />
      </Wrapper>
    </>
  );
}
