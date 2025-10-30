import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SiteNotice from './pages/SiteNotice';

function Footer() {
  const location = useLocation();
  const isSiteNotice = location.pathname === '/site-notice';

  return (
    <footer className="mt-10 py-6 border-t border-gray-700">
      <div className="text-center text-sm text-gray-400 space-y-2">
        {!isSiteNotice && (
          <div>
            <Link to="/site-notice">Site Notice</Link>
          </div>
        )}
        <div>© 2025 Manuel-Hubertus Fay</div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/site-notice"
              element={<SiteNotice />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
