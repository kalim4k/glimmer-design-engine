import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, DollarSign, Smartphone, Globe, ArrowRight, Wallet, TrendingUp } from 'lucide-react';
import confetti from 'canvas-confetti';

const SALES_PAGE_URL = "https://kgpqinxc.mychariow.shop/prd_z2mi5b";

interface QuizStep {
  id: string;
  type: 'intro' | 'question' | 'final';
  title?: string;
  subtitle?: string;
  text?: string;
  cta?: string;
  question?: string;
  video?: string;
  options?: string[];
  recap?: string[];
}

const questions: QuizStep[] = [
  {
    id: 'intro',
    type: 'intro',
    title: "Gagnez de l'argent réel en Afrique",
    subtitle: "Découvrez les méthodes qui fonctionnent vraiment",
    text: "Vous souhaitez gagner 5000 FCFA par jour en ligne gratuitement ?",
    cta: "Commencer le test d'éligibilité"
  },
  {
    id: 'q1',
    type: 'question',
    question: "Avez-vous déjà testé des applications pour gagner de l'argent en ligne ?",
    options: ["Oui, plusieurs fois", "Non, jamais", "J'ai essayé sans succès"]
  },
  {
    id: 'q2',
    type: 'question',
    question: "Avez-vous déjà retiré de l'argent sur une application en ligne ou un jeu ?",
    options: ["Oui, j'ai déjà reçu de l'argent", "Non, jamais réussi à retirer"]
  },
  {
    id: 'q_goal',
    type: 'question',
    question: "Quel montant aimeriez-vous gagner par jour ?",
    options: ["1 000 - 5 000 FCFA", "5 000 - 10 000 FCFA", "Plus de 10 000 FCFA"]
  },
  {
    id: 'q3',
    type: 'question',
    question: "Connaissez-vous LUMI GAME ?",
    video: "https://celinaroom.com/wp-content/uploads/2026/01/video_2026-01-28_13-22-52.mp4",
    options: ["Oui, je connais", "Non, jamais entendu parler", "Juste de nom"]
  },
  {
    id: 'q4',
    type: 'question',
    question: "Connaissez-vous Google Adsense ?",
    options: ["Oui, je l'utilise", "Non, pas du tout", "J'en ai entendu parler"]
  },
  {
    id: 'final',
    type: 'final',
    title: "🎉 Félicitations ! Vous êtes éligible",
    text: "Nous avons sélectionné pour vous 10 sites et applications incroyables pour gagner de l'argent en Afrique gratuitement et retirer vos gains dès aujourd'hui.",
    recap: [
      "E-book : 10 applications & Sites Gratuits Pour Gagner Réellement De l'Argent En Afrique",
      "Guide pour retirer de l'argent via Mobile Money avec les apps",
      "Configuration de LUMI GAME pour gagner 5000 FCFA par jour",
      "Bonus : Guide pour créer un compte PayPal vérifié en Afrique"
    ],
    cta: "TÉLÉCHARGER L'EBOOK MAINTENANT"
  }
];

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    } else {
      window.location.href = SALES_PAGE_URL;
    }
  };

  const currentStep = questions[currentIndex];
  const progress = ((currentIndex) / (questions.length - 1)) * 100;

  useEffect(() => {
    if (currentStep.type === 'final') {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#10B981', '#34D399', '#FBBF24', '#F59E0B']
      });
      // Second burst for extra celebration
      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 100,
          origin: { y: 0.5, x: 0.3 },
          colors: ['#10B981', '#34D399', '#FBBF24']
        });
        confetti({
          particleCount: 80,
          spread: 100,
          origin: { y: 0.5, x: 0.7 },
          colors: ['#10B981', '#34D399', '#FBBF24']
        });
      }, 400);
    }
  }, [currentStep.type]);

  const cardVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.95,
      rotateY: dir > 0 ? 5 : -5,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 40 : -40,
      opacity: 0,
      scale: 0.95,
      rotateY: dir < 0 ? 5 : -5,
    }),
  };

  const staggerChildren = {
    center: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      }
    }
  };

  const childFadeUp = {
    enter: { opacity: 0, y: 15 },
    center: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-brand-dark via-foreground to-brand-dark">

      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 h-60 w-60 -translate-x-1/2 rounded-full bg-primary/10 blur-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Extra floating particles */}
        <motion.div
          className="absolute right-1/4 top-1/4 h-3 w-3 rounded-full bg-accent/40"
          animate={{ y: [0, -30, 0], x: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/4 bottom-1/3 h-2 w-2 rounded-full bg-primary/50"
          animate={{ y: [0, -20, 0], x: [0, -8, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
        <motion.div
          className="absolute right-1/3 bottom-1/4 h-4 w-4 rounded-full bg-accent/30"
          animate={{ y: [0, -25, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-lg flex-col px-4 py-6">

        {/* Progress Bar */}
        <motion.div
          className="mb-6 space-y-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between text-xs text-primary-foreground/70">
            <span>Étape {currentIndex} sur {questions.length - 2}</span>
            <motion.span
              key={Math.round(progress)}
              initial={{ scale: 1.3, color: "hsl(45, 100%, 50%)" }}
              animate={{ scale: 1, color: "hsla(0, 0%, 100%, 0.7)" }}
              transition={{ duration: 0.4 }}
            >
              {Math.round(progress)}%
            </motion.span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-primary-foreground/10 shadow-inner">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary via-primary to-accent shadow-[0_0_12px_hsl(152,100%,32%,0.5)]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        </motion.div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep.id}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="flex-1"
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
              variants={staggerChildren}
              initial="enter"
              animate="center"
            >

              {/* Icon Header */}
              <motion.div
                className="mb-6 flex justify-center"
                variants={childFadeUp}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <motion.div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{ boxShadow: ["0 10px 15px -3px hsla(152,100%,32%,0.3)", "0 10px 25px -3px hsla(45,100%,50%,0.3)", "0 10px 15px -3px hsla(152,100%,32%,0.3)"] }}
                  transition={{ boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                >
                  {currentStep.type === 'intro' && <DollarSign className="h-8 w-8 text-primary-foreground" />}
                  {currentStep.type === 'question' && <TrendingUp className="h-8 w-8 text-primary-foreground" />}
                  {currentStep.type === 'final' && <Wallet className="h-8 w-8 text-primary-foreground" />}
                </motion.div>
              </motion.div>

              {/* Video Content */}
              {currentStep.video && (
                <motion.div
                  className="mb-6 overflow-hidden rounded-xl ring-1 ring-primary-foreground/10"
                  variants={childFadeUp}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <video autoPlay loop muted playsInline className="w-full rounded-xl">
                    <source src={currentStep.video} type="video/mp4" />
                  </video>
                </motion.div>
              )}

              {/* Text Content */}
              <div className="mb-8 space-y-3 text-center">
                {currentStep.subtitle && (
                  <motion.p
                    className="text-sm font-medium uppercase tracking-wider text-accent"
                    variants={childFadeUp}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {currentStep.subtitle}
                  </motion.p>
                )}

                {currentStep.title && (
                  <motion.h1
                    className="text-2xl font-extrabold leading-tight text-primary-foreground sm:text-3xl"
                    variants={childFadeUp}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {currentStep.title}
                  </motion.h1>
                )}

                {currentStep.text && (
                  <motion.p
                    className="text-base leading-relaxed text-primary-foreground/70"
                    variants={childFadeUp}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {currentStep.text}
                  </motion.p>
                )}

                {/* Recap List */}
                {currentStep.recap && (
                  <motion.div
                    className="mt-6 space-y-3 text-left"
                    variants={childFadeUp}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent">
                      <CheckCircle2 className="h-4 w-4" />
                      Ce que vous recevez :
                    </h3>
                    <ul className="space-y-2.5">
                      {currentStep.recap.map((item, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-primary-foreground/80"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35, delay: 0.3 + idx * 0.1, ease: "easeOut" }}
                        >
                          <motion.div
                            className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 + idx * 0.1, type: "spring", stiffness: 300 }}
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                          </motion.div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {currentStep.question && (
                  <motion.h2
                    className="text-lg font-bold text-primary-foreground sm:text-xl"
                    variants={childFadeUp}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {currentStep.question}
                  </motion.h2>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-3">
                {currentStep.type === 'question' ? (
                  currentStep.options?.map((option, idx) => (
                    <motion.button
                      key={idx}
                      onClick={handleNext}
                      className="flex w-full items-center justify-between rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-5 py-4 text-left text-sm font-medium text-primary-foreground"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.2 + idx * 0.08, ease: "easeOut" }}
                      whileHover={{
                        scale: 1.02,
                        borderColor: "hsla(152, 100%, 32%, 0.5)",
                        backgroundColor: "hsla(152, 100%, 32%, 0.1)",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {option}
                      <motion.div
                        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20"
                        whileHover={{ x: 3, backgroundColor: "hsla(152, 100%, 32%, 0.4)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </motion.div>
                    </motion.button>
                  ))
                ) : (
                  <motion.button
                    onClick={handleNext}
                    className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 20px 40px -10px hsla(152, 100%, 32%, 0.5)",
                    }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/15 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
                    />
                    <span className="relative z-10">{currentStep.cta}</span>
                    <motion.span
                      className="relative z-10"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </motion.button>
                )}
              </div>

              {/* Footer Trust Indicators */}
              {currentStep.type === 'intro' && (
                <motion.div
                  className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t border-primary-foreground/10 pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {[
                    { icon: CheckCircle2, label: "100% Gratuit" },
                    { icon: Globe, label: "Disponible en Afrique" },
                    { icon: Smartphone, label: "Retraits Mobile Money" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-1.5 text-xs text-primary-foreground/50"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
                      whileHover={{ scale: 1.05, color: "hsla(0, 0%, 100%, 0.7)" }}
                    >
                      <item.icon className="h-3.5 w-3.5 text-primary" />
                      {item.label}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Footer Copyright */}
        <motion.div
          className="mt-6 pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-center text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Ebook Afrique Cash. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
