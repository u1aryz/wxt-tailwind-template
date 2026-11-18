import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// HTML pages do not substitute __MSG_*__ placeholders, so localize the title here.
document.title = t("extName");

const root = document.getElementById("root");
if (!root) {
	throw new Error("Root element #root not found");
}

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
