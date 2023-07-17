import "@/styles/globals.css"
import { NextPage } from "next"
import type { AppProps } from "next/app"
import type { ReactElement, ReactNode } from "react"

import store from '@/redux/store'
import { SnackbarProvider } from "notistack"
import { Provider } from 'react-redux'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3} autoHideDuration={4000}>
        {getLayout(<Component {...pageProps} />)}
      </SnackbarProvider>
    </Provider>
  );
};

export default App;
