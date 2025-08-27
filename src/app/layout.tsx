import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import AppSidebar from "@/components/my-components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/my-components/header";
import { cookies } from "next/headers";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Or specific weights you need
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: {
    template: "%s | Store Admin Dashboard",
    default: "Store Admin Dashboard",
  },
  description:
    "A powerful and user-friendly dashboard to manage your online store, track sales, and monitor performance.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
