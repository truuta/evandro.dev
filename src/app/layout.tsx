import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const nunito = Nunito({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Evandro.dev.br",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <div className="flex flex-col">
          <Header />
          <div className="grow h-full">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
