/**
 * Fabric Details & Raw Material Sourcing Categories
 * Sourced directly from TopHill Textile Fabric Master Reference
 */

export const FABRIC_CATEGORIES = [
  {
    id: 'cotton',
    number: '01',
    name: 'COTTON',
    slug: 'cotton',
    tagline: '100% pure combed & bio-washed cotton weaves, poplins & cambrics',
    badge: '7 Varieties',
    totalCount: 7,
    description: 'High-density, breathable, skin-friendly cotton weaves suitable for premium shirting, everyday chic dresses, festive tops, and summer collections.',
    varieties: [
      { name: 'Cotton Poplin', slug: 'cotton-poplin', tag: 'Core Shirting', desc: 'Smooth, crisp weave ideal for tailored shirts and structured dresses.' },
      { name: 'Cotton Cambric', slug: 'cotton-cambric', tag: 'Lightweight', desc: 'Fine, closely woven fabric perfect for tops, linings, and lightweight kurtis.' },
      { name: 'Cotton Twill', slug: 'cotton-twill', tag: 'Durable Weave', desc: 'Distinct diagonal weave offering excellent drape and strength for bottoms and overshirts.' },
      { name: 'Cotton Voile', slug: 'cotton-voile', tag: 'Breezy Soft', desc: 'Sheer, lightweight cotton with a soft drape for airy tops and breezy summer silhouettes.' },
      { name: 'Cotton Slub', slug: 'cotton-slub', tag: 'Textured', desc: 'Distinctive textured yarn giving a natural vintage aesthetic and breathable comfort.' },
      { name: 'Cotton Satin', slug: 'cotton-satin', tag: 'Lustrous Sheen', desc: 'Sateen weave providing a subtle luxury gloss with pure cotton breathability.' },
      { name: 'Cotton Chiffon', slug: 'cotton-chiffon', tag: 'Flowing Sheer', desc: 'Feather-light sheer cotton fabric suited for overlays, delicate blouses, and resort wear.' }
    ]
  },
  {
    id: 'viscose',
    number: '02',
    name: 'VISCOSE',
    slug: 'viscose',
    tagline: 'Fluid drapery, silky smooth handfeel & vibrant color brilliance',
    badge: '7 Varieties',
    totalCount: 7,
    description: 'Cellulosic fibres offering unmatched fluid movement, cooling touch, and rich drape for trending western dresses, jumpsuits, and printed blouses.',
    varieties: [
      { name: 'Rayon', slug: 'rayon', tag: 'Bestseller', desc: 'Ultra-soft, breathable cellulosic fabric widely used for flowy dresses and casual tops.' },
      { name: 'Viscose Slub', slug: 'viscose-slub', tag: 'Subtle Texture', desc: 'Soft drape combined with earthy slub character for stylish co-ord sets.' },
      { name: 'Viscose Crepe', slug: 'viscose-crepe', tag: 'Pebbled Drape', desc: 'Elegant crinkled surface texture with rich body and zero transparency.' },
      { name: 'Viscose Twill', slug: 'viscose-twill', tag: 'Premium Fall', desc: 'Heavy drape twill with a lustrous silky touch for tailored women’s trousers and blouses.' },
      { name: 'Viscose Satin', slug: 'viscose-satin', tag: 'Liquid Silk Finish', desc: 'Glossy, opulent shine and supple movement suited for partywear and evening gowns.' },
      { name: 'Viscose Georgette', slug: 'viscose-georgette', tag: 'Crinkly Fall', desc: 'Lightweight, bouncy drape with fine grain suited for multi-tier dresses and dupattas.' },
      { name: 'Viscose Chiffon', slug: 'viscose-chiffon', tag: 'Ethereal', desc: 'Extremely lightweight, translucent fabric giving an ethereal aesthetic to designer apparel.' }
    ]
  },
  {
    id: 'polyester',
    number: '03',
    name: 'POLYESTER',
    slug: 'polyester',
    tagline: 'Crease-resistant, high tensile strength & colorfast commercial textiles',
    badge: '5 Varieties',
    totalCount: 5,
    description: 'Engineered commercial-grade fabrics delivering impeccable wrinkle recovery, durability under industrial laundry, and high print vibrancy.',
    varieties: [
      { name: 'Poly Crepe', slug: 'poly-crepe', tag: 'Crease-Free', desc: 'Low maintenance, crisp textured drape preferred for office blouses and pleated dresses.' },
      { name: 'Poly Georgette', slug: 'poly-georgette', tag: 'Durable Sheer', desc: 'Tear-resistant, flowing sheer fabric ideal for printed tops and tiered ruffles.' },
      { name: 'Poly Satin', slug: 'poly-satin', tag: 'High Gloss', desc: 'Mirror-finish gloss and snag resistance for slip dresses, camisoles, and luxury linings.' },
      { name: 'Poly Chiffon', slug: 'poly-chiffon', tag: 'Airy Mesh', desc: 'Resilient airy fabric that retains pleats, gathers, and saturated digital prints.' },
      { name: 'Moss Crepe', slug: 'moss-crepe', tag: 'Heavy Drape', desc: 'Substantial granular texture with soft stretch and opaque coverage for office trousers.' }
    ]
  },
  {
    id: 'linen',
    number: '04',
    name: 'LINEN',
    slug: 'linen',
    tagline: 'Organic natural elegance, moisture-wicking comfort & classic charm',
    badge: '2 Varieties',
    totalCount: 2,
    description: 'Flax and premium blends delivering timeless artisanal texture, thermo-regulating breathability, and high durability for modern resort wear.',
    varieties: [
      { name: 'Linen Blend', slug: 'linen-blend', tag: 'Resort Essential', desc: 'Linen combined with viscose/poly for minimized wrinkling and soft touch on the skin.' },
      { name: 'Cotton-Linen', slug: 'cotton-linen', tag: 'Natural Luxury', desc: 'The breathability of cotton matched with linen texture for shirts, blazers, and pants.' }
    ]
  },
  {
    id: 'knitted-fabrics',
    number: '05',
    name: 'KNITTED FABRICS',
    slug: 'knitted-fabrics',
    tagline: 'Super-stretch comfort, high-recovery loop-knits & combed jersey',
    badge: '4 Varieties',
    totalCount: 4,
    description: 'Circular and flat-knitted flexible textiles providing superior 2-way and 4-way stretch, sweat absorption, and contouring fits for t-shirts and athleisure.',
    varieties: [
      { name: 'Jersey', slug: 'jersey', tag: 'Single Knit', desc: 'Combed cotton single jersey with soft touch and great elasticity for everyday tees.' },
      { name: 'Hosiery', slug: 'hosiery', tag: 'Comfort Stretch', desc: 'Fine-gauge elastic knit used for loungewear, inner wear, and stretch tops.' },
      { name: 'Rib Knit', slug: 'rib-knit', tag: 'Distinct Ridge', desc: 'Vertical ribbed structure offering high elasticity for collars, cuffs, and bodycon dresses.' },
      { name: 'Interlock', slug: 'interlock', tag: 'Double Knit', desc: 'Smooth on both sides, heavier weight knit ideal for premium polo t-shirts and tracksuits.' }
    ]
  },
  {
    id: 'denim',
    number: '06',
    name: 'DENIM',
    slug: 'denim',
    tagline: 'Heavy-duty ring-spun cotton twill, stretch comfort & enzyme washes',
    badge: '2 Varieties',
    totalCount: 2,
    description: 'Indigo-dyed and reactive dyed twill weaves tested for abrasion resistance, wash retention, and vintage enzyme treatments for bottoms and jackets.',
    varieties: [
      { name: 'Cotton Denim', slug: 'cotton-denim', tag: '100% Rigid Twill', desc: 'Authentic 100% cotton warp-faced twill for classic vintage jeans and denim jackets.' },
      { name: 'Stretch Denim', slug: 'stretch-denim', tag: 'Elastane Blend', desc: 'Cotton-spandex blend delivering flexible shape retention for high-rise skinny and mom jeans.' }
    ]
  }
];

// Helper to get all fabric varieties in a flat list
export const getAllFabricVarieties = () => {
  const result = [];
  FABRIC_CATEGORIES.forEach(cat => {
    cat.varieties.forEach(v => {
      result.push({
        ...v,
        categoryName: cat.name,
        categoryId: cat.id,
        categorySlug: cat.slug
      });
    });
  });
  return result;
};
