import Title from '@/components/title';

interface PostPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PostPageProps) {
  return {
    title: `Post ${params.id} | cdbrw`,
  };
}

export default function Page({ params }: PostPageProps) {
  const { id } = params;

  // 1. fetch post by id

  // 2. handle post not found

  return (
    <section className="flex flex-col items-center">
      <Title text={`Post ${id}`} />

      <div className="w-1/2 mb-12">
        <p>{/* 3. display post content */}</p>
      </div>
    </section>
  );
}
