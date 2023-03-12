import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/pages/ProfilePage";
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
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/posts" element={<ProfilePage />} />
            <Route path="/profile/about" element={<ProfilePage />} />
            <Route path="/profile/friends" element={<ProfilePage />} />
            <Route path="/profile/photos" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
