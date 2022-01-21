import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FC } from "react";
import { Project } from "../../../types";
import { FadeInAnimation } from "../../layout-components";
import styled, { useTheme } from "styled-components";
import { InternalLink } from "../InsiderLink";
import { Toggle } from "../Toggle";

type ProjectItemProps = {
  project: Project;
};

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  padding: 12px 16px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProjectTitle = styled.label`
  font-size: 34px;
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 15px;
  font-weight: 500;
`;

const ProjectRoles = styled.div`
  display: flex;
  align-self: flex-end;
`;

const ProjectDescription = styled.div`
  line-height: 1.5;
  color: ${({ theme }) => theme.secondary};
  border-top: 2px solid ${({ theme }) => `${theme.border}`};
`;

const ProjectTechs = styled.div`
  display: flex;
  gap: 10px;
  font-size: medium;
`;

const ProjectLink = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.secondary};
  border-radius: 4px;
  letter-spacing: 0.025em;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  const theme = useTheme();

  return (
    <FadeInAnimation x={-100}>
      <ProjectContainer>
        <ProjectHeader>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDetails>
            <ProjectRoles>
              {project.roles &&
                project.roles.map((role) => <label>{role}</label>)}
            </ProjectRoles>
            <ProjectLink href={project.link} target="_blank">
              {project.link}
            </ProjectLink>
          </ProjectDetails>
        </ProjectHeader>
        <ProjectDescription>
          <ReactMarkdown plugins={[remarkGfm]}>
            {project.description}
          </ReactMarkdown>
          {project.images && (
            <Toggle text="Screenshots">
              <ProjectImagesContainer>
                {project.images.map((src) => (
                  <ProjectImage src={src} />
                ))}
              </ProjectImagesContainer>
            </Toggle>
          )}
        </ProjectDescription>
        <ProjectTechs>
          {project.tech &&
            project.tech.map((t, tIndex) => {
              return (
                <InternalLink
                  key={tIndex}
                  color={theme.primary}
                  fontSize={18}
                  link={`/tags/${t.toLowerCase()}`}
                >
                  #{t}
                </InternalLink>
              );
            })}
        </ProjectTechs>
      </ProjectContainer>
    </FadeInAnimation>
  );
};

const ProjectImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const ProjectImage = styled.img`
  width: auto;
  height: auto;
  max-width: 834px;
  max-height: 540px;
`;
