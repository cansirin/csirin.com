import { GetServerSideProps } from "next";
import { getAllPosts } from "../../resources/apis/posts";
import { Post } from "../../types";
import {
  CenteredContainer,
  NotAvailable,
} from "../../ui-library/layout-components";
import { PostList } from "../../ui-library/page-components/PostList";

type HomeProps = {
  data: Post[];
};

const PostsPage = ({ data }: HomeProps) => {
  return (
    <CenteredContainer width="55em">
      <PostList posts={data} />
    </CenteredContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      data: allPosts,
    },
  };
};

export default PostsPage;
