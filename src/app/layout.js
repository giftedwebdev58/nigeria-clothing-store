import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./auth-provider";
import { Toaster } from "sonner";
import Navbar from "./navbar";
import Footer from "./footer";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elegance | Minimalist Clothing",
  description: "Minimalist clothing for the modern individual",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900`}>
        <Analytics/>
        <AuthProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-140px)]">{children}</main>
          <Toaster />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}