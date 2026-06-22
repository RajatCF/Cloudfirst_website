export interface BlogSlugSource {
  title: string;
  slug?: string;
  id?: string;
  postId?: string;
  PK?: string;
}

export const slugify = (text: string): string =>
  text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export const getBlogId = (blog: BlogSlugSource): string =>
  blog.id || blog.postId || blog.PK || "";

export const getBlogSlug = (blog: BlogSlugSource): string => {
  const fromField = blog.slug?.trim();
  if (fromField) return slugify(fromField);
  const fromTitle = slugify(blog.title);
  return fromTitle || getBlogId(blog);
};

export const buildBlogPath = (blog: BlogSlugSource, allBlogs?: BlogSlugSource[]): string => {
  const id = getBlogId(blog);
  const slug = getBlogSlug(blog);

  if (allBlogs?.length) {
    const hasCollision = allBlogs.some(
      (item) => getBlogId(item) !== id && getBlogSlug(item) === slug,
    );
    if (hasCollision && id) return `/blog/${slug}-${id}`;
  }

  return `/blog/${slug}`;
};

export const parseBlogUrlParam = (param: string): { slug: string; id?: string } => {
  if (!param) return { slug: "" };
  if (/^\d+$/.test(param)) return { id: param, slug: "" };

  const slugIdMatch = param.match(/^(.+)-(\d+)$/);
  if (slugIdMatch) return { slug: slugIdMatch[1], id: slugIdMatch[2] };

  return { slug: param };
};

export const resolveBlogIdFromParam = (
  param: string,
  blogs: BlogSlugSource[],
): string | null => {
  const parsed = parseBlogUrlParam(param);
  if (parsed.id) return parsed.id;

  const match = blogs.find((blog) => getBlogSlug(blog) === parsed.slug);
  return match ? getBlogId(match) : null;
};
