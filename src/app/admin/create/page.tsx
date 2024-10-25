import { createBlog } from "@/actions/action";
import PageWrapper from "@/components/page-wrapper/PageWrapper";

function AdminCreatePage() {
  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Create New Blog Post
      </h1>
      <form action={createBlog} className="flex flex-col gap-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-200"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-200"
          required
        />
        <input
          type="text"
          name="img"
          placeholder="Title Image URL"
          className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-200"
          pattern="https?://.+\.(jpg|jpeg|png|gif|bmp|webp)$"
          title="Please enter a valid image URL (jpg, jpeg, png, gif, bmp, webp)."
        />

        <textarea
          name="content"
          rows={15}
          placeholder="Content"
          className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-200"
          required
        />
        <button className="bg-blue-500 py-2 text-white rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 transition duration-200 ease-in-out shadow-md hover:shadow-lg">
          Create Blog {"->"}
        </button>
      </form>
    </PageWrapper>
  );
}

export default AdminCreatePage;
