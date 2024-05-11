import Topbar from './ui/topbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Topbar />
      {children}
    </>      
  );
}
