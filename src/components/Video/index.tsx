import { DefaultUi, Player, Youtube } from '@vime/react';
import { useGetLessonBySlugQuery } from '../../graphql/generated';
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react';
import { Buttons, Class, Downloads, InfoArea, VideoArea } from './styles';
import '@vime/core/themes/default.css';

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
    fetchPolicy: 'no-cache',
  });

  if (!data || !data.lesson) {
    return (
      <div className="w-full flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <VideoArea>
        <div className="video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </VideoArea>

      <InfoArea>
        <Class>
          <div className="flex-1">
            <h1>{data.lesson.title}</h1>
            <p>{data.lesson.description}</p>
            {data.lesson.teacher && (
              <div className="teacher">
                <img src={data.lesson.teacher.avatarURL} alt="Avatar" />
                <div>
                  <strong>{data.lesson.teacher.name}</strong>
                  <span>{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )}
          </div>

          <Buttons>
            <a href="#">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a href="#">
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </Buttons>
        </Class>

        <Downloads>
          <a href="#" className="item">
            <div className="content">
              <div className="icon">
                <FileArrowDown size={40} />
              </div>
              <div className="text">
                <strong className="title">Material complementar</strong>
                <p className="description">Acesse o material complementar para acelerar o seu desenvolvimento</p>
              </div>
            </div>
            <div className="arrow">
              <CaretRight size={24} />
            </div>
          </a>

          <a href="#" className="item">
            <div className="content">
              <div className="icon">
                <Image size={40} />
              </div>
              <div className="text">
                <strong className="title">Wallpapers exclusivos</strong>
                <p className="description">Baixe wallpapers exclusivos e personalize a sua máquina</p>
              </div>
            </div>
            <div className="arrow">
              <CaretRight size={24} />
            </div>
          </a>
        </Downloads>
      </InfoArea>
    </div>
  );
}
