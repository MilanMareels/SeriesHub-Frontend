import path from "path";
import react from "@vitejs/plugin-react";
import "dotenv/config";
import process from "process";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	},
	define: {
		"process.env.BASE_URL": JSON.stringify(process.env.BASE_URL)
	}
});
