import React, { useEffect } from 'react';
import './main.css';
import createCubes from '../js/cube-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const MainContent = () => {
    useEffect(() => {
      const numberOfCubes = 70; // Задайте количество кубиков
      createCubes(numberOfCubes);
      AOS.init(); // Инициализация AOS
    }, []);
    return (
    <div class="frame-2" id='hero'>
        <div class="contener-1" data-aos="fade-down">
          <img class="image-4" src="image-40.png" />
          <div class="frame-40">
            <div class="volter-nadpis">
              Найдите свой идеальный проект с помощью краудфандинга Volter
            </div>
            <div class="volter-crowdfunding">
              Добро пожаловать в Volter Crowdfunding, где вас ждет проект вашей мечты.
              От инновационных стартапов до творческих начинаний и эффективных
              инициатив - у нас есть возможности воплотить в жизнь любое видение и
              цель.
            </div>
            <div class="frame-41">
              <div class="frame-42">
                <div class="div">О нас</div>
              </div>
              <div class="frame-43">
                <div class="div2">Услуги</div>
              </div>
            </div>
          </div>
          <div class="frame-3">
            <img class="image-6" src="image-60.png" />
            <img class="image-5" src="image-50.png" />
            <div class="rectangle-2"></div>
            <div class="frame-66">
              <div class="rectangle-1"></div>
              <div class="rectangle-3"></div>
              <img
                class="acetone-2024918-21407-209-1"
                src="acetone-2024918-21407-209-10.png"
              />
            </div>
            <div class="rectangle-4"></div>
            <img class="vector-10" src="vector-100.svg" />
            <img class="vector-11" src="vector-110.svg" />
            <div class="rectangle-5"></div>
            <div class="rectangle-6"></div>
            <div class="rectangle-7"></div>
            <div class="rectangle-8"></div>
            <img class="rectangle-12" src="rectangle-120.png" />
          </div>
          <div class="ellipse-3"></div>
          <div class="ellipse-4"></div>
          <div class="ellipse-5"></div>
        </div>
        <div class="contener-2" data-aos="fade-up">
          <div class="frame-114">
            <div class="rectangle-62"></div>
            <div class="rectangle-72"></div>
            <div class="rectangle-82"></div>
            <img class="image-3" src="image-30.png" />
            <div class="rectangle-9"></div>
            <div class="rectangle-10"></div>
            <div class="rectangle-11"></div>
            <div class="ellipse-32"></div>
            <div class="ellipse-42"></div>
            <div class="ellipse-52"></div>
            <div class="ellipse-6"></div>
            <div class="frame-67">
              <img
                class="acetone-2024918-214737-578-1"
                src="acetone-2024918-214737-578-10.png"
              />
            </div>
            <div class="frame-68">
              <img class="image-1" src="image-10.png" />
            </div>
            <div class="frame-69">
              <img class="image-12" src="image-11.png" />
            </div>
          </div>
          <div class="frame-133">
            <div class="volter2">О краудфандинге Volter</div>
            <div class="volter3">
              В Volter краудфандинг мы больше, чем просто платформа для финансирования
              – мы ваш преданный партнер в воплощении ваших проектных идей в жизнь.
              Обладая глубоким пониманием краудфандинга и стремясь к исключительной
              поддержке, мы специализируемся на предоставлении создателям проектов
              ресурсов, необходимых им для воплощения своих идей в реальность в
              динамичном мире краудфандинга.
            </div>
            <div class="volter-volter">
              Независимо от того, запускаете ли вы техническую инновацию, социальную
              кампанию или творческое начинание, наша опытная команда готова воплотить
              ваши мечты о краудфандинге в реальность. С помощью краудфандинга Volter
              достичь целей вашего проекта еще никогда не было так просто. Позвольте
              нам помочь вам изучить возможности краудфандинга, обеспечив
              бесперебойное и успешное финансирование. Добро пожаловать в Volter
              краудфандинг, где инновационные проекты получают исключительную
              поддержку.
            </div>
          </div>
        </div>
        <div class="contener-3" data-aos="fade-up">
          <div class="frame-48">
            <div class="rectangle-92"></div>
            <div class="rectangle-102"></div>
            <div class="rectangle-112"></div>
            <div class="rectangle-122"></div>
          </div>
          <div class="frame-49">
            <div class="rectangle-123"></div>
            <div class="rectangle-13"></div>
            <div class="rectangle-14"></div>
            <div class="rectangle-15"></div>
          </div>
          <div class="frame-47">
            <div class="rectangle-124"></div>
            <div class="rectangle-132"></div>
            <div class="rectangle-142"></div>
            <div class="rectangle-152"></div>
          </div>
          <div class="div3">Исследование проекта</div>
          <div class="div4">Помощь</div>
          <div class="div5">Понимание рынка</div>
          <div class="div6">
            Используя нашу платформу и отраслевой опыт, мы проводим комплексный поиск
            проектов с учетом ваших конкретных критериев, гарантируя, что вы найдете
            идеальную возможность для краудфандинга, чтобы воплотить свое видение в
            жизнь.
          </div>
          <div class="div7">
            Наша преданная своему делу команда оказывает индивидуальную помощь на
            каждом этапе, начиная с создания вашего проекта и заканчивая достижением
            ваших финансовых целей, обеспечивая бесперебойную работу на протяжении
            всего процесса краудфандинга.
          </div>
          <div class="div8">
            Мы предлагаем ценную информацию о краудфандинговом ландшафте, помогая вам
            ориентироваться в многообразии доступных возможностей и находить
            платформу, соответствующую целям и ценностям вашего проекта.
          </div>
        </div>
        <div class="contener-4" data-aos="fade-up">
          <div class="div9">Ваш путь к успеху в краудфандинге</div>
        </div>
        <div class="contener-5" data-aos="fade-up">
          <div class="frame-134">
            <div class="rectangle-16"></div>
            <div class="ellipse-7"></div>
            <div class="rectangle-17"></div>
            <div class="ellipse-8"></div>
          </div>
          <div class="frame-52">
            <div class="div10">Рома Воронин</div>
            <div class="volter-volter2">
              Сотрудничество с краудфандингом Volter изменило для меня правила игры.
              Как создатель проекта, ориентирующийся в пространстве краудфандинга, я
              столкнулся с трудностями. Volter предоставил неоценимые рекомендации,
              ответил на все мои вопросы и помог мне получить финансирование для моего
              успешного проекта. Я благодарен им за поддержку на протяжении всего
              процесса краудфандинга.
            </div>
          </div>
        </div>
        <div className="contener-6"
        style={{
            backgroundImage: "url(contener-60.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }} data-aos="fade-up">
          <div class="frame-59">
            <div class="frame-56">
              <div class="frame-492">
                <div class="rectangle-153"></div>
                <div class="rectangle-125"></div>
                <div class="rectangle-143"></div>
                <div class="rectangle-133"></div>
              </div>
              <div class="div11">Получите наши эксклюзивные возможности</div>
              <div class="div12">
                Подпишитесь на уникальные возможности проекта, варианты финансирования
                и консультации экспертов. Заполните форму ниже, чтобы начать работу!
              </div>
              <div class="frame-57"></div>
              <div class="frame-58"></div>
              <div class="frame-422">
                <div class="div">Регистрация</div>
              </div>
            </div>
          </div>
        </div>
        <div class="contener-7" data-aos="fade-up">
          <div class="div13">Связь с нами</div>
          <div class="frame-61">
            <div class="div14">Контакты</div>
            <div class="and-999-hig-gmail-com">and999hig@gmail.com</div>
          </div>
          <div class="frame-62">
            <div class="div14">Местонахождение</div>
            <div class="div15">Россия, Москва, Орехово-Борисово-Южное</div>
            <div class="div15">Метро - Домодедовская</div>
          </div>
          <div class="frame-63">
            <div class="div14">Открыты</div>
            <div class="_7-00-19-00">С 7:00 до 19:00</div>
          </div>
        </div>
    </div>      
    );
};