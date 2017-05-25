import express from 'express';

const router = new express.Router();

router.get('/', getHealth);

function getHealth(req, res) {
  res.status(200).json({
    message: 'okay'
  });
}

export default router;
