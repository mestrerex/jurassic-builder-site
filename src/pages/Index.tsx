import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [secretCode, setSecretCode] = useState("");
  const [email, setEmail] = useState("");
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isShaking, setIsShaking] = useState(false);

  // Mapeamento de códigos secretos para páginas exclusivas
  const secretCodes: Record<string, string> = {
    "Amor": "/jeisson",
    "Pureza": "/sol",
    "Força": "/lua",
    "Sabedoria": "/gaia",
    "Mistério": "/orion",
    "Foco": "/titan",
    "Luz": "/artemis",
    "Poder": "/atlas",
    "Coragem": "/vulcan",
    "Verdade": "/iris",
    "Evolução": "/rex"
  };

  const phrases = [
    "A força dos antigos está despertando.",
    "Prepare-se para algo colossal.",
    "O rugido da inovação ecoa novamente.",
    "Grandes ideias nunca dormem por muito tempo.",
    "Um novo império está surgindo das sombras.",
    "Quando o instinto encontra a inteligência, nasce o Mestre Rex.",
    "O futuro caminha com passos de gigante.",
    "Transformando a pré-história em tecnologia viva.",
    "Do caos, nasce o domínio.",
    "As lendas voltam… mais fortes do que nunca.",
    "A era dos dinossauros digitais começou."
  ];

  useEffect(() => {
    const getRandomPhrase = () => phrases[Math.floor(Math.random() * phrases.length)];
    setCurrentPhrase(getRandomPhrase());

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentPhrase(prev => {
          if (prev === "Em construção") {
            return getRandomPhrase();
          }
          return "Em construção";
        });
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!secretCode.trim()) {
      setIsShaking(true);
      toast.error("Por favor, insira um código", {
        className: "bg-destructive/90 text-destructive-foreground border-destructive"
      });
      setTimeout(() => setIsShaking(false), 500);
      return;
    }

    const targetPage = secretCodes[secretCode];
    
    if (targetPage) {
      toast.success("Código válido! Redirecionando...", {
        description: `Bem-vindo, ${secretCode}`,
        className: "bg-accent/90 text-accent-foreground border-accent"
      });
      setTimeout(() => navigate(targetPage), 1000);
    } else {
      setIsShaking(true);
      toast.error("Código inválido ou não autorizado", {
        description: "Verifique o código e tente novamente",
        className: "bg-destructive/90 text-destructive-foreground border-destructive"
      });
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error("Por favor, insira seu e-mail");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Por favor, insira um e-mail válido");
      return;
    }

    toast.success("Você entrou na fila! 🦖", {
      description: "Você será notificado em breve sobre o Mestre Rex",
      className: "bg-primary/90 text-primary-foreground border-primary"
    });
    
    setEmail("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 relative overflow-hidden">
      {/* Cosmic background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="w-full max-w-2xl animate-fade-in relative z-10">
        {/* Main Title - Metallic Gold with Pulse */}
        <h1 className="font-jurassic text-center text-6xl sm:text-7xl md:text-8xl mb-8 mt-12 text-accent animate-pulse leading-tight tracking-wider bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer drop-shadow-[0_0_30px_hsl(45_85%_55%/0.6)]">
          Mestre Rex
        </h1>
        
        {/* Rotating Phrase */}
        <div className="min-h-[140px] flex items-center justify-center mb-10">
          <p 
            className={`font-jurassic text-center text-xl sm:text-2xl md:text-3xl font-bold text-foreground/90 tracking-wide px-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-95'
            }`}
          >
            {currentPhrase}
          </p>
        </div>

        {/* Secret Code Entry Form */}
        <form onSubmit={handleEnter} className="space-y-6 mb-8">
          <div className={`bg-card/70 backdrop-blur-md p-8 rounded-2xl border-2 border-accent/30 shadow-[0_0_40px_hsl(45_85%_55%/0.2)] hover:border-accent/60 hover:shadow-[0_0_50px_hsl(45_85%_55%/0.35)] transition-all duration-300 ${isShaking ? 'animate-shake' : ''}`}>
            <div className="space-y-5">
              {/* Secret Code Input */}
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Digite seu código secreto"
                  value={secretCode}
                  onChange={(e) => setSecretCode(e.target.value)}
                  className="h-16 text-lg bg-input/90 border-2 border-accent/40 focus:border-accent focus:ring-4 focus:ring-accent/30 rounded-xl transition-all duration-300 placeholder:text-muted-foreground/70 shadow-inner font-medium"
                />
              </div>

              {/* Enter Button */}
              <Button
                type="submit"
                className="w-full h-16 text-xl font-bold bg-gradient-to-r from-accent via-yellow-400 to-accent bg-[length:200%_auto] hover:bg-[length:100%_auto] text-accent-foreground rounded-xl shadow-[0_0_25px_hsl(45_85%_55%/0.4),0_0_50px_hsl(200_80%_50%/0.2)] hover:shadow-[0_0_35px_hsl(45_85%_55%/0.6),0_0_70px_hsl(200_80%_50%/0.4)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 border-2 border-accent/50 animate-shimmer"
              >
                Entrar
              </Button>
            </div>
          </div>
        </form>

        {/* Waitlist Form */}
        <form onSubmit={handleWaitlist} className="space-y-6">
          <div className="bg-card/60 backdrop-blur-md p-8 rounded-2xl border-2 border-primary/30 shadow-[0_0_30px_hsl(200_80%_45%/0.2)] hover:border-primary/50 hover:shadow-[0_0_40px_hsl(200_80%_45%/0.3)] transition-all duration-300">
            <div className="space-y-5">
              {/* Email Input */}
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Insira seu e-mail para entrar na fila"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-base bg-input/90 border-2 border-primary/40 focus:border-primary focus:ring-4 focus:ring-primary/30 rounded-xl transition-all duration-300 placeholder:text-muted-foreground/70 shadow-inner"
                />
              </div>

              {/* Waitlist Button */}
              <Button
                type="submit"
                variant="outline"
                className="w-full h-14 text-lg font-bold bg-primary/10 border-2 border-primary/50 text-foreground hover:bg-primary/20 hover:border-primary hover:text-accent rounded-xl shadow-[0_0_20px_hsl(200_80%_45%/0.2)] hover:shadow-[0_0_30px_hsl(200_80%_45%/0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Entrar na fila (Inscreva-se)
              </Button>
            </div>
          </div>
        </form>

        {/* Footer Text */}
        <p className="text-center mt-10 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Algo grandioso está por vir.<br />
          <span className="text-accent/80">Uma marca misteriosa e poderosa.</span>
        </p>
      </div>
    </div>
  );
};

export default Index;
