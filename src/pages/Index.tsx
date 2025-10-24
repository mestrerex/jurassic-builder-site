import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Index = () => {
  const [guestCode, setGuestCode] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!guestCode.trim() && !email.trim()) {
      toast.error("Por favor, preencha ao menos um campo");
      return;
    }

    if (email && !email.includes("@")) {
      toast.error("Por favor, insira um e-mail válido");
      return;
    }

    toast.success("Registrado com sucesso! 🦖", {
      description: "Você será notificado em breve sobre o Mestre Rex"
    });
    
    setGuestCode("");
    setEmail("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Title */}
        <h1 className="font-jurassic text-center text-5xl sm:text-6xl md:text-7xl mb-3 text-accent drop-shadow-[0_0_25px_hsl(45_60%_50%/0.5)] leading-tight tracking-wide">
          🦖 Mestre Rex
        </h1>
        
        <p className="text-center text-xl sm:text-2xl font-bold mb-12 text-foreground/80 tracking-wide">
          Em Construção
        </p>

        {/* Form Container */}
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="bg-card/60 backdrop-blur-sm p-8 rounded-2xl border-2 border-border shadow-[0_10px_40px_-10px_hsl(30_25%_15%/0.5)] hover:border-accent/50 transition-all duration-300">
            <div className="space-y-5">
              {/* Guest Code Input */}
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Código de convidado"
                  value={guestCode}
                  onChange={(e) => setGuestCode(e.target.value)}
                  className="h-14 text-base bg-input/80 border-2 border-border focus:border-accent focus:ring-accent/30 rounded-xl transition-all duration-300 placeholder:text-muted-foreground/60 shadow-inner"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Insira seu e-mail para ser notificado"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-base bg-input/80 border-2 border-border focus:border-accent focus:ring-accent/30 rounded-xl transition-all duration-300 placeholder:text-muted-foreground/60 shadow-inner"
                />
              </div>

              {/* Register Button */}
              <Button
                type="submit"
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground rounded-xl shadow-[0_0_20px_hsl(45_60%_50%/0.3)] hover:shadow-[0_0_30px_hsl(45_60%_50%/0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Registrar
              </Button>
            </div>
          </div>
        </form>

        {/* Footer Text */}
        <p className="text-center mt-8 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Algo grandioso está por vir.<br />
          Uma marca misteriosa e poderosa.
        </p>
      </div>
    </div>
  );
};

export default Index;
