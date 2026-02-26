<<<<<<< HEAD
import { Navigate, Route, Routes } from "react-router-dom";

=======
import { Routes, Route, Navigate } from "react-router-dom";
>>>>>>> 05c7d0a31ea85a4ce4cbb5b67eaaf2b026850d84
import Step1 from "./Views/pages/Step1";
import Step2 from "./Views/pages/Step2";
import Step3 from "./Views/pages/Step3";
import Step4 from "./Views/pages/Step4";
<<<<<<< HEAD
import { MainLayout } from "./Views/layouts/MainLayout";
import { HomePage } from "./Views/pages/HomePage";


export default function AppRoutes(){
    return(
            <Routes>
=======
import ItineraryLanding from "./Views/pages/ItineraryLanding";

export default function AppRoutes(){
    return (
          <Routes>
>>>>>>> 05c7d0a31ea85a4ce4cbb5b67eaaf2b026850d84
      <Route path="/" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
      <Route path="/step3" element={<Step3 />} />
      <Route path="/step4" element={<Step4 />} />
<<<<<<< HEAD
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/Home" element={<MainLayout><HomePage/></MainLayout>} />
    </Routes>
    )
=======
      <Route path="/Itineray" element={<ItineraryLanding />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    );
>>>>>>> 05c7d0a31ea85a4ce4cbb5b67eaaf2b026850d84
}