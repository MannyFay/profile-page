import { Layout } from '~/components/layout';
import { createMeta, createLinks } from '~/utils/meta';

//-------------------------------------------------------------------------------------------------
// About Page - Meta Data

export function meta() {
  return createMeta({ title: 'About', path: '/about' });
}

export function links() {
  return createLinks({ path: '/about' });
}

//-------------------------------------------------------------------------------------------------
// About Page - Helpers

function getYearsSince(startYear: number): number {
  return new Date().getFullYear() - startYear;
}

function getAge(birthYear: number, birthMonth: number, birthDay: number): number {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // getMonth() is 0-indexed -> + 1!
  const currentDay = today.getDate();

  let age = currentYear - birthYear;

  // If birthday hasn't occurred yet this year:
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
  }

  return age;
}

//-------------------------------------------------------------------------------------------------
// About Page - Component

export default function About() {
  const age = getAge(1982, 1, 21);
  const sonsAge = getYearsSince(2013);
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = getYearsSince(2018);
  return (
    <Layout>
      <main className="mb-14 mt-20 max-w-sm px-6 hyphens-auto md:max-w-lg lg:mt-36 lg:max-w-xl">
        <h1 className="text-center text-3xl">About me</h1>

        <section className="mt-10 flex flex-row items-center gap-4">
          <picture className="shrink-0">
            <source
              srcSet="/images/me-oberstdorf.webp"
              type="image/webp"
            />
            <img
              src="/images/me-oberstdorf-min.png"
              alt="Manny Fay in Oberstdorf"
              className="h-auto w-32 rounded-md"
            />
          </picture>
          <p>I&apos;m a {age} year old software engineer from Germany.</p>
        </section>

        <section className="mt-12">
          <h2 className="mb-2 text-2xl">Roots</h2>
          <p>Originally, I&apos;m from the beautiful town of Oberstdorf in Allgäu,</p>
          <picture className="shrink-0">
            <source
              srcSet="/images/oberstdorf.webp"
              type="image/webp"
            />
            <img
              src="/images/oberstdorf-min.png"
              alt="Overview of the alps in Oberstdorf"
              className="my-3 h-auto w-full rounded-md"
            />
          </picture>
          <p>
            but I moved to Neunkirchen-Seelscheid in 2010, to start a new life with my lovely wife.
            <br />
            We have a wonderful and very active {sonsAge}-year-old son together.
          </p>
          <picture className="shrink-0">
            <source
              srcSet="/images/family.webp"
              type="image/webp"
            />
            <img
              src="/images/family.png"
              alt="Family picture"
              className="mt-3 h-auto w-full rounded-md"
            />
          </picture>
        </section>

        <section className="mt-12">
          <h2 className="mb-2 text-2xl">Fast forward to {currentYear}</h2>
          <p>
            After starting an apprenticeship as a software engineer in 2018, I&apos;m currently
            working as a software engineer in the field of web development.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-2 text-2xl">Behind the scenes</h2>
          <p className="mt-4">
            My path to software engineering was a rather long and unlikely one.
            <br />I first worked as a painter in my hometown in the Allgäu, where I specialized in a
            form of mural art painting known as &apos;Lüftlmalerei&apos;, as well as painting for
            building, shop decoration and art restoration projects.
            <br />
            After relocating to North-Rhine-Westphalia, however, I realised the painters here work
            on more mundane projects, not the highly creative work I was used to back home.
            <br />
            Soon, my once beloved job became more of a burden.
            <br />
            My family were greatly supportive and encouraged me to try something new.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-2 text-2xl">Along the way</h2>
          <p>
            After making the decision to change from painting, I landed a job as an
            &apos;Allrounder&apos; in the{' '}
            <a
              href="https://www.schillinggroup.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Schilling Group,
            </a>{' '}
            in one of their companies called{' '}
            <a
              href="https://www.schillinggroup.de/data-center-dienste/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              IBS CommNet GmbH &amp; Co. KG,{' '}
            </a>
            which is based here in Neunkirchen-Seelscheid.
            <br />
            There, I work in warehouse logistics, production and facility management. IBS provides
            solutions for big telecommunications companies, such as Deutsche Telekom, Vodafone,
            Telefonica, etc.
            <br />
            The company plan and build the infrastructure for the national mobile network, data
            centers and radio relay systems.
          </p>
          <p className="mt-4">
            My first role in IBS was in the department of warehouse logistics. This went very well,
            so I was promoted to a position in the commissary management of warehouse logistics,
            production and facility management after three months.
          </p>
          <p className="mt-4">
            At this point, I had become increasingly familiar with the ERP system management tool{' '}
            <a
              href="https://erp4all.de/miclas-x/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              MiCLAS.X from ERP4all,
            </a>{' '}
            MySQL databases and VBA programming in my work to enhance the Microsoft Excel sheets for
            my team.
          </p>
          <p className="mt-4">
            I loved this element of my work, because I had been very interested in computers and
            programming since I was 19 years old. My work put a smile on the faces of my team
            members, who don&apos;t like to work with computers because of the automation and
            optimization I implemented for them.
          </p>
          <p className="mt-4">
            As a colleague of mine left his job to study to become a mechanical engineer. I switched
            to the partner company{' '}
            <a
              href="https://www.schillinggroup.de/uebertragungstechnik/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              C-PROTEC GmbH &amp; Co. KG
            </a>{' '}
            to take up his position. There, my job was to build up the same ERP system as was used
            in IBS so that my colleagues can use it in an equally efficient way. Additionally, I was
            also involved in a very big project with Vodafone Germany.
          </p>
          <p className="mt-4">
            The project entailed upgrading the radio relay systems in the whole of Bavaria for the
            police and the fire brigade. At the time, I was travelling to Munich a lot to work on
            this project with my colleagues and the local Vodafone team. It was a lot of fun and I
            learned how to work effectively on such a large project.
          </p>
          <p className="mt-4">
            By this time, I realized that I wanted to become a software engineer. The only problem
            was that the Schilling group didn&apos;t provide any apprenticeships in software
            development.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-2 text-2xl">Apprenticeship</h2>
          <p>
            In 2018, I decided to pursue my passion with an apprenticeship as a software engineer.
            at the{' '}
            <a
              href="https://www.ihk.de/koeln/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              IHK Cologne
            </a>{' '}
            and the company{' '}
            <a
              href="https://www.treesoft.de/de/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Treesoft GmbH &amp; Co. KG
            </a>{' '}
            in Lindlar.
          </p>
          <p className="mt-4">
            There, I learned to code with C++ and the Qt framework, HTML, CSS, Git and Docker in the
            home-made ERP software, where we worked using waterfall model.
          </p>
          <p className="mt-4">
            Things also went well, so I was able to reduce the total duration of the apprenticeship
            as an IT specialist in the field of application development, in German
            &quot;Fachinformatiker in Fachrichtung Anwendungsentwicklung&quot; from three to two
            years.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-2 text-2xl">Done!</h2>
          <p>
            After passing the tests and with my certification, I looked beyond application
            development to web development.
            <br />
            The technologies and programming languages looked challenging and interesting to me.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-2 text-2xl">Landing</h2>
          <div className="flex flex-row items-center gap-4">
            <img
              src="/images/apply-min.png"
              alt="Picture while applying to DR-WALTER"
              className="h-auto w-32 rounded-md"
            />
            <p>
              In the summer of 2020, on vacation, I secured a job as a software engineer at{' '}
              <a
                href="https://www.dr-walter.com/en/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                DR-WALTER GmbH.
              </a>
            </p>
          </div>
          <p className="mt-3">
            It is an awesome insuretech company which offers a variety of products and services.
          </p>
          <p className="mt-4">
            Since starting, I have been kept busy working on JavaScript, Bootstrap, TailwindCSS,
            PHP, Laravel, Composer, Jira, YouTrack, Space, Microsoft 365, Google Workspace and
            Wiki.js.
          </p>
          <p className="mt-4">
            We worked with the Scrum workflow in sprints, mainly over a period of one week.
          </p>
          <p className="mt-4">
            The work I completed as the main supervisor for the apprentices was a lot of fun too. It
            was a great feeling to promote the next generation of developers.
          </p>
          <p className="mt-4">
            These stations were the fundamentals of who I am now - a passionate software engineer
            with more than {yearsOfExperience} years of experience.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-2 text-2xl">In a few words</h2>
          <p>
            I&apos;m a software engineer with a passion for creating technology to elevate people
            and businesses.
            <br />I love to learn new things, solve problems and evolve my skills.
          </p>
          <p className="mt-4">
            If you are interested in my skills, please visit my{' '}
            <a
              href="/skills"
              className="underline"
            >
              skills page.
            </a>{' '}
            If you are interested in my projects, I&apos;ve also made a{' '}
            <a
              href="/projects"
              className="underline"
            >
              projects page.
            </a>{' '}
            Feel free to{' '}
            <a
              href="/contact"
              className="underline"
            >
              contact me
            </a>{' '}
            for more information.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-2 text-2xl">Activities</h2>
          <p>
            In my free time I love to spend time with my family, play the base guitar, read books,
            play board games, as well as to go mountain biking, hiking and rock climbing with my
            son.
          </p>
          <picture className="shrink-0">
            <source
              srcSet="/images/climbing.webp"
              type="image/webp"
            />
            <img
              src="/images/climbing.png"
              className="mt-3 h-auto w-full rounded-md"
              alt="Climbing with my son"
            />
          </picture>
        </section>
      </main>
    </Layout>
  );
}
