import { GetServerSideProps } from "next";
import { Post } from "../../../types";
import { getPostBySlug } from "../../../resources/apis/posts";
import { CenteredContainer } from "../../../ui-library/layout-components";
import { useRouter } from "next/router";
import { Markdown } from "../../../ui-library/page-components/Markdown";
import styled from "styled-components";

type PostPageProps = {
  post: Post;
};

const PostPage = ({ post }: PostPageProps) => {
  const router = useRouter();
  return (
    <CenteredContainer>
      <PostContainer>
        <div style={{ marginTop: 30 }}>
          <BackLink href="#" onClick={() => router.back()}>
            <label>⫷</label> Back
          </BackLink>
        </div>
        <PostTitle>{post.title}</PostTitle>
        <Markdown>{post.content}</Markdown>
      </PostContainer>
    </CenteredContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // @ts-ignore
  const { slug } = context.params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default PostPage;

const PostContainer = styled.div`
  line-height: 1.5;
  font-size: 20px;
`;

const PostTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => `${theme.colors.secondary}`};
`;

const BackLink = styled.a`
  text-decoration: none;
  border-radius: 4px;
  letter-spacing: 0.025em;
  transition: all 0.125s ease;
  padding-top: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
