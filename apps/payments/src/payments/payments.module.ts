import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { PaymentsRouter } from './payment.router';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService, PaymentsRouter],
})
export class PaymentsModule {}
