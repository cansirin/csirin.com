import { join } from "path";
import { getAllFileNames, getFileContents } from "../utils";
import matter from "gray-matter";
import { Project } from "../../types";

const projectsDirectory = join(process.cwd(), "resources/projects");

export const getProjectBySlug = (slug: string) => {
  const [realSlug, fileContents] = getFileContents(slug, projectsDirectory);
  const { data, content } = matter(fileContents);

  let projectDetails: Partial<Project> = { ...data };

  projectDetails.slug = realSlug;
  projectDetails.description = content;

  return projectDetails;
};

export const getProjectsByTag = (tag: string) => {
  const projects = getAllProjects();
  const projectsWithTag = projects.filter((project) => {
    return project.tech?.find((tech) => {
      return tech.toLowerCase() === tag.toLowerCase();
    });
  });

  return projectsWithTag;
};

export const getAllProjects = () => {
  const files = getAllFileNames(projectsDirectory);
  const projects = files.map((slug) => getProjectBySlug(slug));

  return projects;
};
