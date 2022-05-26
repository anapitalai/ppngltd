import express from 'express'
const router = express.Router()
import {
  getEmails,
  getProductById,
  deleteProduct,
  createEmail,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/emailController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getEmails).post(protect, admin, createEmail)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

export default router
