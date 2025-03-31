
import "./globals.css";
export default function RootLayout({
  children, about, portfolio, home
}: Readonly<{

  children: React.ReactNode;
  about: React.ReactNode;
  portfolio: React.ReactNode;
  home: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="flex items-center gap-40">
          {home}
          {about}
          {portfolio}
        </div>
      </body>
    </html>
  );
}
