
import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts, Post } from "../utils/posts.ts";
import { State } from "../utils/state.ts";
import { Container } from "../components/Container.tsx";
import { BlogHomeHeader } from "../components/BlogHomeHeader.tsx";
import { PostPreview } from "../components/PostPreview.tsx";

interface Data extends State {
  posts: Post[];
}

export const handler: Handlers<Data, State> = {
  async GET(_req, ctx) {
    const posts = await listPosts();
    return ctx.render({ ...ctx.state, posts });
  },
};

export default function Blog(props: PageProps<Data>) {
  const { posts } = props.data;
  return (
    <>
     <BlogHomeHeader />
     <main>
      <Container>
        <ul class="mt-16">
          {posts.map((post) => <PostPreview post={post} />)}
        </ul>
      </Container>
     </main>
    </>
  );
}
