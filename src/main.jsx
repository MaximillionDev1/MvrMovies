import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import CreateGlobalStyles from "./styles/globalStyles"
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
		<CreateGlobalStyles/>
	</StrictMode>,
);
