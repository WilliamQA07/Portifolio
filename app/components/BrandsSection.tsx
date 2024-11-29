import React from 'react';

export default function BrandsSection() {
  const brands = [
    { name: 'Liberta XP', logo: '/logos/liberta-logo.png' },
    { name: 'L&S', logo: '/logos/ls-logo.png' },
    { name: 'Unilever', logo: '/logos/unilever-logo.png' },
    { name: 'ContabilHub', logo: '/logos/contabilhub-logo.png' },
    { name: 'Congresso PMI', logo: '/logos/pmi-logo.png' },
    { name: 'Jaé', logo: '/logos/jae-logo.png' },
    { name: 'GOL', logo: '/logos/gol-logo.png' },
    { name: 'Seanet Telecom', logo: '/logos/seanet-logo.png' },
  ];

  return (
    <section
      style={{
        backgroundColor: '#1a1a2e',
        color: 'white',
        padding: '50px 20px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Marcas que confiam
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#b3b3b3' }}>
          Empresas que por confidencialidade não podemos apresentar nos cases, mas que acreditaram na
          nossa empresa.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
          }}
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#2a2a4a',
                padding: '20px',
                borderRadius: '8px',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.05)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            >
              <img
                src={brand.logo}
                alt={brand.name}
                style={{ maxHeight: '50px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}