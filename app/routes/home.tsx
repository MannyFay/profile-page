import {
  DiscordIcon,
  GitHubIcon,
  GitLabIcon,
  InstagramIcon,
  LinkedInIcon,
  RssIcon,
  XIcon,
  XingIcon,
} from '~/components/icons';
import { Layout } from '~/components/layout';
import { createMeta, createLinks } from '~/utils/meta';

//-------------------------------------------------------------------------------------------------
// Home Page - Meta Data

export function meta() {
  return createMeta({ title: 'Home', path: '/' });
}

export function links() {
  return createLinks({ path: '/' });
}

//-------------------------------------------------------------------------------------------------
// Home Page - Helpers

function getYearsOfExperience(startYear: number): number {
  return new Date().getFullYear() - startYear;
}

//-------------------------------------------------------------------------------------------------
// Home Page - Component

export default function Home() {
  const yearsOfExperience = getYearsOfExperience(2018);

  return (
    <Layout>
      <main className="mb-14 mt-20 flex max-w-sm flex-col gap-4 px-6 text-center hyphens-auto lg:mt-36 lg:gap-6">
        <h1 className="text-center text-3xl">Hello world!</h1>
        <p className="mb-10 mt-4">
          Dear visitor,
          <br />
          hello and welcome to my website!
        </p>
        <p>My name is Manuel-Hubertus Fay.</p>
        <p>
          I&apos;m a software engineer with more than {yearsOfExperience} years of professional
          experience.
        </p>
        <p>
          On this page,
          <br />I will introduce myself to you.
        </p>
        <p>
          Tab or click on the menu button in the top right to explore who I am, my skills, and my
          projects, as well as to view my documents.
        </p>
        <div className="mt-16 grid grid-cols-4 justify-items-center gap-6">
          <a
            href="https://x.com/FayManny"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X Profile"
            className="text-stone-50 hover:text-stone-300"
          >
            <XIcon size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/manuel-hubertus-fay-0483a919a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-stone-50 hover:text-stone-300"
          >
            <LinkedInIcon size={28} />
          </a>
          <a
            href="https://www.xing.com/profile/ManuelHubertus_Fay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Xing Profile"
            className="text-stone-50 hover:text-stone-300"
          >
            <XingIcon size={28} />
          </a>
          <a
            href="https://blog.mhfay.de/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Blog"
            className="text-stone-50 hover:text-stone-300"
          >
            <RssIcon size={28} />
          </a>
          <a
            href="https://github.com/MannyFay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-stone-50 hover:text-stone-300"
          >
            <GitHubIcon size={28} />
          </a>
          <a
            href="https://gitlab.com/MannyFay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitLab Profile"
            className="text-stone-50 hover:text-stone-300"
          >
            <GitLabIcon size={28} />
          </a>
          <a
            href="https://www.instagram.com/_mannyfay/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="text-stone-50 hover:text-stone-300"
          >
            <InstagramIcon size={28} />
          </a>
          <a
            href="https://discordapp.com/users/915290890111709234"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="text-stone-50 hover:text-stone-300"
          >
            <DiscordIcon size={28} />
          </a>
        </div>
      </main>
    </Layout>
  );
}
