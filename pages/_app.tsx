import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

// @ts-ignore
const MyApp = ({ Component, pageProps }) => {
  return (
      <ThirdwebProvider desiredChainId={ChainId.Rinkeby} chainRpc={{
          [ChainId.Rinkeby]: 'https://rinkeby.infura.io/v3/2f8011c7e4a34befb6d9c0cd2f7f2636'
      }}>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Component {...pageProps} />
        </ThemeProvider>
      </ThirdwebProvider>
  )
}

export default MyApp;
