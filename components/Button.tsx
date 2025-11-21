import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string; // Optionnel : si présent, c'est un lien
  variant?: "primary" | "outline"; // Deux styles possibles
};

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  // Styles de base
  const baseStyles =
    "px-6 py-3 rounded-full font-medium transition-all duration-200";

  // Styles conditionnels
  const variantsStyles = {
    // Renommé 'variants' en 'variantsStyles' pour éviter la confusion avec le props 'variant'
    primary:
      "bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200",
    outline:
      "border border-zinc-300 hover:border-black hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-white dark:hover:bg-zinc-900",
  };

  // NOUVEAU : Styles Responsive
  // w-full = prend 100% de la largeur sur mobile
  // sm:w-auto = retrouve sa largeur naturelle (fit-content) sur les petits écrans (640px+)
  const responsiveStyles = "w-full sm:w-auto";

  const className = `${baseStyles} ${variantsStyles[variant]} ${responsiveStyles}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
