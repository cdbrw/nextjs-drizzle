'use client';

import { useRef } from 'react';

import { PostSchema } from '@/lib/types';
import { createPost } from '@/actions/posts';

export default function NewPost() {
  const ref = useRef<HTMLFormElement>(null);

  const handleCreatePost = async (formData: FormData) => {
    const newPost = {
      title: formData.get('title'),
      content: formData.get('content'),
    };

    // validate the form data
    const validation = PostSchema.safeParse(newPost);

    if (!validation.success) {
      const errors = validation.error.flatten((issue) => issue.message);

      if (errors.fieldErrors.title) {
        console.error(`${errors.fieldErrors.title}`);
      }

      if (errors.fieldErrors.content) {
        console.error(`${errors.fieldErrors.content}`);
      }

      return;
    }

    // check for any errors on the backend
    const result = await createPost(formData);
    if (result?.error) {
      console.error(result.error);
      return;
    }

    // reset the form
    ref.current?.reset();
  };

  return (
    <form action={handleCreatePost} ref={ref} className="flex flex-col">
      <input
        className="mb-2 p-3 border rounded-md"
        name="title"
        placeholder="Post title ..."
      />
      <textarea
        className="mb-2 p-3 border rounded-md"
        name="content"
        rows={5}
        placeholder="Post content ..."
      />

      <div className="flex w-full justify-end">
        <button
          className="w-36 border rounded-md p-2 text-stone-500 hover:text-stone-800 bg-stone-100"
          type="submit"
        >
          send it 👉
        </button>
      </div>
    </form>
  );
}
