// app/api/liveness/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { doc_base64, req_id } = await req.json(); // Parsing incoming request body

    const apiUrl = "https://ping.arya.ai/api/v1/liveness";
    const privateToken = process.env.ARYA_LIVENESS_API_TOKEN;

    const requestBody = {
      doc_base64,
      req_id,
    };

    const apiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        token: privateToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const responseData = await apiResponse.json();
    return NextResponse.json(responseData, { status: apiResponse.status });
  } catch (error) {
    console.error('Error making API request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}