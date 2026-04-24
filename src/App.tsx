import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayout from "./components/MainLayout";
import Index from "./pages/Index";
import Articoli from "./pages/Articoli";
import ArticoliCategoria from "./pages/ArticoliCategoria";
import ArticoloSingolo from "./pages/ArticoloSingolo";
import Autori from "./pages/Autori";
import AutorePagina from "./pages/AutorePagina";
import ChiSiamo from "./pages/ChiSiamo";
import Newsletter from "./pages/Newsletter";
import Contatti from "./pages/Contatti";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/articoli" element={<Articoli />} />
            <Route path="/articoli/:categoria" element={<ArticoliCategoria />} />
            <Route path="/articolo/:slug" element={<ArticoloSingolo />} />
            <Route path="/autori" element={<Autori />} />
            <Route path="/autore/:slug" element={<AutorePagina />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
