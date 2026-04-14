import { ReactNode } from "react";
import Header from "../components/store/Header";
import Footer from "../components/store/Footer";

export default function StoreLayout({
  children,
}: {
  children: ReactNode;
}) {  
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
}