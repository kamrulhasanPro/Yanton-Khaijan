import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import CartProvider from "@/contexts/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});


export const metadata = {
  title: {
    template: "%s | Yanton Khaijan",
    default: "Yanton Khaijan",
  },
  description: "Bast of the Noakhali City.",

  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Kamrul" }, { name: "Miazi", url: "https://nextjs.org" }],
  creator: "Kamrul Hasan",
  publisher: "Sebastian Markbåge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* header */}
        <header>
          <Navbar />
        </header>

        {/* main */}
        <main className="w-11/12 mx-auto">
          <CartProvider>{children}</CartProvider>
        </main>

        {/* footer */}
        <footer></footer>
      </body>
    </html>
  );
}
