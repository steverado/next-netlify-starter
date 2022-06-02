import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Photoeditor SDK</title>


    <script src="https://unpkg.com/react@16.13.1/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom-server.browser.production.min.js"></script>
    <script src="https://unpkg.com/styled-components@4.4.1/dist/styled-components.min.js"></script>
    <script src="https://unpkg.com/photoeditorsdk/umd/no-polyfills.js"></script>
    <style>
      body {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <div id="editor" style="width: 100vw; height: 100vh;"></div>
    <script>
      PhotoEditorSDK.PhotoEditorSDKUI.init({
        container: '#editor',
        // Please replace this with your license: https://img.ly/dashboard
        license: '{"owner":"Imgly Inc.","version":"2.4", ...}',
        image:
          'https://images.unsplash.com/photo-1599713061074-9efa95376d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
        assetBaseUrl: 'https://unpkg.com/photoeditorsdk/assets',
      });
    </script>
  </body>
</html>

      <Footer />
    </div>
  )
}
