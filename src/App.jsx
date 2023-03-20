import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import BookmarkedPosts from "./pages/Bookmarks/BookmarkedPosts";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Layout from "./components/Layout";
import Settings from "./pages/Settings/Settings";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoutes from "./utils/PrivateRoute";
import Logout from "./pages/Auth/Logout";
import Posts from "./pages/Profile/tabs/Posts";
import About from "./pages/Profile/tabs/About";
import Friends from "./pages/Profile/tabs/Friends";
import Photos from "./pages/Profile/tabs/Photos";

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route element={<PrivateRoutes />}>
            <Route path="/profile/:id" element={<Profile />}>
              <Route path="posts" element={<Posts />} />
              <Route path="about" element={<About />} />
              <Route path="friends" element={<Friends />} />
              <Route path="photos" element={<Photos />} />
            </Route>
            <Route path="/bookmarks" element={<BookmarkedPosts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} exact />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </AuthProvider >
  );
}
