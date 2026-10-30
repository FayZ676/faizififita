import type { ComponentType, ReactNode } from "react";
import { Footer, Nav } from "./site";

// The pieces every product page is built from, so the layout changes here for all of them:
// an intro with the icon and name, the features, then a showcase for each place it runs

type Icon = ComponentType<{ className?: string }>;

export type Feature = { title: string; icon?: Icon; text: ReactNode };

export function ProductPage({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function Intro({
  icon,
  name,
  tagline,
  children,
}: {
  icon: string;
  name: string;
  tagline: string;
  children: ReactNode;
}) {
  return (
    <header className="intro">
      <img className="app-icon" src={icon} alt={`${name}'s icon`} width={256} height={256} />
      <h1>
        {name}. <span>{tagline}</span>
      </h1>
      {children}
    </header>
  );
}

// The standouts, each with a line of its own, and everything else listed in brief under them
export function Features({ features, more }: { features: Feature[]; more?: string[] }) {
  return (
    <section className="showcase">
      <h2 className="section-title">Features</h2>
      <ul className="features">
        {features.map((feature) => (
          <li key={feature.title}>
            {feature.icon && <feature.icon className="feature-icon" />}
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </li>
        ))}
      </ul>
      {more && (
        <>
          <h3 className="more-features-title">And also</h3>
          <ul className="more-features">
            {more.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export function Showcase({
  title,
  icon: Icon,
  id,
  children,
}: {
  title: string;
  icon?: Icon;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section className="showcase" id={id}>
      <h2 className="section-title">
        {Icon && <Icon className="icon" />}
        {title}
      </h2>
      {children}
    </section>
  );
}

// A showcase's words, with the buttons and note that go under them
export function ShowcaseText({ children, actions }: { children: ReactNode; actions?: ReactNode }) {
  return (
    <div className="showcase-text">
      <p>{children}</p>
      {actions}
    </div>
  );
}
