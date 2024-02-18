import { getProductByIdAndSlug } from '@/swell/product';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

type PayLoad = {
  model: 'products' | 'orders';
  data: {
    id: string;
  };
};

export const POST = async (req: NextRequest) => {
  try {
    const payload: PayLoad = await req.json();
    const productId = payload?.data?.id;

    const product = await getProductByIdAndSlug(productId);

    const slug = product?.slug;

    if (slug) {
      await revalidatePath('/solutions/' + slug);
      await revalidatePath('/');
      await revalidatePath('/(unAuthenticatedApp)', 'layout');
      await revalidatePath('/pricing');

      return Response.json({ revalidated: true, now: Date.now() });
    }

    return Response.json({
      sucess: false,
    });
  } catch (error) {
    console.error(error);
  }
};
