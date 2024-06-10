export type TurnstileResponse = { success: boolean };

export const verifyTurnstileToken = async (token: string | undefined) => {
  if (!token) return;
  try {
    const response = await fetch('/api/turnstile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const data: TurnstileResponse = await response.json();

    return data;
  } catch (error) {
    return { success: false };
  }
};
