import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { Date, Class, Title, Header, Status, Type } from './styles';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMM' • 'k'h'mm", {
    locale: ptBR,
  });
  const isActiveLesson = slug === props.slug;
  const url = isLessonAvailable ? `/event/lesson/${props.slug}` : `/event`;

  return (
    <Link to={url} className={classNames({ 'pointer-events-none opacity-medium': !isLessonAvailable })}>
      <Class className={classNames({ active: isActiveLesson })}>
        <Header>
          {isLessonAvailable ? (
            <Status variant={'released'}>
              <CheckCircle size={20} weight="bold" />
              Conteúdo liberado
            </Status>
          ) : (
            <div>
              <Date>{availableDateFormatted}</Date>
              <Status variant={'soon'}>
                <Lock size={20} weight="bold" />
                Em breve
              </Status>
            </div>
          )}
          <Type className={classNames({ active: isActiveLesson })}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </Type>
        </Header>
        <Title className={classNames({ active: isActiveLesson })}>{props.title}</Title>
      </Class>
    </Link>
  );
}
