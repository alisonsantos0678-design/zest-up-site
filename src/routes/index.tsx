import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import bannerAmbos from "@/assets/banner-ambos.jpeg.asset.json";
import flavio1 from "@/assets/flavio-1.jpeg.asset.json";
import flavio2 from "@/assets/flavio-2.jpeg.asset.json";
import robernei1 from "@/assets/robernei-1.jpeg.asset.json";
import robernei2 from "@/assets/robernei-2.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const slides = [
  {
    img: bannerAmbos.url,
    eyebrow: "Alencar & Marchezi Advogados Associados",
    title: (
      <>
        Duas especialidades, <em className="gold-text not-italic">uma única</em> dedicação a você
      </>
    ),
    text: "Advocacia Cível, Trabalhista, Previdenciária e Criminal.",
    btns: [
      { href: "#contato", label: "Fale com um Especialista", solid: true },
      { href: "#areas", label: "Conhecer Áreas de Atuação" },
    ],
  },
  {
    img: robernei1.url,
    eyebrow: "Dr Flavio Alencar · Direito Criminal",
    title: (
      <>
        Defesa técnica em casos de <em className="gold-text not-italic">violência doméstica</em>
      </>
    ),
    text: "Atuação criminal especializada, conduzida com rigor técnico, sigilo e respeito a cada parte envolvida.",
    btns: [
      { href: "#contato", label: "Falar com Dr Flavio Alencar", solid: true },
      { href: "#sobre", label: "Conhecer o Advogado" },
    ],
  },
  {
    img: flavio1.url,
    eyebrow: "Dr Robernei Marchezi · Direito Trabalhista",
    title: (
      <>
        Seus direitos <em className="gold-text not-italic">trabalhistas</em> defendidos com solidez
      </>
    ),
    text: "Assessoria completa em causas trabalhistas, familiares e cíveis, com orientação clara do início ao fim.",
    btns: [
      { href: "#contato", label: "Falar com Dr Robernei Marchezi", solid: true },
      { href: "#sobre", label: "Conhecer o Advogado" },
    ],
  },
];

const areas = [
  {
    num: "01",
    title: "Direito Criminal · Violência Doméstica",
    tag: "Dr Flavio Alencar",
    desc: "Atuação especializada na defesa de pessoas envolvidas em processos relacionados a violência doméstica, com acompanhamento em todas as fases, desde a fase policial até o julgamento. O trabalho é conduzido com atenção aos detalhes processuais, respeito ao contraditório e busca pela solução mais adequada a cada situação, sempre dentro dos limites da lei e com total sigilo sobre as informações do cliente.",
  },
  {
    num: "02",
    title: "Direito Trabalhista",
    tag: "Dr Robernei Marchezi",
    desc: "Assessoria completa para trabalhadores e empregadores em questões relacionadas a rescisão, verbas rescisórias, horas extras, assédio moral, acidentes de trabalho e demais direitos previstos na legislação trabalhista. O acompanhamento inclui orientação prévia, tentativa de acordo e, quando necessário, ajuizamento de ação para garantir o cumprimento dos direitos do cliente.",
  },
  {
    num: "03",
    title: "Direito de Família",
    tag: "Dr Robernei Marchezi",
    desc: "Condução de processos de divórcio, guarda, pensão alimentícia, partilha de bens e reconhecimento de união estável, com atendimento humanizado em momentos que exigem sensibilidade e clareza. O objetivo é garantir que os direitos de cada membro da família sejam respeitados, buscando sempre a via mais rápida e menos desgastante para todos os envolvidos.",
  },
  {
    num: "04",
    title: "Inventário e Sucessões",
    tag: "Dr Robernei Marchezi",
    desc: "Orientação jurídica completa para a abertura de inventário, judicial ou extrajudicial, com atenção ao prazo legal de sessenta dias após o falecimento para evitar multas sobre o imposto de transmissão. O acompanhamento cuida da partilha justa dos bens, do respeito a vontade do falecido e da tranquilidade da família para seguir em frente.",
  },
  {
    num: "05",
    title: "Direito Civil",
    tag: "Dr Robernei Marchezi",
    desc: "Atuação em contratos, cobranças, indenizações e demais questões cíveis, com análise detalhada de cada situação para propor a estratégia mais segura ao cliente. O escritório acompanha o processo do início ao fim, mantendo o cliente informado sobre cada etapa e decisão do caso.",
  },
];

const porque = [
  { n: "I", h: "Especialização Real", p: "Cada área conduzida pelo advogado com formação e experiência específica para o seu caso, sem generalizações." },
  { n: "II", h: "Atendimento Humanizado", p: "Escuta atenta e linguagem clara em cada conversa, sem termos técnicos desnecessários ou distância com o cliente." },
  { n: "III", h: "Transparência no Processo", p: "Você acompanha cada etapa do seu caso, com orientação sobre prazos, custos e possíveis desdobramentos." },
  { n: "IV", h: "Soluções Eficientes", p: "Escolha da via mais rápida e segura, judicial ou extrajudicial, para resolver sua questão com agilidade." },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Btn({
  href,
  children,
  variant = "gold",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "ghost" | "outline";
  className?: string;
}) {
  const cls =
    variant === "gold" ? "btn-gold" : variant === "ghost" ? "btn-ghost-gold" : "btn-outline-gold";
  return (
    <a href={href} className={`${cls} ${className}`}>
      <span>{children}</span>
      <span aria-hidden>→</span>
    </a>
  );
}

function Index() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useReveal();

  const goTo = (i: number) => setCurrent((i + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const resetAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6500);
  };

  return (
    <div className="bg-white text-ink">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-gold/25 backdrop-blur-md" style={{ background: "rgba(15,26,46,0.92)" }}>
        <div className="max-w-[1180px] mx-auto px-4 sm:px-8 py-[18px] flex items-center justify-between">
          <a href="#topo" className="text-white font-serif text-[22px] tracking-wide">
            Alencar <span className="text-gold">&</span> Marchezi
          </a>
          <nav className="hidden md:block">
            <ul className="flex gap-9 list-none">
              {[
                ["Sobre", "#sobre"],
                ["Áreas de Atuação", "#areas"],
                ["Por que nos", "#porque"],
                ["Contato", "#contato"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="relative text-cream text-sm tracking-wide transition-colors hover:text-gold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#contato"
            className="md:hidden inline-flex items-center px-5 py-2 border border-white/55 text-white text-sm hover:bg-white hover:text-navy transition"
          >
            Fale Conosco
          </a>
        </div>
      </header>

      {/* HERO SLIDER */}
      <section id="topo" className="relative overflow-hidden bg-navy" style={{ height: "100vh", minHeight: 640 }}>
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center transition-opacity duration-1000"
            style={{ opacity: current === i ? 1 : 0, pointerEvents: current === i ? "auto" : "none" }}
          >
            <img
              key={`${i}-${current === i}`}
              src={s.img}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover ${current === i ? "slide-img-anim" : ""}`}
              style={{ objectPosition: "center 15%" }}
            />
            <div
              className="absolute inset-0 z-[1]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(15,26,46,.94) 0%, rgba(15,26,46,.75) 42%, rgba(15,26,46,.35) 75%, rgba(15,26,46,.15) 100%)",
              }}
            />
            {/* subtle gold vignette */}
            <div
              className="absolute inset-0 z-[1] pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(201,161,90,.15), transparent 55%)" }}
            />
            <div className="relative z-[2] max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 w-full">
              <div className="max-w-[880px]">
                <span className="hero-eyebrow mb-7">{s.eyebrow}</span>
                <h1 className="hero-display mt-6 mb-8">{s.title}</h1>
                <p className="text-cream/90 text-[19px] md:text-[20px] leading-relaxed max-w-[560px] mb-10 font-light">
                  {s.text}
                </p>
                <div className="flex gap-4 flex-wrap">
                  {s.btns.map((b, k) => (
                    <Btn key={k} href={b.href} variant={b.solid ? "gold" : "ghost"}>
                      {b.label}
                    </Btn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-[5] flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => {
                goTo(i);
                resetAuto();
              }}
              className="w-2.5 h-2.5 rounded-full border border-gold transition-all p-0"
              style={{ background: current === i ? "var(--gold)" : "transparent", width: current === i ? 28 : 10 }}
            />
          ))}
        </div>
        <div className="absolute right-8 bottom-7 z-[5] flex gap-2.5">
          <button
            onClick={() => {
              prev();
              resetAuto();
            }}
            className="w-11 h-11 border border-gold-light/50 text-gold-light hover:bg-gold hover:text-navy hover:border-gold transition flex items-center justify-center"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={() => {
              next();
              resetAuto();
            }}
            className="w-11 h-11 border border-gold-light/50 text-gold-light hover:bg-gold hover:text-navy hover:border-gold transition flex items-center justify-center"
            aria-label="Próximo"
          >
            ›
          </button>
        </div>

        {/* scroll hint */}
        <div className="absolute left-8 bottom-8 z-[5] hidden md:flex flex-col items-center gap-2 text-gold-light/70 text-xs tracking-widest floaty">
          <span className="rotate-90 origin-center mt-4"></span>
          <span className="w-px h-10 bg-gold-light/40" />
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-cream py-28">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-16 reveal">
            <span className="inline-block mb-4 italic tracking-[0.14em] uppercase text-[12.5px] text-gold">Quem Somos</span>
            <h2 className="mb-4" style={{ fontSize: "clamp(30px,3.6vw,42px)" }}>
              Sobre os Advogados
            </h2>
            <span className="rule-gold mb-5" />
            <p className="text-ink-soft text-base mt-3">
              Trajetórias distintas, unidas pelo mesmo compromisso com a excelência técnica e o cuidado com cada cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-14">
            {[
              {
                img: robernei2.url,
                role: "Direito Criminal",
                name: "Dr Flavio Alencar",
                paras: [
                  "Advogado criminalista com atuação dedicada a casos de violência doméstica, oferecendo defesa técnica atenta as particularidades de cada processo e ao amparo legal das partes envolvidas.",
                  "Sua atuação une conhecimento processual penal e sensibilidade para lidar com situações de grande complexidade emocional, sempre pautado pelo sigilo e pela conduta ética.",
                ],
                items: [
                  "Bacharel em Direito, com habilitação para atuação em todo o território nacional",
                  "Especialização em Direito Penal e Processual Penal",
                  "Atuação focada em Direito Criminal, com ênfase em Violência Doméstica",
                  "Inscrito na Ordem dos Advogados do Brasil",
                ],
                cta: "Falar com Dr Flavio Alencar",
              },
              {
                img: flavio2.url,
                role: "Direito Trabalhista",
                name: "Dr Robernei Marchezi",
                paras: [
                  "Advogado trabalhista com atuação ampla, incluindo também causas familiares, cíveis e sucessórias, conduzindo cada caso com orientação clara e soluções eficientes para o cliente.",
                  "Sua trajetória é marcada pelo atendimento humanizado, buscando sempre a via mais rápida e segura para a resolução de cada demanda, seja judicial ou extrajudicial.",
                ],
                items: [
                  "Bacharel em Direito, OAB/SP 315.121",
                  "Especialização em Direito do Trabalho e Direito Civil",
                  "Atuação em causas Trabalhistas, Famíliares, Cíveis e Inventários",
                  "Atendimento humanizado com foco em soluções eficientes",
                ],
                cta: "Falar com Dr Robernei Marchezi",
              },
            ].map((law) => (
              <article
                key={law.name}
                className="group bg-white border border-line reveal transition-all duration-500 hover:-translate-y-1.5"
                style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.02)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-elegant)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 0 rgba(0,0,0,0.02)")}
              >
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-navy/5">
                  <img
                    src={law.img}
                    alt={law.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    style={{ objectPosition: "center 20%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                </div>
                <div className="px-5 pt-7 pb-8 sm:px-9 sm:pt-9 sm:pb-10">
                  <span className="block italic text-gold text-[13.5px] tracking-widest uppercase mb-2">{law.role}</span>
                  <h3 className="text-[29px] mb-4">{law.name}</h3>
                  {law.paras.map((p, i) => (
                    <p key={i} className="text-ink-soft text-[15.5px] mb-3.5">
                      {p}
                    </p>
                  ))}
                  <div className="mt-5 pt-5 border-t border-line">
                    <span className="block text-xs tracking-[0.1em] uppercase text-navy mb-2.5 font-semibold">
                      Formação e Atuação
                    </span>
                    <ul className="list-none">
                      {law.items.map((it) => (
                        <li key={it} className="relative pl-4 text-ink-soft text-[14.5px] mb-2 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-px before:bg-gold">
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Btn href="#contato" className="w-full justify-center mt-7">
                    {law.cta}
                  </Btn>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section id="areas" className="py-28 bg-white">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-16 reveal">
            <span className="inline-block mb-4 italic tracking-[0.14em] uppercase text-[12.5px] text-gold">Especialidades</span>
            <h2 className="mb-4" style={{ fontSize: "clamp(30px,3.6vw,42px)" }}>
              Áreas de Atuação
            </h2>
            <span className="rule-gold mb-5" />
            <p className="text-ink-soft text-base mt-3">
              Cada área conduzida pelo profissional com a especialização adequada ao caso, garantindo atendimento técnico e próximo.
            </p>
          </div>

          <div className="flex flex-col">
            {areas.map((a, i) => (
              <div
                key={a.num}
                className={`grid md:grid-cols-[.55fr_1fr] gap-8 md:gap-14 py-12 border-t border-line ${
                  i === areas.length - 1 ? "border-b" : ""
                } items-start reveal group transition-colors hover:bg-cream/40`}
              >
                <div className="font-serif italic text-gold tracking-widest text-[15px] md:text-[42px] md:not-italic md:font-normal transition-transform group-hover:translate-x-2">
                  {a.num}
                </div>
                <div>
                  <div className="flex items-baseline gap-3.5 mb-2 flex-wrap">
                    <h3 className="text-[26px]">{a.title}</h3>
                    <span className="text-xs tracking-wide uppercase text-navy bg-cream border border-line px-3 py-1 whitespace-nowrap">
                      {a.tag}
                    </span>
                  </div>
                  <p className="text-ink-soft text-[15.5px] max-w-[640px] mb-5">{a.desc}</p>
                  <Btn href="#contato">Falar sobre este caso</Btn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE */}
      <section id="porque" className="bg-navy py-28 relative overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 60%)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--gold-light) 0%, transparent 60%)" }}
        />
        <div className="max-w-[1180px] mx-auto px-4 sm:px-8 relative">
          <div className="text-center max-w-[640px] mx-auto mb-16 reveal">
            <span className="inline-block mb-4 italic tracking-[0.14em] uppercase text-[12.5px] text-gold">Nosso Diferencial</span>
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(30px,3.6vw,42px)" }}>
              Por que Contratar Nossos Advogados
            </h2>
            <span className="rule-gold mb-5" />
            <p className="text-cream/80 text-base mt-3">
              Um atendimento pensado para dar segurança jurídica e tranquilidade em cada etapa do seu caso.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold-light/20 border border-gold-light/20 reveal">
            {porque.map((c) => (
              <div key={c.n} className="p-6 sm:p-10 group transition-colors duration-500" style={{ background: "var(--navy-2)" }}>
                <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center mb-6 text-gold-light font-serif italic text-[19px] transition-all group-hover:bg-gold group-hover:text-navy group-hover:rotate-[360deg] duration-700">
                  {c.n}
                </div>
                <h4 className="text-white text-[20px] mb-3">{c.h}</h4>
                <p className="text-cream/75 text-[14.5px]">{c.p}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Btn href="#contato" variant="ghost">
              Fale com um Especialista
            </Btn>
          </div>
        </div>
      </section>

      {/* CTA / FORM */}
      <section id="contato" className="bg-cream py-28">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-16 items-center">
            <div className="reveal">
              <span className="inline-block mb-4 italic tracking-[0.14em] uppercase text-[12.5px] text-gold">Fale Conosco</span>
              <h2 className="mb-5" style={{ fontSize: "clamp(30px,3.6vw,40px)" }}>
                Vamos conversar sobre o seu caso
              </h2>
              <p className="text-ink-soft text-base mb-8 max-w-[420px]">
                Preencha o formulário ao lado ou entre em contato diretamente com o advogado responsável pela sua área. O primeiro passo para a solução do seu caso começa aqui.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3.5 items-start">
                  <div className="w-10 h-10 border border-gold flex items-center justify-center text-gold font-serif shrink-0">F</div>
                  <div>
                    <strong className="block text-navy text-[15px]">Dr Flavio Alencar</strong>
                    <span className="text-ink-soft text-[14.5px]">Direito Criminal, Violência Doméstica</span>
                  </div>
                </div>
                <div className="flex gap-3.5 items-start">
                  <div className="w-10 h-10 border border-gold flex items-center justify-center text-gold font-serif shrink-0">R</div>
                  <div>
                    <strong className="block text-navy text-[15px]">Dr Robernei Marchezi</strong>
                    <span className="text-ink-soft text-[14.5px]">OAB/SP 315.121 · (19) 99292 7879</span>
                  </div>
                </div>
              </div>
            </div>

            <form
              className="bg-white border border-line p-6 sm:p-10 md:p-12 reveal relative"
              style={{ boxShadow: "var(--shadow-elegant)" }}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Recebemos sua solicitação. Em breve entraremos em contato.");
              }}
            >
              <div className="absolute -top-px left-0 right-0 h-px" style={{ background: "var(--gradient-gold)" }} />
              <h3 className="text-[23px] mb-2">Solicite uma Orientação</h3>
              <p className="text-ink-soft text-[14.5px] mb-8">
                Retornaremos o contato o mais breve possível para entender melhor a sua situação.
              </p>

              {[
                { id: "email", label: "E mail", type: "email", ph: "seuemail@exemplo.com" },
                { id: "telefone", label: "Telefone", type: "tel", ph: "(19) 99999 9999" },
                { id: "causa", label: "Causa", type: "text", ph: "Descreva brevemente o seu caso" },
              ].map((f) => (
                <div key={f.id} className="mb-5">
                  <label htmlFor={f.id} className="block text-[13px] tracking-wide text-navy mb-2 font-medium">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    placeholder={f.ph}
                    required
                    className="w-full px-3.5 py-3 border border-line bg-white text-ink text-[14.5px] focus:outline-none focus:border-gold transition"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-gold bg-gold text-navy text-[14.5px] tracking-wide cursor-pointer transition-all duration-300 hover:bg-transparent hover:text-navy mt-2"
              >
                Enviar Solicitação <span aria-hidden>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy pt-12 pb-7 border-t border-gold/20">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
          <div className="flex flex-wrap justify-between items-center gap-5 pb-6 mb-6 border-b border-white/10">
            <div className="text-white font-serif text-[20px]">
              Alencar <span className="text-gold">&</span> Marchezi
            </div>
            <nav>
              <ul className="flex flex-wrap gap-6 list-none">
                {[
                  ["Sobre", "#sobre"],
                  ["Áreas de Atuação", "#areas"],
                  ["Por que nos", "#porque"],
                  ["Contato", "#contato"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="text-cream/80 text-[13.5px] hover:text-gold hover:opacity-100 transition">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="text-center text-cream/55 text-[13px]">
            Alencar & Marchezi Advogados Associados. Atendimento humanizado, soluções eficientes, resultados que fazem a diferença.
          </div>
        </div>
      </footer>
    </div>
  );
}
