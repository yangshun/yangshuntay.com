import '../styles/globals.css';
import { Container } from '~/components/container';
import { Footer } from '~/components/footer';
import { Header } from '~/components/header';
import { NavLinks } from '~/components/nav-links';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Header rightContents={<NavLinks />} />
      {children}
      <Footer />
    </Container>
  );
}
