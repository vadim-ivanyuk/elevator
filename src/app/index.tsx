/* eslint-disable react-refresh/only-export-components */
import MainPage from "@/pages/main";

import "./index.css";
import { withProviders } from "./providers";

function App() {
  return <MainPage />;
}

export default withProviders(App);
