import { BarChart, LineChart, Lock } from 'lucide-react';

export function Welcome() {
  return (
    <div className="text-white mt-4 flex flex-col gap-4 h-full justify-center">
      <h2 className="text-3xl font-bold">Bem-vindo ao Smart Manager</h2>

      <p className="text-lg -mt-4 font-bold mb-6">
        Gerenciamento Descomplicado, Resultados Excepcionais
      </p>

      <p className="text-justify mb-10">
        Seja parte da revolução no gerenciamento de negócios com o Smart Manager
        da Vortex, a solução definitiva para potencializar o seu ponto de venda
        (PDV). Com uma interface intuitiva e recursos avançados, nosso
        aplicativo foi projetado para{' '}
        <strong>simplificar e otimizar todos os aspectos do seu negócio</strong>
        , permitindo que você foque no que realmente importa: o crescimento.
      </p>

      <div className="flex flex-col gap-2">
        <p className="font-bold flex items-center gap-2 leading-none opacity-80">
          <Lock size={18} /> Login de Acesso
        </p>
        <p className="font-bold flex items-center gap-2 leading-none opacity-80">
          <LineChart size={18} /> Controle de Vendas
        </p>
        <p className="font-bold flex items-center gap-2 leading-none opacity-80">
          <BarChart size={18} /> Estoque em Tempo Real
        </p>
      </div>
    </div>
  );
}