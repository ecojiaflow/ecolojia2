import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const newProduct = await prisma.product.create({
      data: body
    });

    try {
      const webhookUrl = process.env.N8N_WEBHOOK_URL;
      if (webhookUrl) {
        const enrichmentResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProduct)
        });

        if (!enrichmentResponse.ok) {
          console.error('Failed to trigger enrichment webhook:', await enrichmentResponse.text());
        }
      }
    } catch (webhookError) {
      console.error('Error calling enrichment webhook:', webhookError);
    }

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}