import { Router } from "express";
const router = Router();
router.get('/', (req, res) => {
    // Get all skills
});
router.get('/frontend', (req, res) => {
    // Get frontend skills
});
router.get('/backend', (req, res) => {
    // Get backend skills
});
router.get('/ui-ux', (req, res) => {
    // Get uiux skills
});
// Admin
router.post('/', (req, res) => {
    // Add a new skill
});
router.put('/:id', (req, res) => {
    // Update skill by id
});
router.delete('/:id', (req, res) => {
    // Delete skill by id
});
export default router;
//# sourceMappingURL=skills.js.map