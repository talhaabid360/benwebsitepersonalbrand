import { ArrowDown, ArrowLeft, MapPin } from "lucide-react";
import { timeline } from "./data";

function TimelinePage() {
  return (
    <div className="site-shell timeline-page">
      <header className="site-header timeline-page__header">
        <a className="site-brand" href="/" aria-label="Ben Swann home">
          <img
            src="/media/ben-swann-signature.webp"
            alt="Ben Swann"
          />
        </a>

        <a className="timeline-page__back" href="/">
          <ArrowLeft aria-hidden="true" />
          Back home
        </a>
      </header>

      <main>
        <section
          className="timeline-page__hero"
          aria-labelledby="timeline-page-title"
        >
          <img
            className="timeline-page__hero-image"
            src="/media/timeline/timeline.webp"
            alt="Ben Swann"
            fetchPriority="high"
          />

          <div
            className="timeline-page__hero-shade"
            aria-hidden="true"
          />

          <h1 id="timeline-page-title">Ben’s Story</h1>

          <a
            className="timeline-page__scroll"
            href="#full-timeline"
          >
            Scroll
            <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <section
          className="timeline-section timeline-page__record"
          id="full-timeline"
        >
          <div className="timeline-heading shell">
            <p className="eyebrow">The complete record</p>

            <h2>
              A life behind
              <br />
              And beyond the headlines.
            </h2>

            <p>
              From an accelerated education to award-winning broadcasting, independent media and public controversy.
            </p>
          </div>

          <div className="timeline-desktop shell">
            <div className="timeline-line" aria-hidden="true">
              <span className="timeline-line__fill" />
            </div>

            {timeline.map((entry, index) => (
              <article
                className={`timeline-card ${
                  index % 2
                    ? "timeline-card--right"
                    : "timeline-card--left"
                }`}
                key={`${entry.year}-${entry.title}`}
              >
                <div
                  className="timeline-card__year"
                  aria-hidden="true"
                >
                  {entry.year}
                </div>

                <div
                  className="timeline-card__dot"
                  aria-hidden="true"
                />

                <div className="timeline-card__media">
                  <img
                    src={entry.image}
                    alt={entry.imageAlt}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>

                <div className="timeline-card__copy">
                  <span className="timeline-card__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{entry.title}</h3>

                  <p className="timeline-card__location">
                    <MapPin aria-hidden="true" />
                    {entry.location}
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
        </section>
      </main>
    </div>
  );
}

export default TimelinePage;
