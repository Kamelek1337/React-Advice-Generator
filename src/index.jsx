import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import QuoteContextProvider from "./context/AdviceContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QuoteContextProvider>
    <App />
  </QuoteContextProvider>
);
