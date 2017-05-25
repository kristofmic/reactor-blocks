import express from 'express';
import path from 'path';

const router = new express.Router();

router.get('/', defaultRoute);

function defaultRoute(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'client.html'));
}

export default router;
