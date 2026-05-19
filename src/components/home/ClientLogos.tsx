import React from 'react';

const trustedByEnterprisesLogos = [
  '/logo/trusted_by_logo/cj.png',
  '/logo/trusted_by_logo/Screenshot_2026-05-13_171830-removebg-preview.png',
  '/logo/trusted_by_logo/Screenshot_2026-05-13_171817-removebg-preview.png',
  '/logo/trusted_by_logo/Screenshot_2026-05-13_171712-removebg-preview (1).png',
  '/logo/trusted_by_logo/Screenshot_2026-05-13_171802-removebg-preview.png',
  '/logo/trusted_by_logo/Screenshot_2026-05-13_171723-removebg-preview.png',
  '/logo/trusted_by_logo/Screenshot_2026-05-13_171658-removebg-preview.png',
  '/logo/trusted_by_logo/Screenshot_2026-05-13_171650-removebg-preview.png',
];

const ourClientLogos = [
  'https://cdn.cloudfirst.tech/All_image/aws_logo.png',
  'https://cdn.cloudfirst.tech/All_image/aws_advance+partner+logo.png',
  'https://cdn.cloudfirst.tech/All_image/microsoft_new_logo.png',
  'https://cdn.cloudfirst.tech/S3_image/new_GCI.png',
  'https://cdn.cloudfirst.tech/S3_image/GRAG.png',
  'https://cdn.cloudfirst.tech/S3_image/Voicex.png',
  'https://cdn.cloudfirst.tech/S3_image/Screenshot_2026-05-08_181526-removebg-preview.png',
  'https://cdn.cloudfirst.tech/S3_image/Screenshot_2026-05-08_181609-removebg-preview.png',
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
    <section id={id} className="py-20 bg-white scroll-mt-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <h3 className="text-center text-3xl lg:text-4xl font-semibold text-foreground mb-10">
          {title}
        </h3>
        <div className="overflow-hidden">
          <div className={`flex gap-6 sm:gap-8 lg:gap-10 whitespace-nowrap will-change-transform ${animationClassName}`}>
            {loop.map((src, idx) => (
              <div key={idx} className="flex justify-center flex-shrink-0 bg-white rounded-xl px-3 py-2">
                {logos.length > 0 ? (
                  <img
                    src={encodeURI(src)}
                    alt={`Client logo ${idx + 1}`}
                    className={
                      src.toLowerCase().includes('/logo/grag')
                        ? 'h-12 w-36 sm:h-14 sm:w-44 lg:h-20 lg:w-56 object-contain border-0 outline-none'
                        : 'h-10 w-28 sm:h-12 sm:w-32 lg:h-16 lg:w-44 object-contain border-0 outline-none'
                    }
                    loading="lazy"
                  />
                ) : (
                  <div className="h-10 w-28 sm:h-12 sm:w-32 lg:h-16 lg:w-44 rounded-xl border border-dashed border-slate-300/70 bg-white" />
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
