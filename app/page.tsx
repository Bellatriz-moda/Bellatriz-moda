import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles, Dumbbell, Waves, Instagram, MessageCircle, Heart } from "lucide-react";

export default function BellatrizModaSite() {
  const categories = [
    {
      title: "Moda Feminina",
      desc: "Peças elegantes, confortáveis e modernas para valorizar seu estilo todos os dias.",
      icon: Sparkles,
    },
    {
      title: "Moda Fitness",
      desc: "Looks para treinar com segurança, beleza e atitude, sem abrir mão do conforto.",
      icon: Dumbbell,
    },
    {
      title: "Biquínis",
      desc: "Modelos femininos e marcantes para praia, piscina e momentos de verão.",
      icon: Waves,
    },
  ];

  const products = [
    "Conjuntos fitness",
    "Vestidos femininos",
    "Biquínis e moda praia",
    "Croppeds e blusas",
    "Shorts e saias",
    "Looks casuais",
  ];

  return (
    <div className="min-h-screen bg-[#f7fbff] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#123c69] shadow-lg">
              <span className="text-lg font-bold text-[#d8b35a]">BT</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wide text-[#123c69]">Bellatriz Moda</h1>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Feminina • Fitness • Praia</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#inicio" className="hover:text-[#123c69]">Início</a>
            <a href="#colecoes" className="hover:text-[#123c69]">Coleções</a>
            <a href="#sobre" className="hover:text-[#123c69]">Sobre</a>
            <a href="#contato" className="hover:text-[#123c69]">Contato</a>
          </nav>

          <a
            href="#contato"
            className="rounded-full bg-[#123c69] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Comprar agora
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden">
          <div className="absolute -right-32 top-12 h-96 w-96 rounded-full bg-[#d8b35a]/20 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#123c69]/20 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d8b35a]/40 bg-white px-4 py-2 text-sm font-medium text-[#123c69] shadow-sm">
                <Heart className="h-4 w-4 text-[#d8b35a]" />
                Moda feita para realçar sua beleza
              </div>

              <h2 className="max-w-xl text-5xl font-extrabold leading-tight text-[#123c69] md:text-6xl">
                Vista sua melhor versão com a Bellatriz Moda
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Uma marca feminina, moderna e elegante para quem ama se vestir bem em todos os momentos: do treino ao passeio, da praia ao dia a dia.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#colecoes"
                  className="rounded-full bg-[#123c69] px-8 py-4 text-center font-semibold text-white shadow-xl transition hover:scale-105"
                >
                  Ver coleções
                </a>
                <a
                  href="#contato"
                  className="rounded-full border border-[#123c69]/20 bg-white px-8 py-4 text-center font-semibold text-[#123c69] shadow-sm transition hover:scale-105"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[2rem] bg-gradient-to-br from-[#123c69] to-[#1d6096] p-6 shadow-2xl">
                <div className="rounded-[1.5rem] bg-white/95 p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#d8b35a]">Nova coleção</p>
                      <h3 className="text-3xl font-bold text-[#123c69]">Elegância em cada detalhe</h3>
                    </div>
                    <ShoppingBag className="h-10 w-10 text-[#d8b35a]" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="h-56 rounded-3xl bg-gradient-to-br from-[#eaf4ff] to-[#c9e4ff] p-5 shadow-inner">
                      <p className="font-bold text-[#123c69]">Fitness</p>
                      <p className="mt-2 text-sm text-slate-600">Conforto e estilo para treinar.</p>
                    </div>
                    <div className="h-56 rounded-3xl bg-gradient-to-br from-[#fff7df] to-[#f0d783] p-5 shadow-inner">
                      <p className="font-bold text-[#123c69]">Biquínis</p>
                      <p className="mt-2 text-sm text-slate-700">Verão com charme e personalidade.</p>
                    </div>
                    <div className="h-40 rounded-3xl bg-gradient-to-br from-white to-[#e8eef5] p-5 shadow-inner sm:col-span-2">
                      <p className="font-bold text-[#123c69]">Moda feminina</p>
                      <p className="mt-2 text-sm text-slate-600">Looks versáteis para mulheres que gostam de se destacar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="colecoes" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d8b35a]">Coleções</p>
              <h2 className="mt-3 text-4xl font-extrabold text-[#123c69]">Escolha seu estilo</h2>
              <p className="mt-4 text-slate-600">Peças pensadas para diferentes momentos da sua rotina.</p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {categories.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-[2rem] border border-slate-100 bg-[#f7fbff] p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#123c69] text-[#d8b35a]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#123c69]">{item.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-[2rem] bg-[#123c69] p-8 text-white shadow-2xl md:p-12">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d8b35a]">Produtos</p>
                  <h2 className="mt-3 text-4xl font-extrabold">O que você encontra por aqui</h2>
                  <p className="mt-5 leading-8 text-white/80">
                    A Bellatriz Moda une beleza, conforto e feminilidade em peças escolhidas para deixar cada cliente mais confiante.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {products.map((product) => (
                    <div key={product} className="rounded-2xl bg-white/10 p-4 font-medium backdrop-blur-sm">
                      {product}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d8b35a]">Sobre a marca</p>
              <h2 className="mt-3 text-4xl font-extrabold text-[#123c69]">Bellatriz Moda nasceu para mulheres reais</h2>
            </div>
            <div className="text-lg leading-8 text-slate-600">
              <p>
                Nossa missão é oferecer peças bonitas, atuais e versáteis para mulheres que querem se sentir bem em qualquer ocasião. A marca carrega um toque feminino, elegante e moderno, com atenção aos detalhes que fazem diferença no visual.
              </p>
              <p className="mt-5">
                Seja para treinar, curtir o verão ou montar um look especial, a Bellatriz Moda quer estar presente nos seus melhores momentos.
              </p>
            </div>
          </div>
        </section>

        <section id="contato" className="py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <div className="rounded-[2rem] bg-white p-8 shadow-2xl md:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d8b35a]">Atendimento</p>
              <h2 className="mt-3 text-4xl font-extrabold text-[#123c69]">Gostou de alguma peça?</h2>
              <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
                Entre em contato pelo WhatsApp ou acompanhe as novidades no Instagram. Será um prazer ajudar você a encontrar o look ideal.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="https://wa.me/5599999999999"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#123c69] px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#123c69]/20 bg-white px-8 py-4 font-semibold text-[#123c69] shadow-sm transition hover:scale-105"
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
              </div>

              <p className="mt-6 text-sm text-slate-400">Substitua os links pelo WhatsApp e Instagram oficiais da loja.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#123c69] px-6 py-8 text-center text-white">
        <p className="font-semibold">Bellatriz Moda</p>
        <p className="mt-2 text-sm text-white/70">Moda feminina, fitness e praia com elegância.</p>
      </footer>
    </div>
  );
}
