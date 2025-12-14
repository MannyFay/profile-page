import { Layout } from '~/components/layout';
import { createMeta, createLinks } from '~/utils/meta';

//-------------------------------------------------------------------------------------------------
// Site Notice Page - Meta Data

export function meta() {
  return createMeta({
    title: 'Site Notice',
    path: '/site-notice',
    description: 'Site Notice / Impressum - Manuel-Hubertus Fay',
  });
}

export function links() {
  return createLinks({ path: '/site-notice' });
}

//-------------------------------------------------------------------------------------------------
// Site Notice Page - Component

export default function SiteNotice() {
  return (
    <Layout>
      <main className="mb-14 mt-20 max-w-sm px-6 lg:mt-36 lg:max-w-xl">
        <h1 className="text-center text-3xl">Site Notice</h1>

        <section className="mt-10">
          <p className="mb-6">
            Information in accordance with Section 5 TMG (German Telemedia Act)
          </p>
          <address className="not-italic mb-6">
            Manuel-Hubertus Fay
            <br />
            Kurt-Schumacher-Straße 76
            <br />
            c/o flexdienst – #11852
            <br />
            67663 Kaiserslautern
            <br />
            Germany
          </address>
          <h2 className="mb-4 text-xl">Contact</h2>
          <p className="mb-6">
            Telefon: +49 (0) 177 1447823
            <br />
            Telefax: +49 (0) 2217766292
            <br />
            E-Mail: hike.mole3284@eagereverest.com
          </p>
          <h2 className="mb-4 text-xl">Person Responsible for Content</h2>
          <p>Manuel-Hubertus Fay</p>
          <p className="mt-2">Address as above</p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-xl">Disclaimer</h2>

          <h3 className="mb-2 text-lg">Liability for Content</h3>
          <p>
            The contents of our pages were created with the greatest care. However, we cannot
            guarantee the contents’ accuracy, completeness, or topicality. According to statutory
            provisions, we are furthermore responsible for our own content on these web pages. In
            this matter, please note that we are not obliged to monitor the transmitted or saved
            information of third parties, or investigate circumstances pointing to illegal activity.
            Our obligations to remove or block the use of information under generally applicable
            laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
          </p>

          <h3 className="mb-2 mt-6 text-lg">Liability for Links</h3>
          <p>
            Our offer contains links to external third party websites. We have no influence on the
            contents of those websites, therefore we cannot guarantee for those contents. Providers
            or administrators of linked websites are always responsible for their own contents. The
            linked websites had been checked for possible violations of law at the time of the
            establishment of the link. Illegal contents were not detected at the time of the
            linking. A permanent monitoring of the contents of linked websites cannot be imposed
            without reasonable indications that there has been a violation of law. Illegal links
            will be removed immediately at the time we get knowledge of them.
          </p>

          <h3 className="mb-2 mt-6 text-lg">Copyright</h3>
          <p>
            Contents and compilations published on these websites by the providers are subject to
            German copyright laws. Reproduction, editing, distribution as well as the use of any
            kind outside the scope of the copyright law require a written permission of the author
            or originator. Downloads and copies of these websites are permitted for private use
            only. The commercial use of our contents without permission of the originator is
            prohibited. Copyright laws of third parties are respected as long as the contents on
            these websites do not originate from the provider. Contributions of third parties on
            this site are indicated as such. However, if you notice any violations of copyright law,
            please inform us. Such contents will be removed immediately.
          </p>
        </section>
      </main>
    </Layout>
  );
}
