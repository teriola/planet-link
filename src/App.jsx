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

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          {/* <Route element={<PrivateRoutes />}> */}
          <Route path="/" element={<Home />} exact />
          <Route path="/profile/:id/posts" element={<Profile />} />
          <Route path="/profile/:id/about" element={<Profile />} />
          <Route path="/profile/:id/friends" element={<Profile />} />
          <Route path="/profile/:id/photos" element={<Profile />} />
          <Route path="/bookmarks" element={<BookmarkedPosts />} />
          <Route path="/settings" element={<Settings />} />
          {/* </Route> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </AuthProvider >
  );
}
