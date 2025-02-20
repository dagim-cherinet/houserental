// app/layout.js
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ThemeProviderWrapper from "./ThemeProviderWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
