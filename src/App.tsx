import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Jeisson from "./pages/Jeisson";
import Sol from "./pages/Sol";
import Lua from "./pages/Lua";
import Gaia from "./pages/Gaia";
import Orion from "./pages/Orion";
import Titan from "./pages/Titan";
import Artemis from "./pages/Artemis";
import Atlas from "./pages/Atlas";
import Vulcan from "./pages/Vulcan";
import Iris from "./pages/Iris";
import Rex from "./pages/Rex";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/jeisson" element={<Jeisson />} />
          <Route path="/sol" element={<Sol />} />
          <Route path="/lua" element={<Lua />} />
          <Route path="/gaia" element={<Gaia />} />
          <Route path="/orion" element={<Orion />} />
          <Route path="/titan" element={<Titan />} />
          <Route path="/artemis" element={<Artemis />} />
          <Route path="/atlas" element={<Atlas />} />
          <Route path="/vulcan" element={<Vulcan />} />
          <Route path="/iris" element={<Iris />} />
          <Route path="/rex" element={<Rex />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
