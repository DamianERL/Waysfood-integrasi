import "../styles/globals.css";
import "../styles/tailwind.css";
import { UserContextProvider } from "../app/userContext";

import { QueryClient, QueryClientProvider } from "react-query";

import App from "next/app";
import { Auth } from "../app/auth";
import { useRouter } from "next/router";
import { API, setAuthToken } from "../config/api";

function MyApp({ Component, pageProps }) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client }>

        <UserContextProvider>
          <Auth>
            <Component {...pageProps} />
          </Auth>
        </UserContextProvider>

    </QueryClientProvider>
  );
}

export default MyApp;
