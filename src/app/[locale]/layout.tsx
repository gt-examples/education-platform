import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GTProvider } from "gt-next";
import { getGT, getLocale } from "gt-next/server";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const t = await getGT();
  return {
    title: t("Education Platform | General Translation"),
    description: t("Browse courses across programming, design, business, and data science. Learn from top instructors worldwide."),
    openGraph: {
      title: t("Education Platform | General Translation"),
      description: t("Browse courses across programming, design, business, and data science. Learn from top instructors worldwide."),
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <GTProvider>
        <body className={`${inter.className} bg-neutral-950 text-neutral-100 antialiased`}>
          {children}
        </body>
      </GTProvider>
    </html>
  );
}
