export const API_URL = 'https://api-express-ycx5.onrender.com';

export function PRODUCT_GET() {
  return {
    url: `${API_URL}/product`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}
