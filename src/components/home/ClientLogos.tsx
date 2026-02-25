import React from 'react';

// load logos from the public/logo directory
const logos = [
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
  '/logo/acunetic.png'
];

const firstRow = logos.slice(0, Math.ceil(logos.length / 2));
const secondRow = logos.slice(Math.ceil(logos.length / 2));

// helper to repeat an array n times
const repeat = <T,>(arr: T[], times: number) => {
  const out: T[] = [];
  for (let i = 0; i < times; i++) out.push(...arr);
  return out;
};

const ClientLogos = () => {
  // duplicate enough times to cover wide viewports (4x each row)
  const firstLoop = repeat(firstRow, 4);
  const secondLoop = repeat(secondRow, 4);

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <h3 className="text-center text-2xl lg:text-3xl font-semibold text-foreground mb-12">
          Trusted by
        </h3>
        {/* animated rows */}
        <div className="space-y-8 overflow-hidden">
          <div className="flex gap-8 whitespace-nowrap animate-scroll-left will-change-transform">
            {firstLoop.map((src, idx) => (
              <div key={idx} className="flex justify-center flex-shrink-0">
                <img
                  src={src}
                  alt={`Client logo ${idx + 1}`}
                  className="h-12 w-32 object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-8 whitespace-nowrap animate-scroll-right will-change-transform">
            {secondLoop.map((src, idx) => (
              <div key={idx} className="flex justify-center flex-shrink-0">
                <img
                  src={src}
                  alt={`Client logo ${idx + 1}`}
                  className="h-12 w-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
