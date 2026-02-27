
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";
import Index from "./pages/Index";
import Algorithms from "./pages/Algorithms";
import Misinformation from "./pages/Misinformation";
import MentalHealth from "./pages/MentalHealth";
import Privacy from "./pages/Privacy";
import DigitalBalance from "./pages/DigitalBalance";
import DigitalNavigator from "./pages/DigitalNavigator";
import About from "./pages/About";
import Sources from "./pages/Sources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <BackToTopButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/misinformation" element={<Misinformation />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/digital-balance" element={<DigitalBalance />} />
          <Route path="/digital-navigator" element={<DigitalNavigator />} />
          <Route path="/about" element={<About />} />
          <Route path="/sources" element={<Sources />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
