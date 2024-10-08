'use client'
import "./globals.css";
import { poppins } from "@/lib/font";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Loader from "@/components/Common/Loader";
import { useEffect, useState } from "react";
import { AuthProvider } from "@/providers/AuthContext";
import Head from "./head";


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body className={poppins.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
          >
          
            {
              loading 
              ? <Loader/> : 
              <AuthProvider>
              {children}
              </AuthProvider>
            }
        </ThemeProvider>
      </body>
      
    </html>
  );
}

