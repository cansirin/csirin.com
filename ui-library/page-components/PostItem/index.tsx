import { Post } from "../../../types";
import DateFormatter from "../DateFormatter";
import { FC } from "react";
import { FadeInAnimation } from "../../layout-components";
import { TagLink } from "../Tag";
import styled, { useTheme } from "styled-components";
import Link from "next/link";

type PostProps = {
  post: Post;
};

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 24px;
  cursor: pointer;
  gap: 16px;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.sand3};

  box-shadow: ${({ theme }) => theme.colors.primary} 0px 0 0px 0;
  transition: border 100ms ease-in-out;
  &:hover {
    border-color: ${({ theme }) => theme.colors.hoveredBorder};
  }
`;

const PostTitle = styled.span`
  font-size: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;

const PostTechs = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: baseline;
`;

export const PostItem: FC<PostProps> = ({ post }) => {
  const theme = useTheme();

  return (
    <FadeInAnimation x={-100}>
      <Link href={`/posts/${post.slug}`}>
        <PostContainer>
          <TagLink link={`/posts/${post.slug}`}>
            <PostTitle>{post.title}</PostTitle>
          </TagLink>
          <DateFormatter dateString={post.date} />
          <PostTechs>
            {post.tags.map((tag, lIndex) => (
              <TagLink
                color={theme.colors.primary}
                fontSize={16}
                key={lIndex}
                link={`/tags/${tag.toLowerCase()}`}
              >
                #{tag}
              </TagLink>
            ))}
          </PostTechs>
        </PostContainer>
      </Link>
    </FadeInAnimation>
  );
};

const Tag = styled(TagLink)`
  &:hover {
    background-color: #3b3b53;
  }
`;
