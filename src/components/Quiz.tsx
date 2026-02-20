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
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10B981', '#34D399', '#FBBF24']
      });
    }
  }, [currentStep.type]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 20 : -20,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 20 : -20,
      opacity: 0,
      scale: 0.98
    }),
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-brand-dark via-foreground to-brand-dark">

      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute left-1/2 top-1/3 h-60 w-60 -translate-x-1/2 rounded-full bg-primary/10 blur-2xl animate-pulse-glow" style={{ animationDelay: '0.7s' }} />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-lg flex-col px-4 py-6">

        {/* Progress Bar */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center justify-between text-xs text-primary-foreground/70">
            <span>Étape {currentIndex} sur {questions.length - 2}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-primary-foreground/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex-1"
          >
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

              {/* Icon Header */}
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg">
                  {currentStep.type === 'intro' && <DollarSign className="h-8 w-8 text-primary-foreground" />}
                  {currentStep.type === 'question' && <TrendingUp className="h-8 w-8 text-primary-foreground" />}
                  {currentStep.type === 'final' && <Wallet className="h-8 w-8 text-primary-foreground" />}
                </div>
              </div>

              {/* Video Content */}
              {currentStep.video && (
                <div className="mb-6 overflow-hidden rounded-xl">
                  <video autoPlay loop muted playsInline className="w-full rounded-xl">
                    <source src={currentStep.video} type="video/mp4" />
                  </video>
                </div>
              )}

              {/* Text Content */}
              <div className="mb-8 space-y-3 text-center">
                {currentStep.subtitle && (
                  <p className="text-sm font-medium uppercase tracking-wider text-accent">
                    {currentStep.subtitle}
                  </p>
                )}

                {currentStep.title && (
                  <h1 className="text-2xl font-extrabold leading-tight text-primary-foreground sm:text-3xl">
                    {currentStep.title}
                  </h1>
                )}

                {currentStep.text && (
                  <p className="text-base leading-relaxed text-primary-foreground/70">
                    {currentStep.text}
                  </p>
                )}

                {/* Recap List */}
                {currentStep.recap && (
                  <div className="mt-6 space-y-3 text-left">
                    <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent">
                      <CheckCircle2 className="h-4 w-4" />
                      Ce que vous recevez :
                    </h3>
                    <ul className="space-y-2.5">
                      {currentStep.recap.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-primary-foreground/80">
                          <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {currentStep.question && (
                  <h2 className="text-lg font-bold text-primary-foreground sm:text-xl">
                    {currentStep.question}
                  </h2>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-3">
                {currentStep.type === 'question' ? (
                  currentStep.options?.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={handleNext}
                      className="flex w-full items-center justify-between rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-5 py-4 text-left text-sm font-medium text-primary-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 active:scale-[0.98]"
                    >
                      {option}
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                    </button>
                  ))
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-200 hover:shadow-xl hover:shadow-primary/40 active:scale-[0.98]"
                  >
                    {currentStep.cta}
                    <ArrowRight className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Footer Trust Indicators */}
              {currentStep.type === 'intro' && (
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t border-primary-foreground/10 pt-6">
                  <div className="flex items-center gap-1.5 text-xs text-primary-foreground/50">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    100% Gratuit
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-primary-foreground/50">
                    <Globe className="h-3.5 w-3.5 text-primary" />
                    Disponible en Afrique
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-primary-foreground/50">
                    <Smartphone className="h-3.5 w-3.5 text-primary" />
                    Retraits Mobile Money
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer Copyright */}
        <div className="mt-6 pb-4">
          <p className="text-center text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Ebook Afrique Cash. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
