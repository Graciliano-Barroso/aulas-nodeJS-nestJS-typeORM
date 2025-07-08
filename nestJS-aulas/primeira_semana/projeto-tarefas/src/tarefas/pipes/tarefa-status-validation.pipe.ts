import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TarefaStatus } from '../enums/tarefa-status.enum';

export class TarefaStatusValidationPipe implements PipeTransform {
  readonly statusPermitidos = [
    TarefaStatus.ABERTA,
    TarefaStatus.EM_ANDAMENTO,
    TarefaStatus.FINALIZADA,
  ];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.statusValido(value)) {
      throw new BadRequestException(`Status inválido: ${value}`);
    }

    return value;
  }

  private statusValido(status: any) {
    return this.statusPermitidos.includes(status);
  }
}
