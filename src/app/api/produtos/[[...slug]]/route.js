import { NextResponse } from 'next/server';

const BACKEND_URL = 'http://10.0.3.77:25000/api/produtos';

async function forwardRequest(request, slug) {
    const url = slug ? `${BACKEND_URL}/${slug.join('/')}` : BACKEND_URL;

    const options = {
        method: request.method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (request.method !== 'GET' && request.method !== 'DELETE') {
        const body = await request.json();
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        return NextResponse.json(
            { error: 'Error forwarding request to backend' },
            { status: 500 }
        );
    }
}

export async function GET(request, { params }) {
    return forwardRequest(request, params.slug);
}