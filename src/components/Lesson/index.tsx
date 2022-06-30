import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { Date, Class, LessonArrow, Title, Header, Status, Type } from './styles';

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

  return (
    <div
      className={classNames('', {
        'cursor-not-allowed': !isLessonAvailable,
      })}
    >
      <Link
        to={`/event/lesson/${props.slug}`}
        className={classNames('', {
          'pointer-events-none': !isLessonAvailable,
        })}
      >
        <Date>{availableDateFormatted}</Date>
        <Class
          className={classNames('', {
            active: isActiveLesson,
          })}
        >
          <LessonArrow
            className={classNames('', {
              hidden: !isActiveLesson,
            })}
          />
          <Header>
            {isLessonAvailable ? (
              <Status
                className={classNames('', {
                  released: !isActiveLesson,
                })}
              >
                <CheckCircle size={20} weight="bold" />
                Conteúdo liberado
              </Status>
            ) : (
              <Status
                className={classNames('', {
                  soon: !isActiveLesson,
                })}
              >
                <Lock size={20} weight="bold" />
                Em breve
              </Status>
            )}
            <Type
              className={classNames('', {
                active: isActiveLesson,
              })}
            >
              {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
            </Type>
          </Header>
          <Title
            className={classNames('', {
              active: isActiveLesson,
            })}
          >
            {props.title}
          </Title>
        </Class>
      </Link>
    </div>
  );
}
