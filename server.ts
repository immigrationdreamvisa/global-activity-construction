import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // In-memory data store for submitted inquiries
  const inquiries: Array<{
    id: string;
    referenceId: string;
    fullName: string;
    company?: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    createdAt: string;
    status: string;
  }> = [];

  const equipmentRequests: Array<{
    id: string;
    referenceId: string;
    equipmentId: string;
    equipmentName: string;
    fullName: string;
    company?: string;
    email: string;
    phone: string;
    duration: string;
    location: string;
    notes?: string;
    createdAt: string;
  }> = [];

  // API Health check
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'operational',
      company: 'Global Activity Construction',
      country: 'Azerbaijan',
      timestamp: new Date().toISOString(),
    });
  });

  // Project / General Inquiry API
  app.post('/api/inquiries', (req, res) => {
    const { fullName, company, email, phone, service, message } = req.body;

    if (!fullName || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields. Please provide full name, email, phone number, and project details.',
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address format.',
      });
    }

    const referenceId = `GAC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newInquiry = {
      id: Math.random().toString(36).substring(2, 9),
      referenceId,
      fullName: String(fullName).trim(),
      company: company ? String(company).trim() : '',
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      service: service || 'General Construction',
      message: String(message).trim(),
      createdAt: new Date().toISOString(),
      status: 'Received & Logged',
    };

    inquiries.push(newInquiry);

    return res.status(201).json({
      success: true,
      referenceId,
      message: 'Thank you for contacting Global Activity Construction. Our engineering team will review your inquiry and get in touch within 24 hours.',
      data: newInquiry,
    });
  });

  // Construction Equipment Rental Inquiry API
  app.post('/api/equipment-rental', (req, res) => {
    const { fullName, company, email, phone, equipmentName, equipmentId, duration, location, notes } = req.body;

    if (!fullName || !email || !phone || !equipmentName) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields for machinery rental quotation.',
      });
    }

    const referenceId = `EQP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newRental = {
      id: Math.random().toString(36).substring(2, 9),
      referenceId,
      equipmentId: equipmentId || 'machinery',
      equipmentName: String(equipmentName),
      fullName: String(fullName).trim(),
      company: company ? String(company).trim() : '',
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      duration: duration || 'Flexible',
      location: location || 'Baku, Azerbaijan',
      notes: notes ? String(notes).trim() : '',
      createdAt: new Date().toISOString(),
    };

    equipmentRequests.push(newRental);

    return res.status(201).json({
      success: true,
      referenceId,
      message: `Equipment rental inquiry for ${equipmentName} registered successfully. Our dispatch department will send quotation specifications shortly.`,
      data: newRental,
    });
  });

  // Serve static files from public directory
  app.use(express.static(path.resolve(__dirname, 'public')));

  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Global Activity Construction server listening at http://0.0.0.0:${PORT}`);
  });
}

startServer();
