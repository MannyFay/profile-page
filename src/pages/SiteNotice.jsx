import { Link } from 'react-router-dom';

function SiteNotice() {
  return (
    <>
      <div className="mx-auto p-8 text-left">
        <Link
          to="/"
          className="inline-block mb-6"
        >
          ← Home
        </Link>
        <h1 className="text-3xl font-bold mb-6">Site Notice</h1>

        <p>Information in accordance with Section 5 TMG (German Telemedia Act)</p>

        <section className="my-6">
          <p>
            Manuel-Hubertus Fay
            <br />
            Kurt-Schumacher-Straße 76
            <br />
            c/o flexdienst – #11852
            <br />
            67663 Kaiserslautern
            <br />
            Germany
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>
            Telefon: +49 (0) 2247 9693339
            <br />
            Telefax: +49 (0) 2217766292
            <br />
            E-Mail: hike.mole3284@eagereverest.com
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Person Responsible for Content</h2>
          <p>
            Manuel-Hubertus Fay
            <br />
            Address as above
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Disclaimer</h2>

          <h3 className="font-semibold mt-4 mb-2">Liability for Content</h3>
          <p>
            The contents of our pages were created with the greatest care. However, we cannot
            guarantee the contents’ accuracy, completeness, or topicality. According to statutory
            provisions, we are furthermore responsible for our own content on these web pages. In
            this matter, please note that we are not obliged to monitor the transmitted or saved
            information of third parties, or investigate circumstances pointing to illegal activity.
            Our obligations to remove or block the use of information under generally applicable
            laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
          </p>

          <h3 className="font-semibold mt-4 mb-2">Liability for Links</h3>
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

          <h3 className="font-semibold mt-4 mb-2">Copyright</h3>
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
      </div>
    </>
  );
}

export default SiteNotice;
