import { useGetLessonsQuery } from '../../graphql/generated';
import { Lesson } from '../Lesson';
import { Sidebar, Classes } from './styles';

export function ClassesSidebar() {
  const { data } = useGetLessonsQuery();
  return (
    <Sidebar>
      <span>Cronograma de aulas</span>
      <Classes>
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </Classes>
    </Sidebar>
  );
}
