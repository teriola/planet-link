import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import BookmarkedPosts from "./pages/Bookmarks/BookmarkedPosts";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Layout from "./components/Layout";
import { useTheme } from "./hooks/useTheme";
import Settings from "./pages/Settings/Settings";
import { ThemeContext } from "./contexts/ThemeContext";

export default function App() {
  const [theme, themeToggleHandler] = useTheme('dark');

  const contextValue = {
    theme,
    themeToggleHandler
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/posts" element={<Profile />} />
          <Route path="/profile/about" element={<Profile />} />
          <Route path="/profile/friends" element={<Profile />} />
          <Route path="/profile/photos" element={<Profile />} />
          <Route path="/bookmarks" element={<BookmarkedPosts />} />
          <Route path="/settings" element={<Settings />} />
          {/* not auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </ThemeContext.Provider>
  );
}
