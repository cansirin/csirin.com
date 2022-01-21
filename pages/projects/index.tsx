import { GetServerSideProps } from "next";
import { getAllProjects } from "../../resources/apis/projects";
import { Project } from "../../types";
import { CenteredContainer } from "../../ui-library/layout-components";
import { ProjectList } from "../../ui-library/page-components/ProjectList";

type ProjectsPageProps = {
  data: Project[];
};

const ProjectsPage = ({ data }: ProjectsPageProps) => {
  return (
    <CenteredContainer width="55em">
      <ProjectList projects={data} />
    </CenteredContainer>
  );
};

export default ProjectsPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = getAllProjects();

  if (!projects) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: projects,
    },
  };
};
