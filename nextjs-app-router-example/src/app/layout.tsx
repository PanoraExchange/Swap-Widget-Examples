import "./globals.css";

export const metadata = {
  title: "Panora Widget SDK — Next.js App Router Example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
