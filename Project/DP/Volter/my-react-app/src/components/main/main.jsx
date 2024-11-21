import React, { useEffect } from 'react';
import './main.css';
import createCubes from '../js/cube-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ButtonVariant1, ButtonVariant2} from '../props/props'

export const Main = ({ className, ...props }) => {
    useEffect(() => {
      const numberOfCubes = 70; // Задайте количество кубиков
      createCubes(numberOfCubes);
      AOS.init(); // Инициализация AOS
    }, []);
    return (
    <div className={"main hero" + className} id='hero'>
    <div className="contener-1" data-aos="fade-down">
      <img className="pattern-1" src="pattern-10.svg" />
      <div className="frame-40">
        <div className="volter">
          Найдите свой идеальный проект с помощью краудфандинга Volter{" "}
        </div>
        <div className="volter-crowdfunding">
          Добро пожаловать в Volter Crowdfunding, где вас ждет проект вашей
          мечты. От инновационных стартапов до творческих начинаний и
          эффективных инициатив - у нас есть возможности воплотить в жизнь
          любое видение и цель.{" "}
        </div>
        <div className="frame-41">
         <ButtonVariant1 text="О нас"/>
         <ButtonVariant2 text="Услуги"/>
        </div>
      </div>
      <div className="frame-3">
        <div className="rectangle-2"></div>
        <img className="pattern-1-1" src="pattern-1-10.svg" />
        <div className="frame-66">
          <div className="rectangle-1"></div>
          <div className="rectangle-3"></div>
          <img
            className="acetone-2024918-21407-209-1"
            src="acetone-2024918-21407-209-10.png"
          />
        </div>
        <div className="rectangle-4"></div>
        <img className="vector-10" src="vector-100.svg" />
        <img className="vector-11" src="vector-110.svg" />
        <div className="rectangle-5"></div>
        <div className="rectangle-6"></div>
        <div className="rectangle-7"></div>
        <img className="pattern-1-2" src="pattern-1-20.svg" />
        <div className="rectangle-8"></div>
        <img className="rectangle-12" src="rectangle-120.png" />
      </div>
      <div className="ellipse-3"></div>
      <div className="ellipse-4"></div>
      <div className="ellipse-5"></div>
    </div>
    <div className="contener-2" data-aos="fade-up">
      <div className="frame-114">
        <div className="rectangle-62"></div>
        <div className="rectangle-72"></div>
        <div className="rectangle-82"></div>
        <div className="rectangle-9"></div>
        <div className="rectangle-10"></div>
        <div className="rectangle-11"></div>
        <div className="ellipse-32"></div>
        <div className="ellipse-42"></div>
        <div className="ellipse-52"></div>
        <div className="ellipse-6"></div>
        <div className="frame-67">
          <img
            className="acetone-2024918-214737-578-1"
            src="acetone-2024918-214737-578-10.png"
          />
        </div>
        <div className="frame-68">
          <img className="image-1" src="image-10.png" />
        </div>
        <div className="frame-69">
          <img className="image-12" src="image-11.png" />
        </div>
        <img className="pattern-1-12" src="pattern-1-11.svg" />
      </div>
      <div className="frame-133">
        <div className="volter2">О краудфандинге Volter </div>
        <div className="volter3">
          В Volter краудфандинг мы больше, чем просто платформа для
          финансирования – мы ваш преданный партнер в воплощении ваших
          проектных идей в жизнь. Обладая глубоким пониманием краудфандинга и
          стремясь к исключительной поддержке, мы специализируемся на
          предоставлении создателям проектов ресурсов, необходимых им для
          воплощения своих идей в реальность в динамичном мире краудфандинга.{" "}
        </div>
        <div className="volter-volter">
          Независимо от того, запускаете ли вы техническую инновацию,
          социальную кампанию или творческое начинание, наша опытная команда
          готова воплотить ваши мечты о краудфандинге в реальность. С помощью
          краудфандинга Volter достичь целей вашего проекта еще никогда не
          было так просто. Позвольте нам помочь вам изучить возможности
          краудфандинга, обеспечив бесперебойное и успешное финансирование.
          Добро пожаловать в Volter краудфандинг, где инновационные проекты
          получают исключительную поддержку.{" "}
        </div>
      </div>
    </div>
    <div className="contener-3" data-aos="fade-up">
      <div className="frame-48">
        <div className="rectangle-92"></div>
        <div className="rectangle-102"></div>
        <div className="rectangle-112"></div>
        <div className="rectangle-122"></div>
      </div>
      <div className="frame-49">
        <div className="rectangle-123"></div>
        <div className="rectangle-13"></div>
        <div className="rectangle-14"></div>
        <div className="rectangle-15"></div>
      </div>
      <div className="frame-47">
        <div className="rectangle-124"></div>
        <div className="rectangle-132"></div>
        <div className="rectangle-142"></div>
        <div className="rectangle-152"></div>
      </div>
      <div className="div">Исследование проекта </div>
      <div className="div2">Помощь </div>
      <div className="div3">Понимание рынка </div>
      <div className="div4">
        Используя нашу платформу и отраслевой опыт, мы проводим комплексный
        поиск проектов с учетом ваших конкретных критериев, гарантируя, что вы
        найдете идеальную возможность для краудфандинга, чтобы воплотить свое
        видение в жизнь.{" "}
      </div>
      <div className="div5">
        Наша преданная своему делу команда оказывает индивидуальную помощь на
        каждом этапе, начиная с создания вашего проекта и заканчивая
        достижением ваших финансовых целей, обеспечивая бесперебойную работу
        на протяжении всего процесса краудфандинга.{" "}
      </div>
      <div className="div6">
        Мы предлагаем ценную информацию о краудфандинговом ландшафте, помогая
        вам ориентироваться в многообразии доступных возможностей и находить
        платформу, соответствующую целям и ценностям вашего проекта.{" "}
      </div>
    </div>
    <div className="contener-4" data-aos="fade-up">
      <div className="div7">Ваш путь к успеху в краудфандинге </div>
    </div>
    <div className="contener-5" data-aos="fade-up">
      <div className="frame-134">
        <div className="rectangle-16"></div>
        <div className="ellipse-7"></div>
        <div className="rectangle-17"></div>
        <div className="ellipse-8"></div>
      </div>
      <div className="frame-52">
        <div className="div8">Рома Воронин </div>
        <div className="volter-volter2">
          Сотрудничество с краудфандингом Volter изменило для меня правила
          игры. Как создатель проекта, ориентирующийся в пространстве
          краудфандинга, я столкнулся с трудностями. Volter предоставил
          неоценимые рекомендации, ответил на все мои вопросы и помог мне
          получить финансирование для моего успешного проекта. Я благодарен им
          за поддержку на протяжении всего процесса краудфандинга.{" "}
        </div>
      </div>
    </div>
    <div className="contener-6">
        <img className="frame-140" src="contener-60.png" />
        <div className="frame-142">
          <div className="frame-56">
            <div className="frame-492">
              <div className="rectangle-153"></div>
              <div className="rectangle-125"></div>
              <div className="rectangle-143"></div>
              <div className="rectangle-133"></div>
            </div>
            <div className="div9">Получите наши эксклюзивные возможности </div>
            <div className="div10">
              Подпишитесь на уникальные возможности проекта, варианты
              финансирования и консультации экспертов. Заполните форму ниже,
              чтобы начать работу!{" "}
            </div>
            <div className="frame-57"></div>
            <div className="frame-58"></div>
            <ButtonVariant1 text="Вход" />
          </div>
        </div>
      </div>
    <div className="contener-7" data-aos="fade-up">
      <div className="div11">Связь с нами </div>
      <div className="frame-61">
        <div className="div12">Контакты </div>
        <div className="and-999-hig-gmail-com">and999hig@gmail.com </div>
      </div>
      <div className="frame-62">
        <div className="div12">Местонахождение </div>
        <div className="div13">Россия, Москва, Орехово-Борисово-Южное </div>
        <div className="div13">Метро - Домодедовская </div>
      </div>
      <div className="frame-63">
        <div className="div12">Открыты </div>
        <div className="_7-00-19-00">С 7:00 до 19:00 </div>
      </div>
    </div>
  </div>
    );
};