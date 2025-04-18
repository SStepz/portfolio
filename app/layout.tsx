import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nine | Portfolio",
  description:
    "Chaitavat is a computer engineering student looking for software developing experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-slate-100 text-slate-900 relative h-[5000px] pt-28 sm:pt-36`}
      >
        <div className="bg-[#e2fbf3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#d7e5fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
        <Footer />
      </body>
    </html>
  );
}
