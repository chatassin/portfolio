// app/blog/edit/[id]/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPost, editPost } from "@/lib/blog";
import { redirect } from "next/navigation";

type EditPostPageProps = {
  params: { id: string };
};

export default async function EditPostPage({ params }: EditPostPageProps) {
  const id = Number(params.id);
  const post = await getPost(id);

  if (!post) {
    return (
      <main className="p-8 text-center">
        <h1 className="text-3xl text-red-600">Article à éditer non trouvé.</h1>
      </main>
    );
  }

  // Server Action spécifique à l'édition
  async function handleEditPost(formData: FormData) {
    "use server";
    await editPost(id, formData);
    redirect(`/blog/${id}`); // Redirige vers l'article modifié
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto py-12 px-6 w-full">
        <h1 className="text-4xl font-extrabold mb-8 text-blue-600">
          Modifier : {post.title}
        </h1>

        {/* Le formulaire utilise l'action Server Action avec la fonction locale */}
        <form action={handleEditPost} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Titre de l'article
            </label>
            <input
              type="text"
              name="title"
              id="title"
              required
              defaultValue={post.title} // Affiche le titre actuel
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
              defaultValue={post.content} // Affiche le contenu actuel
              className="w-full p-3 border border-zinc-300 rounded-lg dark:bg-zinc-800 dark:border-zinc-700 text-black dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Sauvegarder les modifications
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
