const Iris = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-4xl w-full relative z-10 animate-fade-in">
        <div className="bg-card/80 backdrop-blur-lg p-12 rounded-3xl border-2 border-accent/40 shadow-[0_0_50px_hsl(45_85%_55%/0.3)]">
          <h1 className="font-jurassic text-center text-5xl sm:text-6xl md:text-7xl mb-6 text-accent animate-pulse-glow bg-gradient-to-r from-cyan-300 via-accent to-cyan-300 bg-clip-text text-transparent">
            Verdade
          </h1>
          <p className="text-center text-2xl text-foreground/90 mb-8 font-medium">
            Bem-vindo, Iris
          </p>
          <div className="prose prose-invert mx-auto max-w-2xl">
            <p className="text-foreground/80 text-lg leading-relaxed text-center">
              Você foi escolhido. Esta é sua página exclusiva no universo Mestre Rex.
              <br /><br />
              O poder da <span className="text-cyan-300 font-bold">Verdade</span> te trouxe até aqui.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iris;
