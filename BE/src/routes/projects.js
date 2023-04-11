import express from 'express';
import { create, forceDelete, get, getAll, getSlug, getTrash, remove, restore, update } from '../controller/projects'
import { checkPermission } from '../middlewares/checkPermission';
import uploadCloud from '../middlewares/cloudinary';

const router = express.Router();
router.get("/projects",getAll)
router.get("/projects/:id", get)
router.get("/admin/projects/trash", getTrash)
router.get("/project/:slug", getSlug)
router.post("/projects", uploadCloud.single('thumbnail') ,checkPermission,create)
router.delete("/project/:id",checkPermission, remove)
router.patch("/projects/:id",checkPermission, update)
router.delete("/project/:id/force",checkPermission, forceDelete)
router.patch("/project/restore/:id", restore)


export default router;