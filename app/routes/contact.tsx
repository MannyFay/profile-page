import { LinkedInIcon, XingIcon } from '~/components/icons';
import { Layout } from '~/components/layout';
import { createMeta, createLinks } from '~/utils/meta';

//-------------------------------------------------------------------------------------------------
// Contact Page - Meta Data

export function meta() {
  return createMeta({ title: 'Contact', path: '/contact' });
}

export function links() {
  return createLinks({ path: '/contact' });
}

export default function Contact() {
  return (
    <Layout>
      <main className="mb-14 mt-20 px-6 text-center lg:mt-36">
        <h1 className="text-center text-3xl">Contact</h1>
        <p className="mb-10 mt-6">Please feel free to contact me.</p>
        <address className="not-italic">
          Manuel-Hubertus Fay
          <p className="mt-12">
            Mail:
            <br />
            <a
              href="mailto:hike.mole3284@eagereverest.com"
              className="underline"
            >
              hike.mole3284@eagereverest.com
            </a>
          </p>
        </address>
        <div className="mt-12 flex flex-row justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/manuel-fay-0483a919a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-stone-50 hover:text-stone-300"
          >
            <LinkedInIcon size={28} />
          </a>
          <a
            href="https://www.xing.com/profile/Manuel_Fay/cv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Xing Profile"
            className="text-stone-50 hover:text-stone-300"
          >
            <XingIcon size={28} />
          </a>
        </div>
      </main>
    </Layout>
  );
}
