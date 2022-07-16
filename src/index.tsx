import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import PageTemplate from "./components/common/pageTemplate/pageTemplate";
import ThemeProviderContainer from "./components/common/themeProviderContainer/themeProviderContainer";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <ThemeProviderContainer>
        <BrowserRouter>
          <PageTemplate>
            <App />
          </PageTemplate>
        </BrowserRouter>
      </ThemeProviderContainer>
    </RecoilRoot>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
