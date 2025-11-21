import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPost } from "@/lib/blog";
import Link from "next/link";

type BlogPostPageProps = {
  params: { id: string };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const id = Number(params.id);
  const post = await getPost(id);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col bg-white dark:bg-black text-black dark:text-white">
        <Navbar />
        <main className="flex-1 max-w-4xl mx-auto py-12 px-6 w-full">
          <h1 className="text-3xl font-bold text-red-600">Erreur 404</h1>
          <p className="mt-4">Article non trouvé.</p>
          <Link
            href="/blog"
            className="mt-6 inline-block text-blue-600 hover:underline"
          >
            ← Retour à la liste des articles
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto py-12 px-6 w-full">
        <Link
          href="/blog"
          className="text-blue-600 hover:underline text-sm mb-4 block"
        >
          ← Retour à la liste des articles
        </Link>

        <h1 className="text-4xl font-extrabold mb-4 text-black dark:text-white">
          {post.title}
        </h1>
        <p className="text-sm text-zinc-500 mb-6">
          Publié le {post.date.toLocaleDateString()}
        </p>

        <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300">
          <p>{post.content}</p>
        </div>

        <Link
          href={`/blog/edit/${post.id}`}
          className="mt-8 inline-block bg-yellow-600 text-white px-4 py-2 rounded font-medium hover:bg-yellow-700 transition"
        >
          Modifier cet article
        </Link>
      </main>

      <Footer />
    </div>
  );
}
