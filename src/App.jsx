import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Profile from "./pages/Profile";
import Bookmarks from "./pages/Bookmarks";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout/MainLayout";
import Settings from "./pages/Settings";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoutes from "./utils/PrivateRoute";
import Logout from "./pages/Logout";
import Posts from "./components/Posts/Posts";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import Photos from "./components/Photos/Photos";
import { ThemeProvider } from "./contexts/ThemeContext";
import { PostsProvider } from "./contexts/PostsContext";
import { LoadingProvider } from "./contexts/LoadingContext";

export default function App() {
  return (
    <LoadingProvider>
      <AuthProvider>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route path="/" element={
                <PostsProvider>
                  <Home />
                </PostsProvider>
              } />
              <Route path="/profile/:id" element={<Profile />}>
                <Route path="posts" element={<Posts />} />
                <Route path="about" element={<About />} />
                <Route path="friends" element={<Friends />} />
                <Route path="photos" element={<Photos />} />
              </Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/:id/bookmarks" element={<Bookmarks />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/logout" element={<Logout />} exact />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </AuthProvider >
    </LoadingProvider>
  );
}
