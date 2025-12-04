'use client';

import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { id: 1, label: 'Years Experience', value: 7, suffix: '+', icon: 'fa-calendar-alt' },
  { id: 2, label: 'Visas Granted', value: 700, suffix: '+', icon: 'fa-plane-departure' },
  { id: 3, label: 'University Partners', value: 100, suffix: '+', icon: 'fa-university' },
  { id: 4, label: 'Success Rate', value: 98, suffix: '%', icon: 'fa-check-circle' },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    return display.on("change", (latest) => setDisplayValue(latest));
  }, [display]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-20 bg-[#002D62] relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#002D62] to-[#001a3d] opacity-90"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* THE FIX:
            1. grid-cols-2: Forces 2 columns on Mobile (Small screens).
            2. md:grid-cols-4: Forces 4 columns on Desktop (Medium+ screens).
            3. gap-6: Adds space between the cards.
            4. max-w-6xl mx-auto: Centers the entire grid on the page.
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              {/* Icon */}
              <div className="text-[#FF8C00] mb-3 text-3xl">
                <i className={`fas ${stat.icon}`}></i>
              </div>
              
              {/* Number */}
              <h3 className="text-3xl md:text-5xl font-serif font-bold mb-1 text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              
              {/* Label */}
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}