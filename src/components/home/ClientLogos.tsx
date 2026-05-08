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

// helper to repeat an array n times
const repeat = <T,>(arr: T[], times: number) => {
  const out: T[] = [];
  for (let i = 0; i < times; i++) out.push(...arr);
  return out;
};

const ClientLogos = () => {
  const loop = repeat(logos, 6);

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <h3 className="text-center text-3xl lg:text-4xl font-semibold text-foreground mb-10">
          Trusted by Enterprises
        </h3>
        <div className="overflow-hidden">
          <div className="flex gap-10 whitespace-nowrap animate-scroll-left will-change-transform">
            {loop.map((src, idx) => (
              <div key={idx} className="flex justify-center flex-shrink-0">
                <img
                  src={src}
                  alt={`Client logo ${idx + 1}`}
                  className="h-14 sm:h-16 w-40 sm:w-44 object-contain"
                  loading="lazy"
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
