import { Routes, Route, useLocation } from "react-router-dom";
import { HomeScreen } from "src/components/Screens/HomeScreen";


export const RouteList = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomeScreen />}/>
    </Routes>
  )
}
