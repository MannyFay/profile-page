import { DownloadIcon } from '~/components/icons';
import { Layout } from '~/components/layout';
import { ButtonLink } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { documents } from '~/data/documents';
import { createMeta, createLinks } from '~/utils/meta';

//-------------------------------------------------------------------------------------------------
// Documents Page - Meta Data

export function meta() {
  return createMeta({ title: 'Documents', path: '/documents' });
}

export function links() {
  return createLinks({ path: '/documents' });
}

export default function Documents() {
  return (
    <Layout>
      <main className="mb-14 mt-20 flex max-w-sm flex-col gap-4 px-6 md:max-w-lg lg:mt-36 lg:max-w-2xl">
        <h1 className="text-center text-3xl">Documents</h1>
        <p className="mt-2 mb-10 text-center">Feel free to download.</p>
        <section className="flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center">
          {documents.map((doc) => (
            <Card
              key={doc.id}
              className="flex h-44 w-72 flex-col items-center"
            >
              <h2
                className="mb-3 text-center text-2xl"
                dangerouslySetInnerHTML={{
                  __html: doc.title.replace(
                    /^(CV|Reference|Examination Cert\.|School) /,
                    '$1<br/>'
                  ),
                }}
              />
              <p>{doc.subtitle}</p>
              <ButtonLink
                href={`/documents/${doc.filename}`}
                download
                variant="primary"
                fullWidth
                className="mt-auto"
                aria-label={`Download ${doc.title}`}
              >
                <DownloadIcon size={20} />
              </ButtonLink>
            </Card>
          ))}
        </section>
      </main>
    </Layout>
  );
}
