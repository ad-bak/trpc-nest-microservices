import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePaymentRequest } from './dto/create-payment.request';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentsService) {}

  @Post()
  createPayment(@Body() request: CreatePaymentRequest) {
    return this.paymentService.createPayment(request);
  }

  @Get()
  getPayments() {
    return this.paymentService.getPayments();
  }
}
