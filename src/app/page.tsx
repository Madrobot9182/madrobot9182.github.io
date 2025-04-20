import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="mb-auto h-10">This is the start</div>
      <Footer />
    </div>
  );
}
