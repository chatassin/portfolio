import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between p-6 border-b border-zinc-100 dark:border-zinc-800">
      <div className="text-xl font-bold">MonPortfolio</div>
      <div className="flex gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-blue-600 transition">
          Accueil
        </Link>
        <Link href="/projets" className="hover:text-blue-600 transition">
          Projets
        </Link>
        <Link href="/contact" className="hover:text-blue-600 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}
