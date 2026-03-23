import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
      <h1>Welcome to Home Page</h1>
      <Outlet />
    </>
  
  );
}

export default App;