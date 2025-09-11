import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import data from "../../data/involvedPosts.json";

export default function InvolvedDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = data.items.find((x) => x.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold mb-4">Not found</h1>
        <p className="mb-6">We couldn't find that item. It might have been moved or removed.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded bg-gray-900 text-white"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-4">
        <Link to="/" className="text-sm text-[#C46340] hover:underline">
          ← Back to Get Involved
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-4 text-gray-900">{post.title}</h1>

      <div className="w-full aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden mb-6">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

<div
  className="
    text-gray-800 leading-relaxed max-w-3xl mx-auto
    [&>h1]:text-4xl [&>h1]:font-semibold [&>h1]:tracking-tight [&>h1]:text-gray-900 [&>h1]:mt-6 [&>h1]:mb-4
    [&>h2]:text-3xl [&>h2]:font-semibold [&>h2]:tracking-tight [&>h2]:text-gray-900 [&>h2]:mt-10 [&>h2]:mb-4
    [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-gray-900 [&>h3]:mt-8 [&>h3]:mb-3
    [&>p]:text-[17px] [&>p]:leading-8 [&>p]:text-gray-700 [&>p]:mb-5
    [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:my-5 [&>ul]:space-y-2
    [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:my-5 [&>ol]:space-y-2
    [&>li]:text-[16px] [&>li]:leading-7
    [&>a]:text-sky-700 [&>a]:underline [&>a]:underline-offset-4 hover:[&>a]:text-sky-900
    [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-700 [&>blockquote]:my-6
    [&>table]:w-full [&>table]:border-collapse [&>table]:text-[15px] [&>table]:my-6
    [&>th]:text-left [&>th]:font-semibold [&>th]:bg-gray-100 [&>th]:border [&>th]:border-gray-300 [&>th]:px-3 [&>th]:py-2
    [&>td]:border [&>td]:border-gray-300 [&>td]:px-3 [&>td]:py-2 [&>td]:align-top
    [&>img]:rounded-xl [&>img]:shadow-sm [&>img]:my-6
  "
  dangerouslySetInnerHTML={{ __html: post.contentHtml }}
/>


    </div>
  );
}
