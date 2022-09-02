import remarkGfm from 'remark-gfm';
import path from 'path';
import fs from 'node:fs/promises';
import grayMatter from 'gray-matter';
import {compile} from '@mdx-js/mdx';

type ContentsaurusMarkdownInstance<T extends Record<string, any>> = Readonly<{
  /* Data specified in the file's frontmatter section. */
  frontmatter: T;
  /* Relative file path. */
  file: string;
  /* Raw contents. */
  content: string;
}>;

type ContentsaurusBlogFrontmatter = Readonly<{
  title: string;
  slug: string;
  description?: string;
  draft?: string;
  author?: string;
  author_url?: string;
  author_image_url?: string;
  tags: ReadonlyArray<string>;
}>;
export type ContentsaurusBlogPost =
  ContentsaurusMarkdownInstance<ContentsaurusBlogFrontmatter>;

type BlogOptions = Readonly<{
  dir: string;
}>;

const defaultOptions: BlogOptions = {
  dir: 'blog',
};

export async function loadBlogPosts(options?: Partial<BlogOptions>) {
  const {dir}: BlogOptions = {...defaultOptions, ...options};
  const dirPath = path.join(process.cwd(), dir);
  const postsFileNames = await fs.readdir(dirPath);

  const postList = Promise.all(
    postsFileNames.map(
      async (postFileName) =>
        await loadBlogPost(postFileName.replace(/\.md$/, ''), options),
    ),
  );

  return postList;
}

export async function loadBlogPost(
  slug: string,
  options?: Partial<BlogOptions>,
): Promise<ContentsaurusBlogPost> {
  // TODO: Cache.
  const {dir} = {...defaultOptions, ...options};
  const dirPath = path.join(process.cwd(), dir);
  // TODO: Support more file formats as per config.
  // Maybe allow globbing.
  const filePath = path.join(dirPath, slug + '.md');
  const postRaw = await fs.readFile(filePath, 'utf8');
  const file = grayMatter(postRaw);

  // const config = await import('contentsaurus.config');
  // const mdxContents = await compile(file.content, {
  //   remarkPlugins: config.default.plugins[0][1].remarkPlugins,
  // });
  // console.log(mdxContents);

  return {
    frontmatter: file.data as ContentsaurusBlogFrontmatter,
    content: file.content,
    file: filePath,
  };
}
