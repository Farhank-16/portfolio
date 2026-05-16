import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Farhan Khan – Full Stack Web Developer | MERN & JavaScript Developer",
  description:
    "Farhan Khan is a Full Stack Web Developer from Jaipur, Rajasthan, and a 2026 MCA student from JECRC University, Jaipur. He builds fast, clean, and responsive web apps using React, Node.js, Express, MongoDB, and more.",
  keywords: [
    "Farhan Khan",
    "Farhan Khan",
    "thefarhankhan",
    "Farhan Khan web developer",
    "Farhan Khan full stack developer",
    "Farhan Khan MERN developer",
    "Farhan Khan JavaScript",
    "Farhan Khan Jaipur",
    "Farhan Khan Rajasthan",
    "Farhan Khan portfolio",
    "Full Stack Developer India",
    "MERN Stack Developer Rajasthan",
    "JavaScript Developer India",
    "React Node Developer",
  ],
  authors: [
    { name: "Farhan Khan" },
    { name: "Farhan Khan", url: "https://thefarhankhan.in" },
  ],
  creator: "Farhan Khan",
  publisher: "Farhan Khan",
  category: "Technology",
  metadataBase: new URL("https://thefarhankhan.in"),
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    title:
      "Farhan Khan – Full Stack Developer | React, Node, MongoDB , Express",
    description:
      "Explore the portfolio of Farhan Khan, a Full Stack Developer skilled in MongoDB, Express , React  and more. Based in Rajasthan, India – building modern web apps with React, Node.js, and MongoDB.",
    url: "https://thefarhankhan.in",
    siteName: "Farhan Khan",
    images: [
      {
        url: "/farhankhan/farhan.jpg",
        width: 600,
        height: 600,
      },
      {
        url: "/farhankhan/farhan.jpg",
        width: 500,
        height: 600,
      },
      // {
      //   url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Khan – Full Stack Developer | React & Node.js",
    description:
      "Farhan Khan is a  Full Stack Web Developer from Jaipur, India. Skilled in JavaScript, React, Node.js, MongoDB,  and more. Visit portfolio to know more.",
    siteId: "",
    creator: "@thefarhankhan",
    creatorId: "@thefarhankhan",
    images: ["/farhankhan/farhankhan.jpg"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-small  bg-fixed bg-cover bg-center min-h-screen overflow-x-hidden max-w-full`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
