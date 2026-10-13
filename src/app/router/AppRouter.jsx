import { Route, Routes } from "react-router-dom";
import { appConfig } from "../../config/app.config";
import { modules } from "../../config/modules.config.jsx";
import { AppShell } from "../../shared/layout/AppShell";
import { NotFoundPage } from "../../shared/pages/NotFoundPage";

const enabledModules = modules.filter(({ feature }) => !feature || appConfig.features[feature]);

export function AppRouter() {
  return <Routes><Route element={<AppShell />}>
    {enabledModules.map((route) => <Route key={route.id} path={route.path} element={route.element} />)}
    <Route path="*" element={<NotFoundPage />} />
  </Route></Routes>;
}
