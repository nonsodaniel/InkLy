import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inkly",
  description: "A Blog application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="wrapper">{children} </div>
        </div>
      </body>
    </html>
  );
}
