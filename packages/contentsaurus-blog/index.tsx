import path from 'path';
import fs from 'node:fs/promises';
import grayMatter from 'gray-matter';
import {bundleMDX} from 'mdx-bundler';
import config from 'contentsaurus.config';

type ContentsaurusMarkdownInstance<T extends Record<string, any>> = Readonly<{
  /* Data specified in the file's frontmatter section. */
  frontmatter: T;
  /* Relative file path. */
  file: string;
  /* Raw contents. */
  contentRaw: string;
  /* Raw contents. */
  content: string;
}>;

type ContentsaurusBlogFrontmatter = Readonly<{
  title: string;
  slug: string;
  description?: string;
  draft?: string;
  date?: number;
  author?: string;
  author_url?: string;
  author_image_url?: string;
  tags: ReadonlyArray<string>;
}>;

export type ContentsaurusBlogPost =
  ContentsaurusMarkdownInstance<ContentsaurusBlogFrontmatter>;

type BlogOptions = Readonly<{
  // Relative to the root directory of the project.
  path: string;
  remarkPlugins: Array<any>; // TODO: Type it.
}>;

const defaultOptions: BlogOptions = {
  path: 'blog',
  remarkPlugins: [],
};

// TODO: Shift this into core.
function getFinalOptions(callsiteOptions?: Partial<BlogOptions>) {
  // TODO: Remove.
  const instanceOptions = config.plugins[0][1] as BlogOptions;
  const combinedOptions: BlogOptions = {
    ...defaultOptions,
    ...instanceOptions,
    ...callsiteOptions,
  };
  return combinedOptions;
}

export async function loadBlogPosts(options?: Partial<BlogOptions>) {
  const {path: blogPath} = getFinalOptions(options);
  const dirPath = path.join(process.cwd(), blogPath);
  const postsFileNames = await fs.readdir(dirPath);

  const postList = await Promise.all(
    postsFileNames.map(async (postFileName) => {
      const {frontmatter, file} = await loadBlogPost(postFileName, options);
      return {frontmatter, file};
    }),
  );

  // TODO: Allow custom sorting.
  postList.sort(
    (a, b) => (b.frontmatter?.date ?? 0) - (a.frontmatter?.date ?? 0),
  );
  return postList;
}

function processFrontmatter(
  frontmatter: Record<string, any>,
): ContentsaurusBlogFrontmatter {
  return {
    ...frontmatter,
    date: frontmatter.date.getTime(),
  } as ContentsaurusBlogFrontmatter;
}

export async function loadBlogPostBySlug(
  slug: string,
  options?: Partial<BlogOptions>,
): Promise<ContentsaurusBlogPost> {
  // TODO: Loading all posts is kinda slow. Look into making this faster.
  const postsFrontMatter = await loadBlogPosts(options);
  const postFrontMatter = postsFrontMatter.filter(
    ({frontmatter}) => slug === frontmatter.slug,
  );
  if (postFrontMatter.length === 0) {
    throw `No post found for ${slug}`;
  }

  return await loadBlogPost(postFrontMatter[0].file, options);
}

export async function loadBlogPost(
  filename: string,
  options?: Partial<BlogOptions>,
): Promise<ContentsaurusBlogPost> {
  const {path: blogPath, remarkPlugins} = getFinalOptions(options);
  // TODO: Cache.
  const dirPath = path.join(process.cwd(), blogPath);
  const filePath = path.join(dirPath, filename);
  const contentRaw = await fs.readFile(filePath, 'utf8');
  const file = grayMatter(contentRaw);

  const result = await bundleMDX({
    source: contentRaw,
    mdxOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        ...remarkPlugins,
      ];

      return options;
    },
  });

  return {
    frontmatter: processFrontmatter(file.data),
    contentRaw: file.content, // Without the frontmatter.
    content: result.code,
    file: filename,
  };
}
