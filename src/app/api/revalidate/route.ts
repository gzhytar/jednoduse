import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { secret, type, slug } = body

    // Verify the secret to prevent unauthorized revalidation
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      )
    }

    // Revalidate based on the type of content
    switch (type) {
      case 'page':
        if (slug) {
          revalidatePath(`/${slug}`)
        } else {
          revalidatePath('/')
        }
        break
      
      case 'siteSettings':
        revalidatePath('/')
        revalidateTag('siteSettings')
        break
      
      case 'offering':
        revalidatePath('/sluzby')
        revalidateTag('offerings')
        break
      
      default:
        // Revalidate all pages
        revalidatePath('/')
        revalidatePath('/sluzby')
        revalidatePath('/o-mne')
        revalidatePath('/cenik')
        revalidatePath('/kontakt')
        break
    }

    return NextResponse.json(
      { message: 'Revalidation successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    )
  }
}
