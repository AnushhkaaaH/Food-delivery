import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import Home from "../pages/Home/Home";
import Section2 from "../pages/Home/Section2";

const Router = () => {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<Section2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default Router