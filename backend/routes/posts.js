import express from 'express'
import { Post } from '../models/Post.js'
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json({ posts })
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const post = await Post.findById(id)
    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }

    res.status(200).json({ post })
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body
    if (!title || !content) {
      return res
        .status(400)
        .json({ error: 'Invalid data. Title and content are required.' })
    }

    const newPost = new Post({
      title,
      content,
    })

    await Post.create(newPost)
    res.status(201).json({ post: newPost })
  } catch (e) {
    const error = e._message || e.message || 'Internal server error'
    res.status(500).json({ error })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { title, content } = req.body
    if (!title || !content) {
      return res
        .status(400)
        .json({ error: 'Invalid data. Title and content are required.' })
    }

    const post = await Post.findByIdAndUpdate(
      id,
      {
        title,
        content,
        updatedAt: Date.now(),
      },
      { new: true }
    )

    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }

    res.status(200).json({ post })
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedPost = await Post.findByIdAndDelete(id)
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' })
    }
    res.status(200).json({ success: 'ok' })
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
