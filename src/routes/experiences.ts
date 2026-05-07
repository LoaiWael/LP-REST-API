import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  // Get all experience
})

// Admin

router.post('/', (req, res) => {
  // Add experience
})

router.put('/:id', (req, res) => {
  // update experience
})

router.delete('/:id', (req, res) => {
  // Delete work by id
})

export default router;