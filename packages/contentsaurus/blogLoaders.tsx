import path from 'path';
import fs from 'fs';
import {promisify} from 'util';
import grayMatter from 'gray-matter';

const readFileAsync = promisify(fs.readFile);

export async function loadBlogPosts(relativeDir: string) {
  const dirPath = path.join(process.cwd(), relativeDir);
  const postsFileNames = fs.readdirSync(dirPath);

  const postList = Promise.all(
    postsFileNames.map(
      async (postFileName) =>
        await loadBlogPostBySlug(
          relativeDir,
          postFileName.replace(/\.md$/, ''),
        ),
    ),
  );

  return postList;
}

export async function loadBlogPostBySlug(relativeDir: string, slug: string) {
  const dirPath = path.join(process.cwd(), relativeDir);
  const postRaw = await readFileAsync(path.join(dirPath, slug + '.md'));
  const file = grayMatter(postRaw);
  return {...file.data, content: file.content};
}
