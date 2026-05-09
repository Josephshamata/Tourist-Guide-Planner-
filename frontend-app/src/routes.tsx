import { Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./Views/components/auth/ProtectedRoute";
import Step1 from "./Views/pages/Step1";
import Step2 from "./Views/pages/Step2";
import Step3 from "./Views/pages/Step3";
import Step4 from "./Views/pages/Step4";
import Step5 from "./Views/pages/Step5";
import Step6 from "./Views/pages/Step6";

import { HomePage } from "./Views/pages/HomePage";
import { MainLayout } from "./Views/layouts/MainLayout";

import ErrorPage from "./Views/pages/ErrorPage";

import SignupPage from "./Views/pages/SignupPage";
import LoginPage from "./Views/pages/LoginPage";
import BudgetManagementPage from "./Views/pages/BudgetManagementPage";
import ItineraryDayPage from "./Views/pages/ItineraryDayPage";
import MyTripPage from "./Views/pages/MyTripPage";
import ExperiencesPage from "./Views/pages/ExperiencesPage";

import { ItineraryPdfPreview } from "./Views/components/pdf/ItineraryPdfPreview";

import ItineraryPage from "./Views/pages/ItineraryPage";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/error" element={<ErrorPage />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          
          <Route
            path="/experiences/:slug/day/:dayNumber"
            element={<ItineraryDayPage />}
          />
          <Route path="/my-trip" element={<MyTripPage />} />
          <Route path="/budget" element={<BudgetManagementPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/experiences/:slug" element={<ItineraryPage />} />
          
        </Route>

        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step5" element={<Step5 />} />
        <Route path="/step6" element={<Step6 />} />
      </Route>
      <Route path="/pdf" element={<ItineraryPdfPreview />} />
      
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>
  );
}
