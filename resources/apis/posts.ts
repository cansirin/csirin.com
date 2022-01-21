import { join } from "path";
import matter from "gray-matter";
import { getAllFileNames, getFileContents } from "../utils";
import { Post } from "../../types";

const postsDirectory = join(process.cwd(), "resources/posts");

export const getPostBySlug = (slug: string) => {
  const [realSlug, fileContents] = getFileContents(slug, postsDirectory);
  const { data, content } = matter(fileContents);

  let postDetails: Partial<Post> = { ...data };

  postDetails.slug = realSlug;
  postDetails.content = content;

  return postDetails;
};

export const getPostsByTag = (tag: string) => {
  const posts = getAllPosts();
  const result = posts.filter((post) => {
    return post.tags?.find((postTag) => {
      return postTag.toLowerCase() === tag.toLowerCase();
    });
  });
  return result;
};

export const getAllPosts = () => {
  const files = getAllFileNames(postsDirectory);
  const posts = files
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date! > post2.date! ? -1 : 1));
  return posts;
};
