import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider";
import { BrowserRouter,Route,Routes } from "react-router";
import App from './App.tsx'
import Cards from './components/cards.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="cards/:id" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
