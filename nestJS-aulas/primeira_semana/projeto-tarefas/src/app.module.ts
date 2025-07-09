import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TarefasModule } from './tarefas/tarefas.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Torna disponível em toda a aplicação
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        autoLoadEntities: true, // carrega entidades automaticamente
        synchronize: true, // ⚠️ usar apenas em desenvolvimento!
      }),
    }),
    TarefasModule,
    UsuarioModule,
    AuthModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('tarefas'); // aplica somente às rotas de /tarefas
  }
}
