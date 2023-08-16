import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "pages/Dashboard";
import Layout from "Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
