import { Post } from "../../../types";
import DateFormatter from "../DateFormatter";
import { FC } from "react";
import { FadeInAnimation } from "../../layout-components";
import { InternalLink } from "../InsiderLink";
import styled, { useTheme } from "styled-components";
import Link from "next/link";

type PostProps = {
  post: Post;
};

const PostContainer = styled.a`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.border};
  padding: 12px 16px;
  margin-bottom: 10px;
  margin-left: 10px;
  cursor: pointer;

  box-shadow: ${({ theme }) => theme.primary} 0px 0 0px 0;
  transition: box-shadow 300ms ease-in-out;
  &:hover {
    box-shadow: ${({ theme }) => theme.primary} 0px 25px 20px -12px;
  }
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PostTechs = styled.div`
  display: flex;
  gap: 10px;
`;

export const PostItem: FC<PostProps> = ({ post }) => {
  const theme = useTheme();
  return (
    <FadeInAnimation x={-100}>
      <Link href={`/posts/${post.slug}`}>
        <PostContainer>
          <PostHeader>
            <InternalLink color={theme.secondary} link={`/posts/${post.slug}`}>
              {post.title}
            </InternalLink>
            <DateFormatter dateString={post.date} />
          </PostHeader>
          <PostTechs>
            {post.tags.map((tag, lIndex) => (
              <InternalLink
                color={theme.primary}
                fontSize={18}
                key={lIndex}
                link={`/tags/${tag.toLowerCase()}`}
              >
                #{tag}
              </InternalLink>
            ))}
          </PostTechs>
        </PostContainer>
      </Link>
    </FadeInAnimation>
  );
};
