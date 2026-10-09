import Image from "next/image";
import auroraImage from "../../public/aurora.jpg";
import Link from "next/link";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { channel, manager, services, telegram } from "./content";

const faqs = [
  ["Я не знаю, какой расклад выбрать", "И не нужно. Напиши, что тебя беспокоит, — Аврора задаст несколько вопросов и предложит подходящий формат без лишних позиций."],
  ["Как проходит расклад?", "После уточнения запроса ты получаешь разбор в согласованном формате. Аврора объясняет связки карт человеческим языком и оставляет ориентиры для следующих шагов."],
  ["Можно записаться срочно?", "Иногда да — это зависит от загрузки и формата работы. Расклады и ритуалы имеют разные сроки; ближайшее окно лучше уточнить в личных сообщениях."],
  ["Ритуал можно провести в любой день?", "Не всегда. Для части работ подбирается дата и лунная фаза. Перед записью Аврора уточняет запрос и говорит, какой вариант возможен именно сейчас."],
  ["Таро решит всё за меня?", "Нет. Карты помогают увидеть динамику, скрытые факторы и возможные сценарии, но выбор и действия всегда остаются за тобой."],
];

function serviceHref(slug: string) {
  if (slug === "club") return "/club";
  if (slug === "training") return "/training";
  return `/services#${slug}`;
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <SiteHeader />

        <div className="stars" aria-hidden="true">✦　·　☾　·　✧</div>
        <div className="heroGrid shell">
          <div className="heroCopy heroIntro">
            <p className="eyebrow">таро • ритуалы • возвращение к себе</p>
            <h1>Твоя жизнь —<br /><em>по твоему сценарию</em></h1>
            <p className="heroText">Помогу увидеть то, что скрыто, услышать себя и выбрать путь без чужих «надо». Бережно, честно и по любви.</p>
            <div className="heroActions">
              <a className="button buttonPrimary" href={telegram} target="_blank" rel="noreferrer">задать свой вопрос <span>→</span></a>
              <a className="textLink" href={channel} target="_blank" rel="noreferrer">заглянуть в канал ↗</a>
            </div>
            <div className="miniStats">
              <span><b>5 лет</b> практики</span>
              <span><b>2000+</b> спасённых душ</span>
            </div>
          </div>

          <div className="heroArt heroVisual" aria-label="Аврора — таролог">
            <div className="orbit orbitOne" />
            <div className="orbit orbitTwo" />
            <div className="portraitFrame" style={{ position: "relative" }}>
              <Image src={auroraImage} alt="Аврора — таролог и автор aurora’s room" fill priority sizes="(max-width: 800px) 78vw, 390px" />
            </div>
            <div className="sticker stickerTop">guided by<br />the universe ✦</div>
            <div className="sticker stickerCat mascotSticker"><Image src="/aurora-cat.png" alt="Лунный кот — маленький проводник Aurora" width={112} height={112} /><small>мяу, ты на своём пути</small></div>
            <div className="sticker stickerNote">со мной<br /><b>по любви</b> ♡</div>
          </div>
        </div>
        <div className="clouds" aria-hidden="true">
          {Array.from({ length: 13 }).map((_, i) => <i key={i} />)}
        </div>
      </section>

      <div className="homeMarquee" aria-hidden="true"><div>AURORA’S ROOM ✦ ТАРО ✦ РИТУАЛЫ ✦ ПУТЕШЕСТВИЯ ✦ БОЖЕСТВЕННОЕ ВНУТРИ ✦ МЕМНЫЕ КОТЫ ✦ AURORA’S ROOM ✦ ТАРО ✦ РИТУАЛЫ ✦</div></div>

      <section className="recognition">
        <div className="shell recognitionGrid" data-reveal>
          <div>
            <p className="eyebrow dark">кажется, тебе сюда, если…</p>
            <h2>Внутри много<br />вопросов, а ясности — <em>ноль</em></h2>
          </div>
          <div className="recognitionList">
            <p><span>✦</span> Ты застряла между «уйти» и «остаться»</p>
            <p><span>☁</span> Мысли ходят по кругу, а решение не приходит</p>
            <p><span>☾</span> Хочется знать правду — даже если она неудобная</p>
            <p><span>♡</span> Ты устала жить по чужому сценарию</p>
          </div>
        </div>
        <div className="memeLine" data-reveal><span>вселенная отправляет знаки</span><b>ты:</b><span className="memeCat">🐈‍⬛</span><i>«можно как-нибудь понятнее?»</i></div>
      </section>

      <section className="servicesSection" id="services">
        <div className="shell" data-reveal>
          <p className="eyebrow dark">выбери свою точку назначения</p>
          <div className="sectionHeading">
            <h2>Куда отправимся?</h2>
            <span className="catBadge">мяу, всё получится 🐈</span>
          </div>
          <div className="serviceGrid">
            {services.map((service) => (
              <article className={`serviceCard ${service.color}`} key={service.number}>
                <div className="serviceTop"><span>{service.number}</span><small>{service.code}</small></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="serviceMeta"><strong>{service.meta}</strong><Link href={serviceHref(service.slug)} aria-label={`Подробнее: ${service.title}`}>↗</Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="routeSection">
        <div className="shell" data-reveal>
          <div className="routeIntro">
            <p className="eyebrow dark">маршрут построен</p>
            <h2>От «что происходит?»<br />до «теперь я знаю»</h2>
          </div>
          <ol className="routeSteps">
            <li><span>01</span><div><b>Пишешь</b><p>Коротко рассказываешь, что волнует. Можно сумбурно — это нормально.</p></div></li>
            <li><span>02</span><div><b>Выбираем формат</b><p>Аврора помогает сформулировать запрос и предлагает подходящую работу.</p></div></li>
            <li><span>03</span><div><b>Получаешь ясность</b><p>Разбор без загадок и запугивания: что видно, почему и куда смотреть дальше.</p></div></li>
            <li><span>04</span><div><b>Делаешь свой шаг</b><p>Сохраняешь рекомендации и возвращаешь себе право решать.</p></div></li>
          </ol>
          <a className="button buttonInk" href={telegram} target="_blank" rel="noreferrer">построить мой маршрут <span>→</span></a>
        </div>
      </section>

      <section className="aboutSection" id="about">
        <div className="shell aboutGrid" data-reveal>
          <div className="aboutArt">
            <div className="sunDisc" aria-hidden="true">✦</div>
            <div className="aboutPortrait" style={{ position: "relative" }}><Image src={auroraImage} alt="Аврора" fill sizes="(max-width: 800px) 85vw, 480px" /></div>
            <span className="passportStamp">5 YEARS<br />OF MAGIC</span>
            <span className="aboutCat" aria-hidden="true">🐈<small>chief<br />assistant</small></span>
          </div>
          <div className="aboutCopy">
            <p className="eyebrow">приятно познакомиться</p>
            <h2>Я Аврора.<br /><em>Таролог, проводник<br />и человек мира</em></h2>
            <p className="lead">Пять лет я помогаю девушкам видеть ситуацию шире, слышать себя и менять то, что давно просит перемен.</p>
            <p>В моей работе встречаются Таро, практики, ритуалы, энергия разных традиций и очень земная честность. Я не даю туманных фраз ради эффекта — мне важно, чтобы после нашей работы у тебя появилось понимание.</p>
            <p>Меня вдохновляют путешествия, божественные образы, лунные циклы, живые истории и коты, которые всегда приходят именно вовремя.</p>
            <div className="aboutSignature">с любовью, Аврора ♡</div>
            <a className="textLink ink" href={channel} target="_blank" rel="noreferrer">читать aurora’s room ↗</a>
            <Link className="morePageLink" href="/about">больше обо мне →</Link>
          </div>
        </div>
      </section>

      <section className="divineSection">
        <div className="divineCloud divineCloudLeft" aria-hidden="true" />
        <div className="divineCloud divineCloudRight" aria-hidden="true" />
        <div className="shell" data-reveal>
          <div className="divineHeading">
            <div><p className="eyebrow">небо, дорога и немного магии</p><h2>Три части<br /><em>вселенной Авроры</em></h2></div>
            <p>Здесь духовное не прячется от обычной жизни: богини соседствуют с аэропортами, лунные циклы — с решениями, а серьёзные знаки иногда приходят в виде очень мемного кота.</p>
          </div>
          <div className="divineScene">
            <article className="divineCard divineCardMoon">
              <span aria-hidden="true">☾</span><small>DIVINE / INNER LIGHT</small><h3>Божественное</h3><p>Практики и образы, которые помогают услышать интуицию и вспомнить о собственной силе.</p>
            </article>
            <article className="divineCard divineCardRoad">
              <span aria-hidden="true">✦</span><small>WORLD / NEW OPTICS</small><h3>Путешествия</h3><p>Новые города учат смотреть шире: у одной истории всегда существует больше одного маршрута.</p>
            </article>
            <article className="divineCard divineCardCat">
              <span aria-hidden="true">🐈‍⬛</span><small>SIGN / VERY SERIOUS</small><h3>Котики</h3><p>Чтобы на пути к себе не забывать смеяться, дышать и иногда просто лечь на всё красивым боком.</p>
            </article>
            <div className="divineOrbit" aria-hidden="true">AURORA • WORLD • HOME •</div>
          </div>
          <div className="divineActions"><Link href="/about">узнать Аврору ближе →</Link><a href={channel} target="_blank" rel="noreferrer">смотреть жизнь в канале ↗</a></div>
        </div>
      </section>

      <section className="clubSection">
        <div className="clubCloud clubCloudOne" /><div className="clubCloud clubCloudTwo" />
        <div className="shell clubGrid" data-reveal>
          <div>
            <p className="eyebrow dark">aurora’s space • закрытый клуб</p>
            <h2>Место, где можно<br /><em>вернуться к себе</em></h2>
            <p className="clubLead">Без гонки за «лучшей версией». С практиками, поддержкой и маленькими шагами, которые правда меняют жизнь.</p>
            <div className="clubPrice"><b>888 ₽</b><span>/ месяц<br />стоимость из канала</span></div>
            <Link className="button buttonInk" href="/club">узнать про клуб <span>→</span></Link>
          </div>
          <div className="clubTicket">
            <div className="ticketHead"><span>AURORA AIRWAYS</span><b>SPACE 888</b></div>
            <p>В твоём билете:</p>
            <ul><li>медитации и полезные практики</li><li>личные задания и расклады</li><li>больше общения с Авророй</li><li>скидки на работу и тёплый круг своих</li></ul>
            <div className="ticketRoute"><span>NOW<br /><small>точка старта</small></span><i>☁ ✈ ☁</i><span>YOU<br /><small>возвращение</small></span></div>
            <div className="ticketCode">AURORA • 888 • HOME • 888 • AURORA</div>
          </div>
        </div>
      </section>

      <section className="proofSection">
        <div className="shell proofGrid" data-reveal>
          <div className="proofHeadline"><p className="eyebrow dark">не обещания — живые истории</p><h2>Отзывы живут<br />там же, где и магия</h2><p>В Telegram Аврора показывает обратную связь, результаты ритуальных работ и изменения участниц клуба. Без постановочных «кейсов» — как пишут сами девушки.</p><a className="button buttonOutline" href={`${channel}?q=%23отзывыритуалы_А`} target="_blank" rel="noreferrer">смотреть отзывы ↗</a></div>
          <div className="proofNotes">
            <article className="note noteOne"><span>«Возвращение к себе»</span><p>Первый месяц клуба — о том, как снова слышать себя, работать с мышлением и не бросать изменения на полпути.</p><small>из канала aurora’s room</small></article>
            <article className="note noteTwo"><span>Денежные практики</span><p>Аврора делится отзывами о новых возможностях, премиях, клиентах и подарках после ритуальных работ.</p><small>результаты индивидуальны</small></article>
            <div className="proofCat" aria-hidden="true">🐈‍⬛<b>мы всё<br />прочитали</b></div>
          </div>
        </div>
      </section>

      <section className="faqSection" id="faq">
        <div className="shell faqGrid" data-reveal>
          <div className="faqTitle"><p className="eyebrow">перед отправлением</p><h2>Всё, что ты<br />хотела спросить</h2><p>Если твоего вопроса нет — просто напиши. В личных сообщениях можно начать с одного слова: «привет».</p></div>
          <div className="faqList">
            {faqs.map(([question, answer], i) => (
              <details key={question} open={i === 0}>
                <summary><span>{String(i + 1).padStart(2, "0")}</span>{question}<b>+</b></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="finalStars" aria-hidden="true">✦　☾　✧</div>
        <div className="shell finalInner">
          <p className="eyebrow">твой следующий знак</p>
          <h2>Пора перестать<br />гадать <em>без карт</em></h2>
          <p>Напиши, что сейчас не даёт тебе покоя. Дальше разберёмся вместе.</p>
          <div className="finalActions"><a className="button buttonPrimary" href={telegram} target="_blank" rel="noreferrer">написать Авроре <span>→</span></a><a className="managerLink" href={manager} target="_blank" rel="noreferrer">или задать вопрос менеджеру ↗</a></div>
          <div className="finalCat" aria-hidden="true">☁️ 🐈‍⬛ ☁️</div>
        </div>
      </section>

      <SiteFooter />

      <a className="mobileCta" href={telegram} target="_blank" rel="noreferrer">написать Авроре <span>→</span></a>
    </main>
  );
}
