import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message, consent } = body

    // Validate required fields
    if (!name || !email || !message || !consent) {
      return NextResponse.json(
        { error: 'Chybí povinné údaje' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Neplatný email' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send email using Resend, SendGrid, or similar service
    // 2. Save to database
    // 3. Send notification to admin
    
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      service,
      message,
      consent,
      timestamp: new Date().toISOString()
    })

    // Simulate email sending
    // In production, you would use a service like Resend:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'noreply@dagmarmazalova.cz',
      to: 'info@dagmarmazalova.cz',
      subject: `Nová zpráva od ${name}`,
      html: `
        <h2>Nová zpráva z kontaktního formuláře</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Neuvedeno'}</p>
        <p><strong>Služba:</strong> ${service || 'Neuvedeno'}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })
    */

    return NextResponse.json(
      { message: 'Zpráva byla úspěšně odeslána' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Došlo k chybě při odesílání zprávy' },
      { status: 500 }
    )
  }
}
