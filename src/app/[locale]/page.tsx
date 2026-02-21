import { T, Num, Plural, Currency, Branch, Var } from "gt-next";
import { LocaleSelector } from "gt-next/client";
import { getGT } from "gt-next/server";

function DifficultyBadge({ level }: { level: string }) {
  return (
    <T id="difficulty.badge">
      <Branch
        branch={level}
        beginner={
          <span className="inline-block rounded-full bg-emerald-900/50 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-emerald-800">
            Beginner
          </span>
        }
        intermediate={
          <span className="inline-block rounded-full bg-amber-900/50 px-3 py-1 text-xs font-medium text-amber-400 ring-1 ring-amber-800">
            Intermediate
          </span>
        }
        advanced={
          <span className="inline-block rounded-full bg-rose-900/50 px-3 py-1 text-xs font-medium text-rose-400 ring-1 ring-rose-800">
            Advanced
          </span>
        }
      />
    </T>
  );
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${
              i < fullStars
                ? "text-amber-400"
                : i === fullStars && hasHalf
                ? "text-amber-400/50"
                : "text-neutral-700"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-neutral-400">
        <Num>{rating}</Num>
      </span>
    </div>
  );
}

function CourseCard({
  title,
  description,
  instructor,
  rating,
  students,
  price,
  hours,
  difficulty,
  category,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
  instructor: string;
  rating: number;
  students: number;
  price: number;
  hours: number;
  difficulty: string;
  category: React.ReactNode;
}) {
  return (
    <div className="group flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-neutral-700 hover:bg-neutral-900">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
          {category}
        </span>
        <DifficultyBadge level={difficulty} />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-neutral-100">{title}</h3>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-400">{description}</p>

      <div className="mb-4">
        <p className="text-sm text-neutral-500">
          <T id="course.taught-by">
            {"Taught by "}
            <Var><span className="text-neutral-300">{instructor}</span></Var>
          </T>
        </p>
      </div>

      <div className="mb-4">
        <StarRating rating={rating} />
      </div>

      <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
        <div className="flex items-center gap-4 text-sm text-neutral-500">
          <T id="course.students">
            <Plural
              n={students}
              singular={<><Num>{students}</Num>{" student"}</>}
              plural={<><Num>{students}</Num>{" students"}</>}
            />
          </T>
          <span className="text-neutral-700">|</span>
          <T id="course.hours">
            <Num>{hours}</Num>{" hours"}
          </T>
        </div>
        <span className="text-lg font-semibold text-neutral-100">
          <Currency currency="USD">{price}</Currency>
        </span>
      </div>
    </div>
  );
}

export default async function Home() {
  const gt = await getGT();
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100">
              <span className="text-sm font-bold text-neutral-900">GT</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-neutral-100">General Translation</span>
              <span className="text-xs text-neutral-500">
                <T id="header.subtitle">Education Platform</T>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/gt-examples/education-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 transition-colors hover:text-neutral-100"
              aria-label={gt("GitHub")}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <T id="hero.section">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-100">
              Course Catalog
            </h1>
            <p className="max-w-2xl text-lg text-neutral-400">
              Explore courses taught by industry experts. From programming to business strategy, find the skills you need to advance your career.
            </p>
          </T>
        </div>
      </section>

      {/* Category filters */}
      <section className="border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex gap-2 overflow-x-auto">
            <button className="whitespace-nowrap rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900">
              <T id="filter.all">All</T>
            </button>
            <button className="whitespace-nowrap rounded-lg bg-neutral-800/50 px-4 py-2 text-sm font-medium text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200">
              <T id="filter.programming">Programming</T>
            </button>
            <button className="whitespace-nowrap rounded-lg bg-neutral-800/50 px-4 py-2 text-sm font-medium text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200">
              <T id="filter.design">Design</T>
            </button>
            <button className="whitespace-nowrap rounded-lg bg-neutral-800/50 px-4 py-2 text-sm font-medium text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200">
              <T id="filter.business">Business</T>
            </button>
            <button className="whitespace-nowrap rounded-lg bg-neutral-800/50 px-4 py-2 text-sm font-medium text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200">
              <T id="filter.data-science">Data Science</T>
            </button>
          </div>
        </div>
      </section>

      {/* Course grid */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CourseCard
            title={<T id="course.1.title">Full-Stack Web Development</T>}
            description={<T id="course.1.desc">Build modern web applications from scratch using React, Node.js, and PostgreSQL. Covers authentication, deployment, and testing.</T>}
            instructor="Sarah Chen"
            rating={4.8}
            students={12847}
            price={89.99}
            hours={42}
            difficulty="intermediate"
            category={<T id="category.programming">Programming</T>}
          />
          <CourseCard
            title={<T id="course.2.title">UI/UX Design Fundamentals</T>}
            description={<T id="course.2.desc">Master the principles of user interface and user experience design. Learn Figma, prototyping, and design systems.</T>}
            instructor="Marcus Rivera"
            rating={4.9}
            students={8523}
            price={69.99}
            hours={28}
            difficulty="beginner"
            category={<T id="category.design">Design</T>}
          />
          <CourseCard
            title={<T id="course.3.title">Machine Learning with Python</T>}
            description={<T id="course.3.desc">From linear regression to deep neural networks. Hands-on projects with scikit-learn, TensorFlow, and real-world datasets.</T>}
            instructor="Dr. Yuki Tanaka"
            rating={4.7}
            students={15392}
            price={119.99}
            hours={56}
            difficulty="advanced"
            category={<T id="category.data-science">Data Science</T>}
          />
          <CourseCard
            title={<T id="course.4.title">Product Management Essentials</T>}
            description={<T id="course.4.desc">Learn to define product strategy, prioritize features, and ship products that users love. Includes case studies from top companies.</T>}
            instructor="David Okonkwo"
            rating={4.6}
            students={6241}
            price={79.99}
            hours={18}
            difficulty="beginner"
            category={<T id="category.business">Business</T>}
          />
          <CourseCard
            title={<T id="course.5.title">Advanced TypeScript Patterns</T>}
            description={<T id="course.5.desc">Deep dive into generics, conditional types, mapped types, and architectural patterns for large-scale TypeScript applications.</T>}
            instructor="Elena Vogt"
            rating={4.8}
            students={4187}
            price={99.99}
            hours={32}
            difficulty="advanced"
            category={<T id="category.programming">Programming</T>}
          />
          <CourseCard
            title={<T id="course.6.title">Data Visualization and Storytelling</T>}
            description={<T id="course.6.desc">Transform raw data into compelling visual narratives using D3.js, Observable, and modern charting libraries.</T>}
            instructor="Amara Diallo"
            rating={4.5}
            students={3819}
            price={74.99}
            hours={24}
            difficulty="intermediate"
            category={<T id="category.data-science">Data Science</T>}
          />
          <CourseCard
            title={<T id="course.7.title">Brand Identity Design</T>}
            description={<T id="course.7.desc">Create cohesive brand identities from logo design to complete visual systems. Typography, color theory, and brand guidelines.</T>}
            instructor="Liam Nakamura"
            rating={4.7}
            students={5672}
            price={84.99}
            hours={22}
            difficulty="intermediate"
            category={<T id="category.design">Design</T>}
          />
          <CourseCard
            title={<T id="course.8.title">Financial Modeling and Valuation</T>}
            description={<T id="course.8.desc">Build professional financial models, perform DCF analysis, and understand valuation methodologies used by investment banks.</T>}
            instructor="Priya Sharma"
            rating={4.6}
            students={7893}
            price={109.99}
            hours={36}
            difficulty="advanced"
            category={<T id="category.business">Business</T>}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <p className="text-center text-sm text-neutral-600">
            <T id="footer.disclaimer">
              This is a demo application built to showcase{" "}
              <a href="https://generaltranslation.com" className="underline hover:text-neutral-400">General Translation</a>{" "}
              internationalization capabilities. Course data is fictional and for demonstration purposes only.
            </T>
          </p>
        </div>
      </footer>
    </div>
  );
}
