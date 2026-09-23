import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Menu,
  Play,
  X,
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gallery, pressLogos, timeline } from "./data";

gsap.registerPlugin(ScrollTrigger);

const youtubeUrl = "https://www.youtube.com/@TheBenSwann";

function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const mobileTimelineRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [heroVideoReady, setHeroVideoReady] = useState(false);
  const [headerSolid, setHeaderSolid] = useState(false);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timer = window.setTimeout(
      () => setIntroComplete(true),
      reduceMotion ? 60 : 1050,
    );
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.classList.toggle("menu-is-open", menuOpen);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      setHeaderSolid(window.scrollY > 60);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const context = gsap.context(() => {
      gsap
        .timeline({ delay: 0.85, defaults: { ease: "power4.out" } })
        .fromTo(
          ".hero-name__main",
          { yPercent: 110, rotate: 1.5 },
          { yPercent: 0, rotate: 0, duration: 1.25 },
        )
        .fromTo(
          ".hero-name__echo",
          { xPercent: -12, opacity: 0 },
          { xPercent: 0, opacity: 0.26, duration: 1.1 },
          "-=0.8",
        )
        .fromTo(
          ".hero-kicker, .hero-scroll-cue",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
          "-=0.65",
        );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 54, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      const desktop = gsap.matchMedia();
      desktop.add("(min-width: 900px) and (min-height: 680px)", () => {
        gsap.to(".hero-media", {
          yPercent: 10,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(".hero-name", {
          yPercent: -18,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "85% top",
            scrub: 0.8,
          },
        });
        gsap.fromTo(
          ".timeline-line__fill",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".timeline-desktop",
              start: "top 52%",
              end: "bottom 52%",
              scrub: true,
            },
          },
        );
        gsap.utils
          .toArray<HTMLElement>(".timeline-card__media")
          .forEach((element) => {
            gsap.fromTo(
              element.querySelector("img"),
              { yPercent: -5, scale: 1.05 },
              {
                yPercent: 5,
                scale: 1.05,
                ease: "none",
                scrollTrigger: {
                  trigger: element,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              },
            );
          });
      });
      return () => desktop.revert();
    }, rootRef);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh, { once: true });
    ScrollTrigger.refresh();
    return () => {
      window.removeEventListener("load", refresh);
      context.revert();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const scrollMobileTimeline = (direction: 1 | -1) => {
    const viewport = mobileTimelineRef.current;
    if (!viewport) return;
    viewport.scrollBy({
      left: direction * viewport.clientWidth * 0.88,
      behavior: "smooth",
    });
  };

  const updateTimelineIndex = () => {
    const viewport = mobileTimelineRef.current;
    if (!viewport) return;
    const cards = Array.from(
      viewport.querySelectorAll<HTMLElement>(".timeline-mobile-card"),
    );
    const center = viewport.scrollLeft + viewport.clientWidth / 2;
    let closest = 0;
    let distance = Number.POSITIVE_INFINITY;
    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const nextDistance = Math.abs(center - cardCenter);
      if (nextDistance < distance) {
        closest = index;
        distance = nextDistance;
      }
    });
    setActiveTimelineIndex(closest);
  };

  return (
    <div ref={rootRef} className="site-shell">
      <div className="page-progress" ref={progressRef} aria-hidden="true" />

      <div
        className={`intro-loader ${introComplete ? "intro-loader--complete" : ""}`}
        aria-hidden="true"
      >
        <div className="intro-loader__panel intro-loader__panel--left" />
        <div className="intro-loader__panel intro-loader__panel--right" />
        <div className="intro-loader__mark">
          <img src="/media/ben-swann-signature.webp" alt="" />
          <span>Journalist · Broadcaster · Founder</span>
        </div>
      </div>

      <header className={`site-header ${headerSolid ? "site-header--solid" : ""}`}>
        <a className="site-brand" href="#home" aria-label="Ben Swann home">
          <img src="/media/ben-swann-signature.webp" alt="Ben Swann" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#story">Story</a>
          <a href="#timeline">Timeline</a>
          <a href="#work">Work</a>
          <a href="#watch">Watch</a>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        id="mobile-menu"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {[
            ["01", "Story", "#story"],
            ["02", "Timeline", "#timeline"],
            ["03", "Work", "#work"],
            ["04", "Watch", "#watch"],
          ].map(([number, label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              <span>{number}</span>
              {label}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </nav>
        <p>Truth has no obligation to be comfortable.</p>
      </div>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <picture className="hero-media__poster">
              <source
                srcSet="/media/video/hero-mobile-poster.webp"
                media="(max-width: 699px)"
              />
              <img
                src="/media/video/hero-desktop-poster.webp"
                alt=""
                fetchPriority="high"
              />
            </picture>
            <video
              className={heroVideoReady ? "hero-media__video--ready" : ""}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={() => setHeroVideoReady(true)}
            >
              <source
                src="/media/video/hero-mobile.mp4"
                media="(max-width: 699px)"
                type="video/mp4"
              />
              <source src="/media/video/hero-desktop.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-name">
            <div className="hero-name__mask">
              <h1 className="hero-name__main" id="hero-title">
                Ben Swann
              </h1>
            </div>
            <p className="hero-kicker">Journalist · Broadcaster · Founder</p>
          </div>
          <a className="hero-scroll-cue" href="#story">
            <span>Enter the story</span>
            <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <section className="story" id="story">
          <div className="story-grid">
            <div className="story-copy" data-reveal>
              <p className="eyebrow">01 — The story</p>
              <h2>
                FROM NEWSROOMS TO INDEPENDENT MEDIA: A CAREER BUILT
                ON ASKING THE QUESTIONS OTHERS WOULDN’T. 
              </h2>
              <p className="story-lede">
                For more than two decades, Ben Swann has moved through local
                newsrooms, national broadcasts and independent media—building a
                career shaped by investigation, disruption and controversy.
              </p>
              <a className="text-link" href="#timeline">
                Follow the full timeline <ArrowDown aria-hidden="true" />
              </a>
            </div>
            <div className="story-portrait" data-reveal>
              <div className="story-portrait__ring" aria-hidden="true" />
              <img
                src="/media/ben-cutout.webp"
                alt="Ben Swann"
                fetchPriority="high"
              />
              <span className="story-portrait__caption">
                <strong>Truth</strong>
                <small>Without permission</small>
              </span>
            </div>
          </div>
          <div className="facts" data-reveal>
            <article>
              <span>01</span>
              <strong>Two degrees by 16</strong>
              <p>Early academic discipline shaped a research-led career.</p>
            </article>
            <article>
              <span>02</span>
              <strong>Murrow & Emmy winner</strong>
              <p>Recognition earned through local and investigative reporting.</p>
            </article>
            <article>
              <span>03</span>
              <strong>Truth in Media founder</strong>
              <p>An independent platform built beyond the newsroom.</p>
            </article>
          </div>
        </section>

        <section className="press" aria-labelledby="press-title">
          <div className="press-heading shell" data-reveal>
            <h2 id="press-title">Empowering masses with what’s truth in media.</h2>
          </div>
          <div className="press-marquee" data-overflow-allowed>
            <div className="press-marquee__track">
              {[...pressLogos, ...pressLogos,...pressLogos,...pressLogos].map((logo, index) => (
                <figure key={`${logo.src}-${index}`} aria-hidden={index >= pressLogos.length}>
                  <img src={logo.src} alt={index < pressLogos.length ? logo.alt : ""} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="timeline-section" id="timeline">
          <div className="timeline-heading shell" data-reveal>
            <p className="eyebrow">02 — The record</p>
            <h2>A life behind<br />And beyond<br />the headlines.</h2>
            <p>From an accelerated education to award-winning broadcasting,<br />independent media and public controversy.</p>
          </div>

          <div className="timeline-desktop shell">
            <div className="timeline-line" aria-hidden="true">
              <span className="timeline-line__fill" />
            </div>
            {timeline.map((entry, index) => (
              <article
                className={`timeline-card ${index % 2 ? "timeline-card--right" : "timeline-card--left"}`}
                key={`${entry.year}-${entry.title}`}
              >
                <div className="timeline-card__year" aria-hidden="true">
                  {entry.year}
                </div>
                <div className="timeline-card__dot" aria-hidden="true" />
                <div className="timeline-card__media">
                  <img
                    src={entry.image}
                    alt={entry.imageAlt}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
                <div className="timeline-card__copy" data-reveal>
                  <span className="timeline-card__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{entry.title}</h3>
                  <p className="timeline-card__location">
                    <MapPin aria-hidden="true" /> {entry.location}
                  </p>
                  <p>{entry.description}</p>
                  {entry.quote && (
                    <blockquote>
                      “{entry.quote}”
                      <cite>{entry.quoteAttribution}</cite>
                    </blockquote>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="timeline-mobile" data-overflow-allowed>
            <div className="timeline-mobile__controls shell">
              <span>
                {String(activeTimelineIndex + 1).padStart(2, "0")} / {timeline.length}
              </span>
              <div>
                <button
                  type="button"
                  aria-label="Previous timeline event"
                  onClick={() => scrollMobileTimeline(-1)}
                >
                  <ArrowLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Next timeline event"
                  onClick={() => scrollMobileTimeline(1)}
                >
                  <ArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
            <div
              className="timeline-mobile__viewport"
              ref={mobileTimelineRef}
              onScroll={updateTimelineIndex}
            >
              <div className="timeline-mobile__track">
                {timeline.map((entry, index) => (
                  <article
                    className="timeline-mobile-card"
                    key={`mobile-${entry.year}-${entry.title}`}
                  >
                    <span className="timeline-mobile-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong className="timeline-mobile-card__year">{entry.year}</strong>
                    <div className="timeline-mobile-card__image">
                      <img src={entry.image} alt={entry.imageAlt} loading="lazy" />
                    </div>
                    <div className="timeline-mobile-card__copy">
                      <h3>{entry.title}</h3>
                      <p className="timeline-card__location">
                        <MapPin aria-hidden="true" /> {entry.location}
                      </p>
                      <p>{entry.description}</p>
                      {entry.quote && (
                        <blockquote>
                          “{entry.quote}”
                          <cite>{entry.quoteAttribution}</cite>
                        </blockquote>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="work" id="work">
          <div className="work-heading shell" data-reveal>
            <p className="eyebrow">03 — In the room</p>
            <h2>The work is public.<br />The purpose is personal.</h2>
          </div>
          <div className="gallery" data-overflow-allowed>
            {gallery.map((image, index) => (
              <figure className={`gallery-item gallery-item--${index + 1}`} key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="portrait-break" aria-label="Ben Swann portrait">
          <div className="portrait-break__copy" data-reveal>
            <p className="eyebrow">Journalist · Broadcaster · Founder</p>
            <h2>Stand in the story. Ask the question.</h2>
          </div>
        </section>

        <section className="watch" id="watch">
          <div className="watch-grid shell">
            <div className="watch-copy" data-reveal>
              <p className="eyebrow">04 — Watch Ben Swann</p>
              <h2>The story continues in real time.</h2>
              <p>
                Reporting, investigations, analysis and conversations from Ben
                Swann’s official YouTube channel.
              </p>
              <a className="primary-button" href={youtubeUrl} target="_blank" rel="noreferrer">
                Visit the channel <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <a
              className="watch-visual"
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Watch Ben Swann on YouTube"
            >
              <img src="/media/ben-cutout.webp" alt="" />
              <span className="watch-visual__play">
                <Play aria-hidden="true" fill="currentColor" />
              </span>
              <span className="watch-visual__word" aria-hidden="true">
                Watch
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top shell">
          <img src="/media/ben-swann-signature2.webp?v=2" alt="Ben Swann" />
          <p>
            A record of the work, the questions and the story behind the
            journalist.
          </p>
        </div>
        <div className="footer-bottom shell">
          <span>© {new Date().getFullYear()} Ben Swann</span>
          <a href={youtubeUrl} target="_blank" rel="noreferrer">
            YouTube <ArrowUpRight aria-hidden="true" />
          </a>
          <a href="#home">Back to top <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
