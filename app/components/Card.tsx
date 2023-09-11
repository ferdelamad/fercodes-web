import type { Frontmatter } from "~/utils/posts.server";
import { InternalLink } from "./InternalLink";

type Props = Pick<Frontmatter, "title" | "summary" | "slug" | "formattedDate">;

export const Card = ({ title, summary, slug, formattedDate }: Props) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <div className="px-6 py-4">
        <div className="text-sm text-gray-500 dark:text-gray-400" style={{ paddingBottom: '0.5rem' }}>
          Published {formattedDate}
        </div>
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{summary}</p>
        <InternalLink to={`/posts/${slug}`}>
          <span className="font-medium text-black dark:text-white" style={{ fontSize: '1rem' }}>
            Read more
          </span>
        </InternalLink>
      </div>
    </div>
  );
};