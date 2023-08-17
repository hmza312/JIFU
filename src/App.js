import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "pages/Dashboard";
import Layout from "Layout";
import University from "pages/University";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/university" element={<University />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
