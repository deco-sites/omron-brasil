import Button from "$store/components/ui/Button.tsx";
import ArticleDetails, {
  ArticleDetailsProps,
} from "$store/components/blog/ArticleDetails.tsx";
import type { LoaderReturnType } from "$live/types.ts";

export interface Props {
  // page?: LoaderReturnType<string | null>;
  page?: ArticleDetailsProps;
}

/**
 * Rendered when a not found is returned by any of the loaders run on this page
 */
function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <span class="font-medium text-2xl">Página não encontrada</span>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function BlogDetails({ page }: Props) {
  return (
    <div class="py-0 sm:py-10">
      {page
        ? (
          <ArticleDetails
            banner={page.banner}
            post={page.post}
            relatedPosts={page.relatedPosts}
          />
        )
        : <NotFound />}
    </div>
  );
}

export default BlogDetails;
