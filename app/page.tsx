import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black text-black dark:text-white">
      <Navbar />

      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto">
        <div className="flex flex-col-reverse items-center justify-center gap-12 sm:flex-row sm:text-left sm:py-20 w-full">
          <div className="flex flex-col gap-4 items-center sm:items-start max-w-xl">
            <h1 className="text-4xl font-bold  sm:text-5xl md:text-6xl">
              Portfolio pour le cours de{" "}
              <span className="text-blue-600">web design</span>.
            </h1>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed sm:text-lg">
              Bienvenue sur mon portfolio personnel qui a pour but de montrer ce
              que je sais faire en html.
            </p>

            <div className="flex flex-col gap-3 mt-4 w-full sm:w-auto sm:flex-row">
              <Button href="/blog">BLOGS</Button>
              <Button href="/contact" variant="outline">
                Me contacter
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
