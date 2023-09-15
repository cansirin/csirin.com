import { PostItem } from "../PostItem";
import { Post } from "../../../types";
import { Animate, NotAvailable } from "../../layout-components";
import styled from "styled-components";

type PostListProps = {
  posts: Post[];
};

export const PostList = ({ posts }: PostListProps) => {
  if (posts.length === 0) {
    return (
      <Animate>
        <h1>/posts</h1>
        <NotAvailable text="No post added yet." />
      </Animate>
    );
  }

  return (
    <Animate>
      <h1>/posts</h1>
      <ListContainer>
        {posts.map((post, index) => {
          return <PostItem key={index} post={post} />;
        })}
      </ListContainer>
    </Animate>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 0;
`;
