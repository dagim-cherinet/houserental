// app/layout.js
"use client"; // Also a Client Component due to context
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ThemeProviderWrapper from "./ThemeProviderWrapper";

import { PropertyProvider } from "../context/PropertyContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProviderWrapper>
            <PropertyProvider>{children}</PropertyProvider>
          </ThemeProviderWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
