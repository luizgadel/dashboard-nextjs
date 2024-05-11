import '@/app/ui/global.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { inter } from './ui/fonts';
import Topbar from './ui/topbar/topbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
          <Topbar />
          {children}
      </body>
    </html>
  );
}
