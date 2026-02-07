import { api } from "../lib/api";
import { useData } from "../lib/useData";
import { PageHero, Section, BlogCard, LoadingState, ErrorState } from "../components/UI";

const Blog = () => {
  const blogQuery = useData(api.blog, []);

  if (blogQuery.loading) return <LoadingState />;
  if (blogQuery.error) return <ErrorState message={blogQuery.error.message} />;

  return (
    <>
      <PageHero
        kicker="Blog"
        title="Beauty notes & behind-the-scenes"
        subtitle="Tips, timelines, and makeup insights from the studio."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {blogQuery.data.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Blog;
