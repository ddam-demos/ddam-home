import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Cursor from '../components/cursor'
import ScrollToTop from '../components/scroll-to-top'
import LoadingScreen from '../components/loading-screen'
import ChatWidget from '../components/mugen-widget'
import { ChatbotWidget } from 'multichat-web'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dentsu Data Artist Mongol LLC</title>
        <link rel="icon" href="/img/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
        <meta
          name="facebook-domain-verification"
          content="4bt07rphwq3fgi22t27zymgwj7dh54"
        />
      </Head>
      <LoadingScreen />
      <Cursor />
      <ScrollToTop />
      <Component {...pageProps} />
      <ChatWidget />

      <Script
        strategy="beforeInteractive"
        src="https://stg.mugen-ai-chat.jp/widget/widget.mjs"
      ></Script>
      <Script src="https://www.google.com/recaptcha/enterprise.js?render=6LeWbbMqAAAAACrErwFE6EkydBhfSKkRt5xE8VsI"></Script>
      <Script
        strategy="beforeInteractive"
        id="wow"
        src="/js/wow.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="isotope"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script strategy="lazyOnload" id="initWow" src="/js/initWow.js"></Script>

      {/* Meta Pixel Code */}
      <Script id="metaPixel">
        {`
          !function(f,b,e,v,n,t,s) {
            if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
          }(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '603159535839256');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=603159535839256&ev=PageView&noscript=1"
        />
      </noscript>
      {/* End Meta Pixel Code */}
    </>
  )
}

export default MyApp
