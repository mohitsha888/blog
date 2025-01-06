export default function PostCard({ post }) {
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">
          {post.content.substring(0, 150)}...
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
          <a
            href={`/posts/${post.slug}`}
            className="text-blue-500 hover:text-blue-600"
          >
            Read more →
          </a>
        </div>
      </div>
    );
  }