import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.css';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color='#0ea5e9' height={4}/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp