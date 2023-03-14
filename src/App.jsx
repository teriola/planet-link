import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Layout from "./components/Layout";

export default function App() {
{/* 
const isAuth = true;

props for Layout component:
hideNavigation={!isAuth}
*/}

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/posts" element={<Profile />} />
        <Route path="/profile/about" element={<Profile />} />
        <Route path="/profile/friends" element={<Profile />} />
        <Route path="/profile/photos" element={<Profile />} />

        {/* not auth 
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        */}
      </Routes>
    </Layout>
  );
}
