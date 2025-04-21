import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="mx-auto flex flex-col lg:flex-row lg:gap-x-96 justify-between items-center">
        <div className="mx-auto flex justify-between gap-x-7 mb-10 lg:mb-0">
          <div>
            <h1 className="text-right text-7xl font-semibold mb-5">Ryan</h1>
            <h3 className="text-right text-xl font-medium">Software and</h3>
            <h3 className="text-right text-xl font-medium">Game Developer</h3>
          </div>
          <div>
            <h1 className="text-left text-7xl font-semibold mb-5">Yan</h1>
            <h1 className="text-left text-7xl font-semibold">严</h1>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h1>BLOG SECTION HERE</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
