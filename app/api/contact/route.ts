import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate the incoming data
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Here you would typically:
        // 1. Send an email using services like SendGrid, AWS SES, etc.
        // 2. Store the message in a database
        // 3. Forward to a CRM or other systems
        
        // For now, we'll just log the data
        console.log('Contact form submission:', { name, email, subject, message });

        // TODO: Implement your preferred method of handling the form data
        // Example: await sendEmail({ to: 'your@email.com', ...body });

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
