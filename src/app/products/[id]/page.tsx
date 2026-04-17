import React from 'react';
import { Ruler, Scissors, Box, Zap, ArrowLeft, MessageSquare, Star } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { notFound } from 'next/navigation';

const productData = {
  'retro-panel-tracksuit': {
    name: 'Retro Panel Tracksuit',
    description: 'Engineered for UK streetwear brands who demand quality and flexibility. Fully customizable panels, logos, and premium fabric options.',
    image: 'Vintage Adidas 90s Herren Trainingsanzug Set Jacke Hose Gr_ XL.jpg',
    tag: 'Flagship Product',
    fabrics: ['280GSM Poly-Blend', '100% Nylon Taslan', 'Heavyweight Interlock'],
    moq: '20 Units'
  },
  'track-jacket-specialist': {
    name: 'Specialist Track Jacket',
    description: 'High-collar track jacket with custom ribbing and ventilation panels. Perfect for layering and streetwear silhouettes.',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1000',
    tag: 'New Arrival',
    fabrics: ['Poly-Cotton Blend', 'Water-Resistant Shell', 'Custom Knit Rib'],
    moq: '20 Units'
  },
  'tapered-track-pants': {
    name: 'Tapered Track Pants',
    description: 'Engineered for fit. Custom side-taping and premium pocket construction. The essential streetwear bottom silhouette.',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=1000',
    tag: 'Essential',
    fabrics: ['Ultra-Soft Fleece', 'Tech-Poly Blend', 'Cotton Twill'],
    moq: '20 Units'
  }
};

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const product = productData[id as keyof typeof productData];

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Breadcrumbs */}
      <div className="px-4 sm:px-6 lg:px-8 pt-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/products" className="inline-flex items-center text-sm font-bold text-brand-foreground/40 hover:text-brand-primary transition-colors gap-2 uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" /> Back to Collection
          </Link>
        </div>
      </div>

      {/* Hero / Specs */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Images */}
            <div className="space-y-6">
              <div className="aspect-[4/5] bg-brand-muted rounded-xs overflow-hidden border border-brand-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-brand-muted rounded-xs overflow-hidden border border-brand-muted">
                  <img src="https://images.unsplash.com/photo-1558444479-c8f010530fdc?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="aspect-square bg-brand-muted rounded-xs overflow-hidden border border-brand-muted">
                  <img src="https://images.unsplash.com/photo-1528570d32151-57e3f81e6211?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="aspect-square bg-brand-muted rounded-xs overflow-hidden border border-brand-muted">
                  <img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-brand-accent/20 border border-brand-accent/40 text-brand-accent text-xs font-bold uppercase tracking-widest">
                  {product.tag}
                </div>
                <h1 className="text-4xl lg:text-6xl font-display font-bold font-black tracking-tight uppercase leading-tight">{product.name}</h1>
                <p className="text-xl text-brand-foreground/60 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-brand-muted">
                <div className="flex items-start space-x-4">
                  <Ruler className="w-6 h-6 text-brand-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Sizing</h4>
                    <p className="text-sm text-brand-foreground/60">XS–3XL Available. Custom patterns available.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Scissors className="w-6 h-6 text-brand-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Customization</h4>
                    <p className="text-sm text-brand-foreground/60">Choose panel colors, placement, & embroidery.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-brand-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Sampling</h4>
                    <p className="text-sm text-brand-foreground/60">7–10 Day turnaround for your custom sample.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Box className="w-6 h-6 text-brand-primary mt-1" />
                  <div>
                    <h4 className="font-bold">MOQ</h4>
                    <p className="text-sm text-brand-foreground/60">Starting from {product.moq} per colorway.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-brand-foreground/40">Fabric Options</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.fabrics.map((f) => (
                      <span key={f} className="px-4 py-2 bg-brand-muted/50 border border-brand-muted text-sm font-medium">{f}</span>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Button variant="primary" href="/contact" className="w-full py-6 text-lg font-bold flex items-center justify-center gap-3">
                    Request a Sample Production <MessageSquare className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-brand-muted/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold">Uncompromising Detail</h2>
            <p className="text-brand-foreground/60 leading-relaxed">
              Every piece in our collection is hand-cut and stitched to ensure that your specifications align perfectly. No shortcuts.
            </p>
            <ul className="space-y-4">
              {[
                'Reinforced multi-needle stitching',
                'High-durability hardware standard',
                'Sustainable fabric sourcing options',
                'In-house graphic placement mapping'
              ].map((item) => (
                <li key={item} className="flex items-center space-x-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[16/10] bg-zinc-900 rounded-xs flex items-center justify-center p-12 overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" />
            <div className="relative text-center">
              <Star className="w-16 h-16 text-brand-accent opacity-50 mx-auto mb-4" />
              <p className="text-2xl font-display font-bold italic">"Official UK Streetwear Manufacturing Standard"</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
