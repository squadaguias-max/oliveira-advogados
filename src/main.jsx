import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppProviders } from "./app/providers/AppProviders";
import { AppRouter } from "./app/router/AppRouter";
import { applyBrand } from "./core/theme/applyBrand";
import { appConfig } from "./config/app.config";
import "./styles/index.css";

applyBrand(appConfig.brand);

const app = <StrictMode><BrowserRouter><AppProviders><AppRouter /></AppProviders></BrowserRouter></StrictMode>;
const root = document.getElementById("root");
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
