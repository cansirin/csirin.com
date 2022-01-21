import { join } from "path";
import fs from "fs";

export const getFileContents = (slug: string, directory: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(directory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return [realSlug, fileContents];
};

export const getAllFileNames = (path: string) => {
  return fs.readdirSync(path);
};
