export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  content: string;
  tags: string[];
};

export type Project = {
  title: string;
  slug: string;
  link: string;
  description: string;
  tech: [string];
  roles: [string];
  images?: [string];
};
