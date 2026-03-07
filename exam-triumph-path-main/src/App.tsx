import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import AboutExam from "./pages/AboutExam";
import Facilities from "./pages/Facilities";
import Results from "./pages/Results";
import StudentLogin from "./pages/StudentLogin";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import JEEAdvanced from "./pages/courses/JEEAdvanced";
import JEEMains from "./pages/courses/JEEMains";
import NEET from "./pages/courses/NEET";
import MHTCET from "./pages/courses/MHTCET";
import Foundation from "./pages/courses/Foundation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about-exam" element={<AboutExam />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/results" element={<Results />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/courses/jee-advanced" element={<JEEAdvanced />} />
            <Route path="/courses/jee-mains" element={<JEEMains />} />
            <Route path="/courses/neet" element={<NEET />} />
            <Route path="/courses/mht-cet" element={<MHTCET />} />
            <Route path="/courses/foundation" element={<Foundation />} />
          </Route>
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
