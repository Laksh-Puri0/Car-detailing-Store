import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Royal Touch Auto Detailing, including how we collect, use, store and protect customer information.",
};

const sections = [
  {
    heading: "Information We Collect",
    text:
      "Depending on how you use our website, we may collect information such as: Your name and contact information. Vehicle information you provide when requesting or booking a service. Appointment and service information. Information you submit through contact or quote forms. Information you provide when communicating with us. Basic technical information about your visit to our website, such as browser type, device information, IP address, and pages visited.",
  },
  {
    heading: "How We Use Information",
    text:
      "We may use information we collect to: Respond to questions and inquiries. Provide quotes and information about our services. Schedule and manage appointments. Provide and improve our services. Communicate with customers about requested services. Process transactions where applicable. Maintain business records. Improve our website and customer experience. Prevent fraud, misuse, or unauthorized activity. Comply with applicable legal requirements. Measure and improve our advertising and marketing.",
  },
  {
    heading: "Cookies and Similar Technologies",
    text:
      "Our website may use cookies and similar technologies to help the website function, understand website traffic, remember preferences, and measure advertising performance. Third-party services used on our website may also use cookies or similar technologies in accordance with their own privacy policies. You can manage or disable cookies through your browser settings. Disabling certain cookies may affect how some parts of the website function.",
  },
  {
    heading: "Advertising and Analytics",
    text:
      "Royal Touch Auto Detailing may use third-party advertising or analytics services to understand website traffic, measure advertising performance, and promote our services. These services may collect information about website visits through cookies or similar technologies. We do not sell personal information to advertising providers.",
  },
  {
    heading: "How We Share Information",
    text:
      "We may share information with service providers that help us operate our business, website, communications, payment processing, appointment scheduling, analytics, or advertising. We may also disclose information when required by law or when reasonably necessary to protect our business, customers, website, or legal rights.",
  },
  {
    heading: "Payment Information",
    text:
      "If payments are processed through a third-party payment provider, payment information may be handled directly by that provider. Third-party payment providers may have their own privacy policies and terms.",
  },
  {
    heading: "Communications",
    text:
      "If you provide contact information, we may use it to respond to your inquiries, provide requested information, communicate about appointments, or provide information related to services you have requested. Where permitted by applicable law, we may also send promotional communications. You may unsubscribe from promotional communications where an unsubscribe option is provided.",
  },
  {
    heading: "Data Security",
    text:
      "We take reasonable steps to protect personal information against unauthorized access, use, alteration, or disclosure. However, no website or electronic transmission can be guaranteed to be completely secure.",
  },
  {
    heading: "Data Retention",
    text:
      "We retain information for as long as reasonably necessary for business, service, legal, accounting, and record-keeping purposes.",
  },
  {
    heading: "Your Privacy Rights",
    text:
      "Depending on applicable law, you may have rights regarding personal information we hold about you, including requesting access to or correction of your information. Privacy-related requests can be made by contacting Royal Touch Auto Detailing.",
  },
  {
    heading: "Third-Party Websites",
    text:
      "Our website may contain links to third-party websites or services. Royal Touch Auto Detailing is not responsible for the privacy practices, content, or security of third-party websites. We recommend reviewing the privacy policies of third-party websites you visit.",
  },
  {
    heading: "Changes to This Privacy Policy",
    text:
      "Royal Touch Auto Detailing may update this Privacy Policy when necessary to reflect changes to our services, website, technology, or legal requirements. Any updated policy will be posted on this page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Royal Touch Auto Detailing
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">
              Privacy Policy
            </h1>
          </div>
          <Link
            href="/"
            className="rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-700 transition hover:border-red-300 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
          >
            Back Home
          </Link>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-8 text-base leading-7 text-slate-600">
            Royal Touch Auto Detailing respects your privacy and is committed to protecting the personal information you provide when you visit our website, contact us, request a quote, or book our services.
          </p>

          {sections.map((section) => (
            <section key={section.heading} className="mb-8 last:mb-0">
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                {section.heading}
              </h2>
              <p className="text-base leading-7 text-slate-600">{section.text}</p>
            </section>
          ))}

          <div className="mt-10 rounded-2xl bg-red-50 p-5">
            <h2 className="text-xl font-bold text-slate-900">Contact</h2>
            <p className="mt-2 text-base leading-7 text-slate-600">
              If you have questions about this Privacy Policy or how your information is handled, please contact Royal Touch Auto Detailing through the contact information provided on our website.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
