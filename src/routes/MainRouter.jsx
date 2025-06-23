import { Route, Routes } from "react-router";

import ROUTES from "./routes";

// Import Pages
import Home from "../pages/Home";

const MainRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />}/>
      <Route path={ROUTES.FRONT_END} />
      <Route path={ROUTES.PROJECTS} />
      <Route path={ROUTES.CONTACT} />
    </Routes>
  );
};

export default MainRouter;