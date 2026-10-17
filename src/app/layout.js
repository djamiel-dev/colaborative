import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Collaborative Strength",
  description: "Powerlifting coaching op individuele basis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
