const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');

router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const resource = new Resource(req.body);
  try {
    const savedResource = await resource.save();
    res.json(savedResource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
