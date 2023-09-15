import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FC } from "react";
import { Project } from "../../../types";
import { FadeInAnimation } from "../../layout-components";
import styled, { useTheme } from "styled-components";
import { TagLink } from "../Tag";
import { Toggle } from "../Toggle";
import { Icon } from "@iconify/react";

type ProjectItemProps = {
  project: Project;
};

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 0 24px 24px;
  background-color: ${({ theme }) => theme.colors.sand3};
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const ProjectTitle = styled.h1``;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-weight: 500;

  @media (max-width: 1024px) {
    max-width: 10rem;
  }
`;

const ProjectRoles = styled.div`
  display: flex;
`;

const ProjectDescription = styled.div`
  line-height: 2;
  color: ${({ theme }) => theme.colors.secondary};
  border-top: 1px solid ${({ theme }) => `${theme.colors.border}`};
`;

const ProjectTechs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const ProjectLink = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 540px) {
    max-width: 14rem;
  }
`;

export const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  const theme = useTheme();

  return (
    <FadeInAnimation x={-100}>
      <ProjectContainer>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectRoles>
          {project.roles &&
            project.roles.map((role) => <label key={role}>{role}</label>)}
        </ProjectRoles>
        {project.link && (
          <ProjectLink href={project.link} target="_blank">
            {project.link}
          </ProjectLink>
        )}
        <ProjectDescription>
          <ReactMarkdown
            plugins={[remarkGfm]}
            components={{
              li: BlogLi,
              ul: BlogUl,
            }}
          >
            {project.description}
          </ReactMarkdown>
        </ProjectDescription>
        {project.images && (
          <Toggle
            text="Screenshots"
            icon={<Icon icon="bi:arrow-right" height={32} />}
            startOpen={true}
          >
            <ProjectImagesContainer>
              {project.images.map((src) => (
                <ProjectImage key={src} src={src} />
              ))}
            </ProjectImagesContainer>
          </Toggle>
        )}
        <ProjectTechs>
          {project.tech &&
            project.tech.map((t) => {
              return (
                <TagLink
                  key={t}
                  color={theme.colors.primary}
                  fontSize={16}
                  link={`/tags/${t.toLowerCase()}`}
                >
                  #{t}
                </TagLink>
              );
            })}
        </ProjectTechs>
      </ProjectContainer>
    </FadeInAnimation>
  );
};

const ProjectImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProjectImage = styled.img`
  max-width: 700px;
  max-height: 540px;
  aspect-ratio: auto;
  padding: 0.5em;
`;
const BlogLi: FC = ({ children }) => {
  return <StyledLi>{children}</StyledLi>;
};

const StyledLi = styled.li`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.hiContrastText};
  padding: 16px 0;
  margin: 0;
  list-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.amber6};
`;
const BlogUl: FC = ({ children }) => {
  return <StyledUl>{children}</StyledUl>;
};

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
`;
