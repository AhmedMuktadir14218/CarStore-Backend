import app from '../src/app'; // Import your existing Express app
import { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res); // Forward the request to your Express app
};
