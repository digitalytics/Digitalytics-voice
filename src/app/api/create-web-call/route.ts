export async function POST() {
  try {
    const res = await fetch('https://api.retellai.com/v2/create-web-call', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RETELL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ agent_id: process.env.RETELL_AGENT_ID }),
    });

    if (!res.ok) {
      const error = await res.text();
      return Response.json({ error }, { status: 500 });
    }

    const data = await res.json();
    return Response.json({ access_token: data.access_token });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: message }, { status: 500 });
  }
}
