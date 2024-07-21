import { Routes, Route, useLocation } from "react-router-dom";
import { HomeScreen } from "src/components/Screens/HomeScreen";
import { InquireScreen } from "src/components/Screens/InquireScreen";

export const RouteList = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomeScreen />}/>
      <Route path="/Inquire" element={<InquireScreen />}/>
    </Routes>
  )
}
