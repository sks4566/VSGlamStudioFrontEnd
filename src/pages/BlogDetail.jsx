import { useParams, Link } from "react-router-dom";
import { api } from "../lib/api";
import { useData } from "../lib/useData";
import { PageHero, Section, LoadingState, ErrorState } from "../components/UI";

const BlogDetail = () => {
  const { slug } = useParams();
  const postQuery = useData(() => api.blogPost(slug), [slug]);

  if (postQuery.loading) return <LoadingState />;
  if (postQuery.error) return <ErrorState message={postQuery.error.message} />;
  if (!postQuery.data) return <ErrorState message="Post not found." />;

  const post = postQuery.data;

  return (
    <>
      <PageHero
        kicker={post.date}
        title={post.title}
        subtitle={post.excerpt}
        image={post.cover}
      />
      <Section>
        <div className="glass-card rounded-3xl p-8 text-sm text-ink/70">
          <p className="leading-relaxed">{post.content}</p>
        </div>
        <div className="mt-8">
          <Link to="/blog" className="button-secondary">
            Back to blog
          </Link>
        </div>
      </Section>
    </>
  );
};

export default BlogDetail;
