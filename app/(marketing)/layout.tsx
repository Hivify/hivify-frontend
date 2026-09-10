import Footer from "@/src/components/landingpage/bottom/Footer";
import Header from "@/src/components/landingpage/top/Header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />

      {children}

      <Footer />
    </div>
  );
}
