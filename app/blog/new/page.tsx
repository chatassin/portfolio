import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createPost } from "@/lib/blog";
import { redirect } from "next/navigation";

async function handleCreatePost(formData: FormData) {
  "use server";
  await createPost(formData);
  redirect("/blog");
}

export default function NewPostPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto py-12 px-6 w-full">
        <h1 className="text-4xl font-extrabold mb-8 text-blue-600">
          Créer un nouvel article
        </h1>

        <form action={handleCreatePost} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Titre de l'article
            </label>
            <input
              type="text"
              name="title"
              id="title"
              required
              className="w-full p-3 border border-zinc-300 rounded-lg dark:bg-zinc-800 dark:border-zinc-700 text-black dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-1">
              Contenu
            </label>
            <textarea
              name="content"
              id="content"
              rows={10}
              required
              className="w-full p-3 border border-zinc-300 rounded-lg dark:bg-zinc-800 dark:border-zinc-700 text-black dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Publier l'article
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
