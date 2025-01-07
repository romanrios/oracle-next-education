import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "https://romanrios.github.io/oracle-next-education/challenge-aluraflix/dist/",
  plugins: [react()],
});
