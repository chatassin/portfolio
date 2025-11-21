"use server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

type BlogPost = {
  id: number;
  title: string;
  content: string;
  date: Date;
};

let posts: BlogPost[] = [
  {
    id: 1,
    title: "Mon premier article",
    content: "Ceci est le contenu initial de mon blog.",
    date: new Date(),
  },
  {
    id: 2,
    title: "Le Responsive Design",
    content: "Comment j'ai rendu mon portfolio responsive.",
    date: new Date(),
  },
];

let nextId = 3;

export async function getPosts(): Promise<BlogPost[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return posts;
}

export async function getPost(id: number): Promise<BlogPost | undefined> {
  return posts.find((post) => post.id === id);
}

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!title || !content) {
    throw new Error("Le titre et le contenu sont requis.");
  }

  const newPost: BlogPost = {
    id: nextId++,
    title,
    content,
    date: new Date(),
  };

  posts.push(newPost);
  console.log(`Article créé: ${newPost.title}`);

  redirect((await headers()).get("referer") ?? "/blog");
}

export async function editPost(id: number, formData: FormData) {
  const postIndex = posts.findIndex((post) => post.id === id);

  if (postIndex === -1) {
    throw new Error("Article non trouvé.");
  }

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  posts[postIndex] = {
    ...posts[postIndex],
    title,
    content,
  };
  console.log(`Article modifié: ${title}`);
}

export async function deletePost(id: number) {
  posts = posts.filter((post) => post.id !== id);
  console.log(`Article supprimé avec ID: ${id}`);

  redirect((await headers()).get("referer") ?? "/blog");
}
