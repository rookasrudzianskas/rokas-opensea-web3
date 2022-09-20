import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useAddress, useMetamask } from '@thirdweb-dev/react'
import Main from "../components/Home/Main";

const style = {
    wrapper: `flex h-screen items-center justify-center`,
    connectWalletButton: `rounded-lg border border-black px-10 py-5 transition-all hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black`,
}

const Home: NextPage = () => {
    const connectWithMetamask = useMetamask()
    const address = useAddress();


    return (
    <div className="">
      <Head>
        <title>OpenSea App 2.2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        {address ? (
            <>
                <Main />
            </>
        ) :
           <>
                <Auth />
           </>
        }
    </div>
  )
}

export default Home;

export const Auth = () => {
    const connectWithMetamask = useMetamask()
    const address = useAddress();

    return (
        <div className={style.wrapper}>
            <button
                onClick={connectWithMetamask}
                className={style.connectWalletButton}
            >
                Connect Metamask
            </button>
        </div>
    )
}
