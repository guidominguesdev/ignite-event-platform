import { useParams } from 'react-router-dom';
import { MainHeader } from '../components/Header';
import { ClassesSidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <ClassesSidebar />
      </main>
    </div>
  );
}
