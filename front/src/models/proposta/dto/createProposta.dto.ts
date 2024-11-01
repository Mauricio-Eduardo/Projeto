import { formatToDecimal } from "../../../components/form/Formats";
import { Proposta } from "../entity/Proposta";

export interface CreatePropostaDto {
  cliente_id: number | null;
  condPag_id: number;
  prazo_final: string;
  total: string;

  servicos: {
    servico_id: number;
    quantidade: number;
    valor_unitario: string;
    desconto: string;
    valor_total: string;
    peridiocidade_id: number;
    descricao: string;
    dias: number;
  }[];
}

export function transformarParaPostProposta(data: Proposta): CreatePropostaDto {
  return {
    cliente_id: data.cliente_id,
    condPag_id: data.condPag_id,
    prazo_final: data.prazo_final,
    total: formatToDecimal(data.total),
    servicos: data.servicos.map((servico) => ({
      ...servico,
      valor_unitario: formatToDecimal(servico.valor_unitario),
      desconto: formatToDecimal(servico.desconto),
      valor_total: formatToDecimal(servico.valor_total),
    })),
  };
}
