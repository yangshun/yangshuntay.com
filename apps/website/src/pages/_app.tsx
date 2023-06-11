import '~/styles/globals.css';

import type {AppProps} from 'next/app';
import Container from '~/components/Container';
import Footer from '~/components/Footer';

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Container>
        <Component {...pageProps} />
        <Footer />
      </Container>
    </>
  );
}
