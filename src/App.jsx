import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/privacy"
        element={
          <PrivacyPolicy />
        }
      />

      <Route
        path="/terms"
        element={<Terms />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

    </Routes>
  );
}

export default App;