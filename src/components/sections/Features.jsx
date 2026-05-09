import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center text-center space-y-6"
  >
    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="text-2xl font-bold text-on-background">{title}</h3>
    <p className="text-on-surface-variant leading-relaxed">{description}</p>
  </motion.div>
);

const Features = () => {
  return (
    <section className="py-24 bg-surface-container-low" id="funcionalidades">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-on-background"
          >
            Sempre Conectado
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-on-surface-variant max-w-2xl mx-auto"
          >
            Integração total com seu ecossistema digital. Receba alertas e responda com um toque, sem precisar tirar o smartphone do bolso.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="chat" 
            title="WhatsApp" 
            description="Leia mensagens e receba notificações instantâneas diretamente no seu pulso."
            delay={0.1}
          />
          <FeatureCard 
            icon="photo_camera" 
            title="Instagram" 
            description="Fique por dentro das suas interações sociais e curtidas em tempo real."
            delay={0.2}
          />
          <FeatureCard 
            icon="call" 
            title="Chamadas" 
            description="Identifique chamadas e nunca perca uma ligação importante enquanto estiver em movimento."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
