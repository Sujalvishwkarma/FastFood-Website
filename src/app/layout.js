import { Inter } from "next/font/google";
import "@/assets/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fast Food",
  description: "Be the fastest in delivering your food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
