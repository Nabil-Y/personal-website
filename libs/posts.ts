import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "posts");

export const getAllPostsSorted = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContent);
    const slug = fileName.replace(/\.mdx$/, "");

    return {
      slug,
      date: matterResult.data.date,
      readTime: readingTime(matterResult.content).text,
      ...matterResult.data,
    };
  });

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const getAllPostsPaths = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
};

export const getPostData = async (slug: string) => {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContent);
  const readTime = readingTime(matterResult.content).text;

  return {
    meta: matterResult.data,
    mdx: matterResult.content,
    readTime,
  };
};
