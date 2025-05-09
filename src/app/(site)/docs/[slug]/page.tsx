import { structuredAlgoliaHtmlData } from "@/app/libs/crawlIndex";
import { getAllPosts, getPostBySlug } from "@/app/libs/markdown";
import markdownToHtml from "@/app/libs/markdownToHtml";
import SidebarLink from "@/components/Docs/SidebarLink";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  if (post) {
    return {
      title: `${post.title || "Single Post Page"} | ${siteName}`,
      description: `${post.metadata?.slice(0, 136)}...`,
      author: authorName,

      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
    };
  }
}

const DocsPost = async (props: Props) => {
  const params = await props.params;
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);
  const content = await markdownToHtml(post.content || "");

  await structuredAlgoliaHtmlData({
    type: "docs",
    title: post?.title,
    htmlString: content,
    pageUrl: `${process.env.SITE_URL}/docs/${params?.slug}`,
    imageURL: "",
  });

  return (
    <>
      <section className="bg-white pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-24 bg-gray-50 p-4 transition-all lg:h-[calc(100vh-120px)]">
                <ul className="space-y-2">
                  {posts.map((post, key) => (
                    <SidebarLink post={post} key={key} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="prose max-w-full rounded-sm bg-white lg:px-8">
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocsPost;
