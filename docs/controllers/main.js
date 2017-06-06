import express from 'express';
import path from 'path';

const router = new express.Router();

router.use('/', defaultRoute);

function defaultRoute(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
}

export default router;
