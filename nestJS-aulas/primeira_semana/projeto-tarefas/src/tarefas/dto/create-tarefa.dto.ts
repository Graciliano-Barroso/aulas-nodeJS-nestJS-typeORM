import { IsNotEmpty } from "class-validator";

export class CreateTarefaDto {
  @IsNotEmpty({ message: 'O título não pode estar vazio.' })  
  titulo: string;

  @IsNotEmpty({ message: 'A descrição não pode estar vazia.' })
  descricao: string;
}
