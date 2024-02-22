import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

const blog = '/guides';

export const GET = async (req: NextRequest) => {
  return NextResponse.json({});
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const type = body.post.post_type;
    const slug = body.post.post_name;

    if (type === 'post') {
      revalidatePath(blog);
      revalidatePath(blog + '/' + slug);
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
    });
  }
};
