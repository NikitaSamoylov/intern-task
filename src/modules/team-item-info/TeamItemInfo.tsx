import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import { TTeamItem } from '../../types/team';
import styles from './TeamItemInfo.module.scss';

const TeamItemInfo: React.FC = () => {
  const { id } = useParams();
  console.log(id)

  const [teamItem, setTeamItem] = useState<TTeamItem>();

  const fetchItem = async () => {
    await fetch(`https://dummyapi.io/data/v1/user/${ id }`, {
      headers: {
        'app-id': '667314da539f807d1f8969bb',
      },
    })
      .then(data => data.json())
      .then(data => setTeamItem(data))
      .catch(e => alert('не удалось получить данные'))
  };

  useEffect(() => {
    fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header>
        <div className={ styles.header }>
          <img src={ teamItem?.picture }
            alt={ teamItem?.firstName }
            className={ styles.header__img }
          />
          <div className={ styles.content }>
            <h1 className={ styles.content__title }>
              { teamItem?.firstName }
              <span className={ styles.content__title_lastName }>
                { teamItem?.lastName }
              </span>
            </h1>
            <span className={ styles.content__description }>
              Партнер
            </span>
          </div>
        </div>
      </Header>
      <section className="container">
        <div className={ styles.person }>
          <div className={ styles.info }>
            <p className={ styles.info__item }>
              Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.
            </p>
            <p className={ styles.info__item }>
              В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".
            </p>
            <p className={ styles.info__item }>
              Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.
            </p>
          </div>
          <div className={ styles.contacts }>
            <span className={ styles.contacts__item }>
              <a href="tel:+79543334455"
                className={ styles.contacts__phone }>
                +7 (954) 333-44-55
              </a>
            </span>
            <span className={ styles.contacts__item }>
              <a href="sykfafkar@gmail.com"
                className={ styles.contacts__email }>
                sykfafkar@gmail.com
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  )
};

export default TeamItemInfo;