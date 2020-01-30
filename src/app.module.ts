import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ConfigModule, DatabaseModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  /**
   * Cuando es estatica no es necesario crear un objeto para acceder a ella
   * ya que siempre estará en memoria
   */
  static port: number | string
  constructor(private readonly _configService: ConfigService){
    AppModule.port = this._configService.get(Configuration.PORT)
  }
}
