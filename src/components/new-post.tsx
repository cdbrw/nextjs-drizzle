export default function NewPost() {
  return (
    <form className="flex flex-col">
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
