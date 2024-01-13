// Tell TypeScript and the package to use the global web fetch instead of node-fetch.
// Note, despite the name, this does not add any polyfills, but expects them to be provided if needed.
import "increase/shims/web";
import Increase from 'increase';

import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    response: NextApiResponse
) {
    const increase = new Increase({
        apiKey: process.env['NEXT_PUBLIC_INCREASE_API_KEY'],
        environment: 'sandbox',
        defaultHeaders: {
            'Content-Type': 'Accept',
            'Access-Control-Allow-Origin': 'localhost',
        },
    });

    const accounts = await increase.accounts.list()
    return NextResponse.json({ accounts })
}