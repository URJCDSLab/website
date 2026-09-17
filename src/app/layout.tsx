import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.datasciencelab.es"),
  title: {
    default: "Data Science Lab | Rey Juan Carlos University (URJC)",
    template: "%s | Data Science Lab URJC",
  },
  description: "Data Science Laboratory at Universidad Rey Juan Carlos (URJC). Research, education, and knowledge transfer in machine learning, mathematical optimization, and big data.",
  keywords: [
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Optimization",
    "Rey Juan Carlos University",
    "URJC",
    "Big Data",
    "Data Science Lab",
  ],
  authors: [{ name: "Data Science Lab (URJC)" }],
  openGraph: {
    title: "Data Science Lab | URJC",
    description: "Hub for data science insights, research, and innovation at Rey Juan Carlos University.",
    url: "https://www.datasciencelab.es",
    siteName: "Data Science Lab URJC",
    images: [
      {
        url: "/assets/images/logos/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Data Science Lab URJC logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Science Lab | URJC",
    description: "Discover cutting-edge data science research and education at Universidad Rey Juan Carlos.",
    creator: "@DSLAB_URJC",
    images: ["/assets/images/logos/og-default.jpg"],
  },
  icons: {
    icon: "/assets/images/logos/favicon-32x32.png",
    shortcut: "/assets/images/logos/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
