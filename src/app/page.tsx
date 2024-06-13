import NewPost from '@/components/new-post';
import Title from '@/components/title';

export const metadata = {
  title: 'Home | cdbrw',
};

export default function Home() {
  return (
    <section>
      <Title text="Start blogging ..." />

      <NewPost />
    </section>
  );
}
