const BASE_URL = 'http://192.168.1.50:3001';

export const fetchConditions = async () => {
  const res = await fetch(`${BASE_URL}/conditions`);
  return res.json();
};

export const updateConditions = async (data: {
  temperature: number;
  lights: number;
  humidity: number;
}) => {
  const res = await fetch(`${BASE_URL}/conditions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const resetConditions = async () => {
  const res = await fetch(`${BASE_URL}/conditions/reset`, {
    method: 'POST',
  });
  return res.json();
};
