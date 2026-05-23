import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  // Get all contributors
})

// Admin
router.post('/', (req, res) => {
  // Add new contributor
})

router.put('/:id', (req, res) => {
  // Update contributor by id
})

router.delete('/:id', (req, res) => {
  // Delete contributor by id
})

export default router