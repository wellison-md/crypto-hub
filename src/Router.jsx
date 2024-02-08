import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import NotFound from "./pages/notfound";
import CoinDetails from "./pages/details/coinDetails";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/coins/details/:id" element={ <CoinDetails /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}
