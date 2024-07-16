export default function NewPostPage() {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <h1>New Post</h1>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
