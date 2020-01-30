/**
 * Cada vez que realicemos una instacia de este modulo vamos a tener
 * la ventaja de usar las variables de entorno, ya que estas las traemos
 * en los servicios o config.services.ts
 */
import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
    // Aqui se brinda o prevee un objeto para su uso donde se instancie
    providers: [
        {
            provide: ConfigService,
            useValue: new ConfigService(),
        },
    ],
    exports: [ConfigService],
})
export class ConfigModule {}
