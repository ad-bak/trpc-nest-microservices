import { Injectable } from '@nestjs/common';
import { CreatePaymentRequest } from './dto/create-payment.request';

@Injectable()
export class PaymentsService {
  private readonly payments: any[] = [];

  createPayment(request: CreatePaymentRequest) {
    const payment: any = {
      ...request,
      id: Math.random().toString(36).substring(2, 15),
    };
    this.payments.push(payment);
    return payment;
  }

  getPayments() {
    return this.payments;
  }
}
