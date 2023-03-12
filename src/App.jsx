import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/HomePage";
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
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
