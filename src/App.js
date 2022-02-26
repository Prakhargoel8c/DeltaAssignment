import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import TeamMembers from './components/TeamMembers';
import SignUp from './components/SignUp';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/signup"
            element={
              <NotLoggedInPaths>
                <SignUp />
              </NotLoggedInPaths>
            }
          />
          <Route
            path="/login"
            element={
              <NotLoggedInPaths>
                <Login />
              </NotLoggedInPaths>
            }
          />
          <Route
            path="/"
            element={
              <RequireAuth>
                <TeamMembers />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
const RequireAuth = ({ children }) => {
  let location = useLocation();
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

const NotLoggedInPaths = ({ children }) => {
  let location = useLocation();
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  if (currentUser) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default App;
