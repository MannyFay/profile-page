import { Layout } from '~/components/layout';
import { InteractiveBubbleField } from '~/components/ui/interactive-bubble-field';
import { skills } from '~/data/skills';
import { createMeta, createLinks } from '~/utils/meta';

//-------------------------------------------------------------------------------------------------
// Skills Page - Meta Data

export function meta() {
  return createMeta({ title: 'Skills', path: '/skills' });
}

export function links() {
  return createLinks({ path: '/skills' });
}

//-------------------------------------------------------------------------------------------------
// Skills Page - Component

export default function Skills() {
  return (
    <Layout>
      <main className="mb-14 mt-20 px-6 lg:mt-36">
        <h1 className="text-center text-3xl">Skills</h1>
        <InteractiveBubbleField skills={skills} />
      </main>
    </Layout>
  );
}
