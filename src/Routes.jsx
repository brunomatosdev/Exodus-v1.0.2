import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Downloadpage = React.lazy(() => import("pages/Downloadpage"));
const Userprofile = React.lazy(() => import("pages/Userprofile/index"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/downloadpage" element={<Downloadpage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
