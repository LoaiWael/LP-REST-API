import { Router } from "express";
const router = Router();
router.get('/', (req, res) => {
    // Get all my work
});
router.get('/websites', (req, res) => {
    // Get all my websites work
});
router.get('/open-source', (req, res) => {
    // Get all my open-source contributions
});
router.get('/ui-ux', (req, res) => {
    // get all my ui ux designs
});
router.get('/3d', (req, res) => {
    // Get all my 3d designs
});
router.get('/:id', (req, res) => {
    // Get work details by id
});
// Admin
router.post('/', (req, res) => {
    // create a new work
});
router.put('/:id', (req, res) => {
    // Update work details
});
router.delete('/:id', (req, res) => {
    // delete work by id
});
export default router;
//# sourceMappingURL=myWork.js.map