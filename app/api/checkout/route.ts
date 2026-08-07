import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: Request) {
  try {
    // 1. Catch the custom price and name sent by the button
    const body = await request.json();
    const { amount, serviceName } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: serviceName || 'Vireel Agency Services', // Uses custom name or a default
            },
            unit_amount: amount, // This is now dynamic! (Still in cents)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/success`,
      cancel_url: `${request.headers.get('origin')}/canceled`,
    });

    return NextResponse.json({ url: session.url });
    
  } catch (err: any) { 
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}