import { t } from "@/utils/i18n";

function App() {
	return (
		<div className="flex w-40 flex-col gap-2 p-4">
			<h1 className="text-2xl">{t("popupTitle")}</h1>
			<button type="button" className="btn btn-primary">
				{t("popupButtonLabel")}
			</button>
		</div>
	);
}

export default App;
