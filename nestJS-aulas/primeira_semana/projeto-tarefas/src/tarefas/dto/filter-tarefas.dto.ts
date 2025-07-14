import { IsEnum, IsOptional, IsString } from "class-validator";
import { TarefaStatus } from "../enums/tarefa-status.enum";

export class FilterTarefasDto {
    @IsOptional()
    @IsEnum(TarefaStatus, {
        message: "Status inválido. Use ABERTA, EM_ANDAMENTO ou CONCLUIDA",
    })
    @IsString()
    status?: TarefaStatus;

    @IsOptional()
    @IsString()
    busca?: string;
}