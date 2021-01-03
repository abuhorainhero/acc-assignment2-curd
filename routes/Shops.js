const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller')

// GET users Listing
router.post("/", shopController.create);

router.get('/', shopController.getAll);

router.get('/:id', shopController.getById);

router.patch('/:id', shopController.updateById);

router.delete('/:id', shopController.deleteById);


module.exports = router;