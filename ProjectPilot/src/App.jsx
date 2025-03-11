import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Layout,
  ProductBacklog,
  Dashboard,
  SprintBacklog,
  ScrumMeetings,
  TestingBugs,
  Deployment,
  TeamManagement,
} from "./utils";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product-backlog" element={<ProductBacklog />} />
          <Route path="sprint-backlog" element={<SprintBacklog />} />
          <Route path="scrum-meetings" element={<ScrumMeetings />} />
          <Route path="testing-bugs" element={<TestingBugs />} />
          <Route path="deployment" element={<Deployment />} />
          <Route path="team-management" element={<TeamManagement />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
