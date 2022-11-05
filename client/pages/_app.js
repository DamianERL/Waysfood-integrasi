import "../styles/globals.css";
import "../styles/tailwind.css";
import { UserContextProvider } from "../app/userContext";
import { CartContextProvider } from "../app/cartContext";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "next/app";
import { Auth } from "../app/auth";
import { useRouter } from "next/router";
import { API, setAuthToken } from "../config/api";

function MyApp({ Component, pageProps }) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client }>
      <CartContextProvider>
        <UserContextProvider>
          <Auth>
            <Component {...pageProps} />
          </Auth>
        </UserContextProvider>
      </CartContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
