import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="bg-[#F5F7FA] text-gray-800 font-sans">
      {/* Header */}
      <section className="bg-[#1A73E8] text-white py-12 px-6 text-center">
        <img src="/logo_arkon.png" alt="Arkon Logo" className="mx-auto h-16 mb-4" />
        <h1 className="text-4xl font-bold">Nathaniel Pereira</h1>
        <p className="text-lg mt-2 max-w-xl mx-auto">
          Desenvolvedor Web & Mobile | Dono da Arkon | Escalando negócios no digital
        </p>
      </section>

      {/* Sobre Mim */}
      <section className="py-16 px-6 md:px-24 grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/nathaniel.png"
          alt="Nathaniel Pereira"
          className="rounded-2xl shadow-xl mx-auto md:mx-0 w-64 md:w-80"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#1A73E8]">Sobre Mim</h2>
          <p className="text-lg mb-4">
            Meu nome é Nathaniel Pereira, tenho 26 anos, pai da Liz, atuo como Analista de Negócios e Sistema e também desenvolvedor Web & Mobile pela Arkon. Sou apaixonado por criar experiências digitais que geram resultados reais para empresas que oferecem serviços ou produtos.
          </p>
          <p>
            Com uma abordagem acessível, rápida e personalizada, ajudo empresas a marcarem presença digital com qualidade e confiança.
          </p>
        </div>
      </section>

      {/* Servicos */}
      <section className="bg-white py-16 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#1A73E8]">Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Landing Page</h3>
              <p>
                Perfeita para captar leads e apresentar um único serviço com foco em conversão.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Site Institucional</h3>
              <p>
                Apresente sua empresa com páginas bem estruturadas, modernas e responsivas.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Loja Online</h3>
              <p>
                Catálogo de produtos com agendamento, carrinho e pagamentos integrados.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 px-6 md:px-24">
        <h2 className="text-3xl font-bold mb-12 text-[#1A73E8] text-center">Portfólio de Projetos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-xl overflow-hidden shadow-md">
              <img src={`/site${n}.jpg`} alt={`Projeto ${n}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Projeto {n}</h3>
                <p className="text-sm text-gray-600">Descrição breve do projeto fictício ou real.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-white py-16 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#1A73E8]">Depoimentos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow">
            <CardContent className="p-6">
              <p className="italic">
                "Nathaniel foi incrível na criação do site da minha clínica. Atendimento rápido e direto."
              </p>
              <p className="mt-4 font-bold">— Cliente Satisfeito</p>
            </CardContent>
          </Card>
          <Card className="shadow">
            <CardContent className="p-6">
              <p className="italic">
                "Entrega profissional, com visual moderno e tudo funcionando perfeitamente no celular."
              </p>
              <p className="mt-4 font-bold">— Parceiro de Projeto</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 px-6 md:px-48 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#1A73E8]">Contato</h2>
        <form
          action="https://formsubmit.co/nathaniel@email.com"
          method="POST"
          className="grid gap-6"
        >
          <input type="text" name="nome" placeholder="Nome" required className="p-3 rounded border" />
          <input type="email" name="email" placeholder="E-mail" required className="p-3 rounded border" />
          <input type="tel" name="telefone" placeholder="Telefone" className="p-3 rounded border" />
          <textarea name="descricao" placeholder="Descrição do Projeto" required className="p-3 rounded border"></textarea>
          <Button type="submit" className="bg-[#00C9A7] text-white">
            <Send className="mr-2 w-4 h-4" /> Enviar
          </Button>
        </form>
      </section>

      <footer className="text-center py-8 text-sm bg-[#1A73E8] text-white">
        © {new Date().getFullYear()} Nathaniel Pereira · Arkon · Presença Digital Profissional para Todos
      </footer>
    </main>
  );
}
