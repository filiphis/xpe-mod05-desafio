import type { AppProps } from "next/app";

import { Roboto } from "next/font/google";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <div className={roboto.className}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}
