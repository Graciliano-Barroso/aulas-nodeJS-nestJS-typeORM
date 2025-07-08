import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TarefasModule } from './tarefas/tarefas.module';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [TarefasModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes("tarefas") // aplica somente às rotas de /tarefas
  }
}
