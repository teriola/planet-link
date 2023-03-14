import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import NavigationCard from "./components/NavigationCard";

export default function App() {
  return (
    <>
      <div className="flex mt-4 max-w-4xl mx-auto gap-6">
        <div className="w-3/12">
          <NavigationCard />
        </div>
        <div className="w-9/12">
          <Routes>
            <Route path="/" element={<Home />} />
            // <Route path="/profile" element={<Profile />} />
            <Route path="/profile/posts" element={<Profile />} />
            <Route path="/profile/about" element={<Profile />} />
            <Route path="/profile/friends" element={<Profile />} />
            <Route path="/profile/photos" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
