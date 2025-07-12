import { ArticleDetails } from "@/entities/Article/ui/ArticleDetails/ArticleDetailts";

interface PageProps {
  params: Promise<{ id: string }>;
}

const ArticleDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;

  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  );
};

export default ArticleDetailsPage;
