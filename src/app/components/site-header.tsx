"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { channel, telegram } from "../content";

type SiteHeaderProps = { tone?: "light" | "dark" };

const menuItems = [
  ["01", "Главная", "/", "начать путешествие"],
  ["02", "Услуги", "/services", "расклады и ритуалы"],
  ["03", "Об Авроре", "/about", "история и ценности"],
  ["04", "Обучение", "/training", "индивидуальный путь"],
  ["05", "Закрытый клуб", "/club", "aurora’s space"],
] as const;

export function SiteHeader({ tone = "light" }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menuOpen", open);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menuOpen");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <nav className={`nav shell siteNav ${tone === "dark" ? "navDark" : ""}`} aria-label="Основная навигация">
        <Link className="brand" href="/"><Image className="brandMascot" src="/aurora-cat.svg" alt="" width={40} height={40} />aurora’s room <span>☾</span></Link>
        <div className="navActions">
          <a className="navCta" href={telegram} target="_blank" rel="noreferrer">написать ↗</a>
          <button
            className="menuButton"
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span>{open ? "закрыть" : "меню"}</span>
            <i aria-hidden="true"><b /><b /></i>
          </button>
        </div>
      </nav>

      <div className={`menuOverlay ${open ? "isOpen" : ""}`} id="site-menu" aria-hidden={!open}>
        <div className="menuSky" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        <div className="menuMoon" aria-hidden="true">☾</div>
        <div className="menuConstellation" aria-hidden="true">✦　·　✧<br />　☼　·　✦</div>
        <div className="menuCat menuCatOne" aria-hidden="true"><Image src="/aurora-cat.png" alt="" width={70} height={70} /><small>я тоже<br />выбираю путь</small></div>
        <div className="menuCat menuCatTwo" aria-hidden="true">🐈<small>куда<br />сегодня?</small></div>

        <div className="shell menuPanel">
          <div className="menuTopline">
            <span>AURORA’S ROOM / WORLDWIDE</span>
            <span>ТАРО • РИТУАЛЫ • ПУТЕШЕСТВИЯ</span>
          </div>
          <div className="menuGrid">
            <div className="menuIntro">
              <p>навигация по внутренней вселенной</p>
              <h2>Куда<br /><em>отправимся?</em></h2>
              <a href={channel} target="_blank" rel="noreferrer">читать Telegram-канал ↗</a>
            </div>
            <div className="menuLinks">
              {menuItems.map(([number, title, href, note], index) => (
                <Link href={href} key={href} onClick={() => setOpen(false)} style={{ "--menu-i": index } as React.CSSProperties}>
                  <span>{number}</span><b>{title}</b><small>{note}</small><i>↗</i>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="menuClouds" aria-hidden="true">{Array.from({ length: 14 }).map((_, index) => <i key={index} />)}</div>
      </div>
    </>
  );
}
