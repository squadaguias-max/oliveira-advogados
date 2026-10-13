import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function AppShell() { return <div><Header /><main id="conteudo"><Outlet /></main><Footer /></div>; }
