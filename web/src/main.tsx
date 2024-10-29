import { createRoot } from "react-dom/client";
import { createTheme, MantineProvider } from "@mantine/core";
import "./index.css";
import "@mantine/core/styles.css";
import BRoutes from "./routes/BRoutes.tsx";

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <BRoutes />
  </MantineProvider>
);