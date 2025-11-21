// app/blog/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPosts, deletePost } from "@/lib/blog";
import Link from "next/link";
//import { headers } from "next/headers";

export default async function BlogListPage() {
  const posts = await getPosts();

  const deletePostWithId = async (id: number) => {
    "use server";
    await deletePost(id);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto py-12 px-6 w-full">
        <h1 className="text-4xl font-extrabold mb-8 text-blue-600 border-b pb-2 border-zinc-200 dark:border-zinc-700">
          Mon Blog
        </h1>

        <Link
          href="/blog/new"
          className="bg-green-600 text-white px-4 py-2 rounded font-medium hover:bg-green-700 transition mb-6 inline-block"
        >
          ➕ Créer un nouvel article
        </Link>

        {posts.length === 0 ? (
          <p className="mt-4 text-zinc-500">Aucun article n'a été trouvé.</p>
        ) : (
          <div className="space-y-6 mt-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-4 border rounded-lg shadow-sm dark:border-zinc-700"
              >
                <Link
                  href={`/blog/${post.id}`}
                  className="text-2xl font-semibold text-blue-600 hover:underline"
                >
                  {post.title}
                </Link>
                <p className="text-sm text-zinc-500 mt-1">
                  Publié le {post.date.toLocaleDateString()}
                </p>
                <p className="mt-2 text-zinc-700 dark:text-zinc-300 line-clamp-2">
                  {post.content}
                </p>

                <div className="mt-3 flex gap-3 items-center">
                  <Link
                    href={`/blog/edit/${post.id}`}
                    className="text-sm text-yellow-600 hover:underline"
                  >
                    Modifier
                  </Link>

                  <form
                    action={deletePostWithId.bind(null, post.id)}
                    className="inline-block"
                  >
                    <button
                      type="submit"
                      className="text-sm text-red-600 hover:underline"
                    >
                      Supprimer
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
