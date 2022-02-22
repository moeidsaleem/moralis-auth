import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

const MORALIS_SERVER_URL = process.env.MORALIS_APPLICATION_ID;
const MORALIS_APPLICATION_ID = process.env.MORALIS_APPLICATION_ID;

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={MORALIS_APPLICATION_ID}
      serverUrl={MORALIS_SERVER_URL}
    >
      {<Component {...pageProps} />}
    </MoralisProvider>
  );
}

export default MyApp;
