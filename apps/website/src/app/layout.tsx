import '~/styles/globals.css';
import type {Metadata} from 'next';
import Container from '~/components/Container';
import Footer from '~/components/Footer';

export const metadata: Metadata = {
  title: 'Yangshun Tay Homepage',
  description:
    'Full Front End Stack Engineer, experienced in building products, design systems, user experience, and developer tooling.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 antialiased">
        <Container>
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
