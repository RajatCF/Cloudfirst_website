import React from 'react';

const trustedByEnterprisesLogos = [
  '/logo/wma.png',
  '/logo/redif.png',
  '/logo/path-logo.png',
  '/logo/netmagic-logo.png',
  '/logo/my.png',
  '/logo/microsoft_azure-logo.png',
  '/logo/google-cloud-logo.png',
  '/logo/cisco-meraki.png',
  '/logo/big-cloud.png',
  '/logo/backupify.png',
  '/logo/aws-logo.png',
  '/logo/acunetic.png',
];

const ourClientLogos = [
  '/logo/our partner/Screenshot 2026-05-08 181609.png',
  '/logo/our partner/Screenshot 2026-05-08 181603.png',
  '/logo/our partner/Screenshot 2026-05-08 181555.png',
  '/logo/our partner/Screenshot 2026-05-08 181548.png',
  '/logo/our partner/Screenshot 2026-05-08 181541.png',
  '/logo/our partner/Screenshot 2026-05-08 181533.png',
  '/logo/our partner/Screenshot 2026-05-08 181526.png',
  '/logo/our partner/Screenshot 2026-05-08 181519.png',
  '/logo/our partner/Screenshot 2026-05-08 181511.png',
  '/logo/our partner/Screenshot 2026-05-08 181504.png',
  '/logo/our partner/Screenshot 2026-05-08 181457.png',
  '/logo/our partner/Screenshot 2026-05-08 181447.png',
];

const repeat = <T,>(arr: T[], times: number) => {
  const out: T[] = [];
  for (let i = 0; i < times; i++) out.push(...arr);
  return out;
};

type LogoMarqueeSectionProps = {
  id?: string;
  title: string;
  logos: string[];
  animationClassName: string;
};

const LogoMarqueeSection = ({ id, title, logos, animationClassName }: LogoMarqueeSectionProps) => {
  const placeholders = Array.from({ length: 12 }).map((_, i) => `placeholder-${i}`);
  const loop = logos.length > 0 ? repeat(logos, 5) : repeat(placeholders, 5);

  return (
    <section id={id} className="py-20 bg-transparent scroll-mt-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <h3 className="text-center text-3xl lg:text-4xl font-semibold text-foreground mb-10">
          {title}
        </h3>
        <div className="overflow-hidden">
          <div className={`flex gap-10 whitespace-nowrap will-change-transform ${animationClassName}`}>
            {loop.map((src, idx) => (
              <div key={idx} className="flex justify-center flex-shrink-0">
                {logos.length > 0 ? (
                  <img
                    src={encodeURI(src)}
                    alt={`Client logo ${idx + 1}`}
                    className="h-14 sm:h-16 w-40 sm:w-44 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-14 sm:h-16 w-40 sm:w-44 rounded-xl border border-dashed border-slate-300/70 bg-white/60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientLogos = () => (
  <LogoMarqueeSection
    title="Trusted by Enterprises"
    logos={trustedByEnterprisesLogos}
    animationClassName="animate-scroll-left"
  />
);

const OurClientsLogos = () => (
  <LogoMarqueeSection
    id="our-client"
    title="Our Partners"
    logos={ourClientLogos}
    animationClassName="animate-scroll-left"
  />
);

export { OurClientsLogos };
export default ClientLogos;
