import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the Royal Touch Auto Detailing website and booking their detailing services.",
};

const sections = [
  {
    heading: "Our Services",
    text:
      "Royal Touch Auto Detailing provides vehicle detailing and automotive cleaning services. Services, packages, availability, pricing, and included services may vary depending on the service selected and the condition of the vehicle.",
  },
  {
    heading: "Quotes and Pricing",
    text:
      "Prices or service information provided on our website may be subject to change. The final cost of a service may depend on factors such as vehicle size, vehicle condition, the level of cleaning required, and additional services requested. If additional work is required, the customer may be informed before additional charges are applied.",
  },
  {
    heading: "Appointments",
    text:
      "Appointments are subject to availability. Customers are responsible for providing accurate information when making an appointment and for being available at the agreed time and location when applicable.",
  },
  {
    heading: "Cancellations and Rescheduling",
    text:
      "Cancellation and rescheduling policies may apply to appointments. Any applicable cancellation or rescheduling requirements will be communicated to the customer at the time of booking or before the service.",
  },
  {
    heading: "Vehicle Condition",
    text:
      "Customers should remove valuables, personal belongings, important documents, electronics, and other personal items from their vehicle before service. Royal Touch Auto Detailing is not responsible for personal property left inside a vehicle. Customers should inform us of any known vehicle issues, existing damage, loose or damaged parts, electrical issues, aftermarket modifications, or other conditions that may affect the service.",
  },
  {
    heading: "Existing Damage",
    text:
      "Detailing may reveal existing scratches, stains, fading, wear, cracks, odours, paint defects, or other conditions that were not immediately visible before cleaning. Royal Touch Auto Detailing is not responsible for pre-existing damage or deterioration. Reasonable care will be taken when providing services.",
  },
  {
    heading: "Service Results",
    text:
      "Professional detailing can improve the cleanliness and appearance of a vehicle, but not every stain, odour, scratch, paint defect, pet hair, or other imperfection can necessarily be completely removed. Results may vary depending on the vehicle's condition, materials, age, previous use, and other factors. No specific result is guaranteed unless expressly stated otherwise.",
  },
  {
    heading: "Customer Responsibilities",
    text:
      "Customers agree to: Provide accurate booking and contact information. Provide reasonable access to the vehicle when required. Remove valuables and personal belongings from the vehicle. Inform Royal Touch Auto Detailing about known vehicle issues that may affect the service. Pay applicable charges for services provided. Follow reasonable instructions necessary for the safe completion of the service.",
  },
  {
    heading: "Payments",
    text:
      "Payment is due according to the payment terms communicated at the time of booking or purchase. Third-party payment processors may be used to process payments and may have their own terms and policies.",
  },
  {
    heading: "Promotions and Discounts",
    text:
      "Promotions, discounts, coupons, and special offers may be subject to additional terms and availability. Promotional offers may be changed or discontinued where permitted by law.",
  },
  {
    heading: "Website Information",
    text:
      "Royal Touch Auto Detailing makes reasonable efforts to keep website information accurate and current. However, service descriptions, availability, pricing, photographs, and other website information may change. Photographs shown on the website may be examples of completed work and may not represent the exact results for every vehicle.",
  },
  {
    heading: "Third-Party Websites",
    text:
      "Our website may contain links to third-party websites or services. Royal Touch Auto Detailing is not responsible for the content, availability, privacy practices, or terms of third-party websites.",
  },
  {
    heading: "Limitation of Liability",
    text:
      "To the extent permitted by applicable law, Royal Touch Auto Detailing will not be responsible for indirect, incidental, special, or consequential losses arising from the use of our website or services. Nothing in these Terms and Conditions is intended to limit any consumer right or liability that cannot legally be limited or excluded.",
  },
  {
    heading: "Website Use",
    text:
      "You agree not to use our website for unlawful purposes or in a way that could interfere with the operation, security, or availability of the website. You must not attempt to gain unauthorized access to our website, systems, or data.",
  },
  {
    heading: "Intellectual Property",
    text:
      "Unless otherwise stated, content on the Royal Touch Auto Detailing website, including text, photographs, logos, graphics, and branding, is owned by or licensed to Royal Touch Auto Detailing. Content may not be reproduced, distributed, modified, or commercially used without permission, except where permitted by law.",
  },
  {
    heading: "Privacy",
    text:
      "Our collection and use of personal information is described in our Privacy Policy.",
  },
  {
    heading: "Changes to These Terms",
    text:
      "Royal Touch Auto Detailing may update these Terms and Conditions when necessary. Updated terms will be posted on this page.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Royal Touch Auto Detailing
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">
              Terms & Conditions
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
            These Terms and Conditions apply to the use of the Royal Touch Auto Detailing website and the purchase or use of our car detailing services. By using our website, requesting information, booking an appointment, or using our services, you agree to these Terms and Conditions.
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
              If you have questions about these Terms and Conditions, please contact Royal Touch Auto Detailing through the contact information provided on our website.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
