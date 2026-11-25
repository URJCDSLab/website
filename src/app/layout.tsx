import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d14" },
  ],
};

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
    description: "Data science research, academic training, and knowledge transfer at Universidad Rey Juan Carlos.",
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
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-[#f5f7fa] dark:bg-[#0b0d14] text-[#111827] dark:text-[#eef0f5] transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-[#0086BA] focus:text-white focus:text-sm focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0086BA]"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
