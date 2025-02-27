import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        CMA CGM
        <div className="text-base font-bold">Sustainability</div>
        <div className="text-base">The CMA CGM Foundation</div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
