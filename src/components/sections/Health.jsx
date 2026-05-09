import React from 'react';
import { motion } from 'framer-motion';

const Health = () => {
  const items = [
    { icon: 'bedtime', text: 'Monitoramento de sono profundo e leve' },
    { icon: 'water_drop', text: 'Lembretes inteligentes de hidratação' },
    { icon: 'ecg', text: 'Acompanhamento de batimentos cardíacos' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="saude">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <img 
              src="relogio2.jpg" 
              alt="Health Monitoring Dashboard" 
              className="rounded-[40px] shadow-2xl w-full"
            />
            
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-xl border border-white/40 p-6 rounded-3xl shadow-2xl flex items-center gap-5"
            >
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">FREQUÊNCIA</p>
                <p className="text-2xl font-bold text-on-background">72 BPM</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-background leading-tight">
              Seu Assistente de Bem-Estar
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              O Chronos Ultra monitora seu corpo 24 horas por dia. Com sensores bio-ópticos avançados, você terá dados precisos para uma vida mais equilibrada.
            </p>
            
            <ul className="space-y-4">
              {items.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-surface-container-low/50 hover:bg-primary/5 transition-colors group"
                >
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                    {item.icon}
                  </span>
                  <span className="font-semibold text-on-surface">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Health;
