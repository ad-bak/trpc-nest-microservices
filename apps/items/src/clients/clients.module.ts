import { Module } from '@nestjs/common';
import { CLIENTS } from './clients.constants';
import { ConfigService } from '@nestjs/config';
import { Clients } from './clients.interface';
import { createPaymentsClient } from './payments.client';

@Module({
  providers: [
    {
      provide: CLIENTS,
      useFactory: (configService: ConfigService): Clients => ({
        paymentsClient: createPaymentsClient(
          configService.getOrThrow('PAYMENTS_URL'),
        ),
      }),
      inject: [ConfigService],
    },
  ],
  exports: [CLIENTS],
})
export class ClientsModule {}
