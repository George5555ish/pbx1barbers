import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import "./index.css";
import Footer from "../components/Footer"
import HeaderComp from "../components/Header/index";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PBX1BARBERS",
  description: "Barbers with Value || 35a Darnley Rd, Gravesend DA11 0SD",
};
export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster&family=Truculenta:opsz,wght@12..72,100..900&display=swap"
        rel="stylesheet"
      />
      <body className={inter.className}>
        <HeaderComp />
        {children} 
      <Footer />
      </body>
    </html>
  );
}
