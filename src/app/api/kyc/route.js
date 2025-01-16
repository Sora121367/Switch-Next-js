import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // Get the request body
    const { doc_base64, req_id } = await req.json();

    // Validate required fields
    if (!doc_base64 || !req_id) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Make the request to the passport reader API
    const response = await fetch('https://ping.arya.ai/api/v1/kyc', {
      method: 'POST',
      headers: {
        'token': process.env.ARYA_KYC_API_TOKEN || '', // Store token in .env file
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        doc_base64,
        req_id
      })
    });

    // Get the response data
    const data = await response.json();

    // Return the response
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error processing passport reader request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}