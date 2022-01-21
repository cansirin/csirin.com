import { ProjectItem } from "../ProjectItem";
import { Project } from "../../../types";
import { Animate, NotAvailable } from "../../layout-components";
import styled from "styled-components";

type ProjectListProps = {
  projects: Project[];
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  if (projects.length === 0) {
    return (
      <Animate>
        <h2>/projects</h2>
        <NotAvailable text="No project yet." />
      </Animate>
    );
  }

  return (
    <Animate>
      <h2>/projects</h2>
      <ListContainer>
        {projects.map((project, index) => {
          return <ProjectItem key={index} project={project} />;
        })}
      </ListContainer>
    </Animate>
  );
};
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
