import { Navigate, Route, Routes } from "react-router-dom";

import Step1 from "./Views/pages/Step1";
import Step2 from "./Views/pages/Step2";
import Step3 from "./Views/pages/Step3";
import Step4 from "./Views/pages/Step4";

import { HomePage } from "./Views/pages/HomePage";
import { MainLayout } from "./Views/layouts/MainLayout";
import { ItineraryLanding } from "./Views/pages/ItineraryLanding";

import SignupPage from "./Views/pages/SignupPage";
import LoginPage from "./Views/pages/LoginPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/itinerary" element={<ItineraryLanding />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Steps without layout */}

      <Route path="/step1" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
      <Route path="/step3" element={<Step3 />} />
      <Route path="/step4" element={<Step4 />} />

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
