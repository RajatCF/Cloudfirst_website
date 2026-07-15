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

  // Only treat trailing digits as an ID suffix when they look like stored blog IDs
  // (short years like 2026 in titles must NOT become IDs).
  const slugIdMatch = param.match(/^(.+)-(\d{10,})$/);
  if (slugIdMatch) return { slug: slugIdMatch[1], id: slugIdMatch[2] };

  return { slug: param };
};

export const resolveBlogIdFromParam = (
  param: string,
  blogs: BlogSlugSource[],
): string | null => {
  if (!param) return null;

  // 1) Exact slug match on the full URL param (handles titles ending in years, e.g. "...-2026")
  const exactSlug = blogs.find((blog) => getBlogSlug(blog) === param);
  if (exactSlug) return getBlogId(exactSlug) || null;

  // 2) Pure numeric URL → treat as ID (only if known, or fall through as candidate)
  if (/^\d+$/.test(param)) {
    const byId = blogs.find((blog) => getBlogId(blog) === param);
    return byId ? getBlogId(byId) : param;
  }

  // 3) Collision URLs: `${slug}-${id}` — accept trailing digits only if that ID exists
  const slugIdMatch = param.match(/^(.+)-(\d+)$/);
  if (slugIdMatch) {
    const maybeId = slugIdMatch[2];
    const byId = blogs.find((blog) => getBlogId(blog) === maybeId);
    if (byId) return maybeId;

    const slugOnly = slugIdMatch[1];
    const byPartialSlug = blogs.find((blog) => getBlogSlug(blog) === slugOnly);
    if (byPartialSlug) return getBlogId(byPartialSlug) || null;
  }

  const parsed = parseBlogUrlParam(param);
  if (parsed.id) {
    const byParsedId = blogs.find((blog) => getBlogId(blog) === parsed.id);
    if (byParsedId) return parsed.id;
  }

  const match = blogs.find((blog) => getBlogSlug(blog) === parsed.slug);
  return match ? getBlogId(match) || null : null;
};
