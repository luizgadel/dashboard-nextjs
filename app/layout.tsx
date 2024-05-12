import '@/app/ui/global.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="light" lang="en">
      <body className={`${inter.className} antialiased`}>
          {children}
      </body>
    </html>
  );
}
