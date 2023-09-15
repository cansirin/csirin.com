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
        <h1>/projects</h1>
        <NotAvailable text="No project added yet." />
      </Animate>
    );
  }

  return (
    <Animate>
      <h1>/projects</h1>
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
  justify-content: space-around;
  gap: 40px;
  padding: 20px 0;
`;
