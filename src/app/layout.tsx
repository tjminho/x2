import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <div className="">
            <LeftBar />
          </div>
          {children}
          <div className="">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
