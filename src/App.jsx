import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import BookmarkedPosts from "./pages/Saved/BookmarkedPosts";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import NavigationCard from "./components/NavigationCard";

export default function App() {
  const path = useLocation().pathname;

  const hideNavigation = () => {
    return path.includes('login') || path.includes('register')
  };

  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      {!hideNavigation() && (
        <div className="w-3/12">
          <NavigationCard />
        </div>
      )}
      <div className={hideNavigation() ? 'w-full' : 'w-9/12'}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/posts" element={<Profile />} />
          <Route path="/profile/about" element={<Profile />} />
          <Route path="/profile/friends" element={<Profile />} />
          <Route path="/profile/photos" element={<Profile />} />
          <Route path="/bookmarks" element={<BookmarkedPosts />} />
          {/* not auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </div>
    </div>
  );
}
