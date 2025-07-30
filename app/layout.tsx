import type { Metadata } from 'next'
import "./globals.css";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { ThemeProvider } from "../components/theme-provider";

export const metadata: Metadata = {
  title: "Balvendra Singh - Data Scientist & AI Engineer",
  description: "Professional portfolio of Balvendra Singh, an experienced Data Scientist specializing in Machine Learning, Deep Learning, and Generative AI solutions.",
  keywords: ["Data Scientist", "Machine Learning", "AI Engineer", "Python", "Deep Learning", "Generative AI"],
  authors: [{ name: "Balvendra Singh" }],
  creator: "Balvendra Singh",
  openGraph: {
    title: "Balvendra Singh - Data Scientist & AI Engineer",
    description: "Professional portfolio showcasing expertise in ML, AI, and data science solutions",
    url: "https://balvendrasingh-portfolio.vercel.app", // Replace with your actual domain when deployed
    siteName: "Balvendra Singh Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balvendra Singh - Data Scientist & AI Engineer",
    description: "Professional portfolio showcasing expertise in ML, AI, and data science solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans antialiased min-h-screen transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
