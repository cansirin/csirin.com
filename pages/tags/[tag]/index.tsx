import { Post, Project } from "../../../types";
import { GetServerSideProps } from "next";
import { getPostsByTag } from "../../../resources/apis/posts";
import { getProjectsByTag } from "../../../resources/apis/projects";
import { CenteredContainer } from "../../../ui-library/layout-components";
import { PostList } from "../../../ui-library/page-components/PostList";
import { ProjectList } from "../../../ui-library/page-components/ProjectList";

type TagPageProps = {
  data: {
    projects: Project[];
    posts: Post[];
    tag: string;
  };
};

const TagPage = ({ data }: TagPageProps) => {
  return (
    <CenteredContainer>
      <div style={{ paddingBottom: 40 }}>
        <h1># {data.tag}</h1>
        <PostList posts={data.posts} />
        <ProjectList projects={data.projects} />
      </div>
    </CenteredContainer>
  );
};

export default TagPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tag = context.params!.tag as string;
  if (tag) {
    const posts = getPostsByTag(tag);
    const projects = getProjectsByTag(tag);
    return {
      props: {
        data: {
          projects: projects,
          posts: posts,
          tag: tag,
        },
      },
    };
  } else {
    return { notFound: true };
  }
};
