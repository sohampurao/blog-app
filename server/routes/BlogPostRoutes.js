import express from 'express';
import BlogPost from '../models/BlogPostModel.js';
import expressAsyncHandler from 'express-async-handler';

const BlogPostRouter = express.Router();

BlogPostRouter.get('/', async (req, res) => {
  const BlogPosts = await BlogPost.find();
  res.send(BlogPosts);
});

BlogPostRouter.get(
  '/virtualtours',
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const category = query.category || '';
    const categoryFilter = category && category !== 'all' ? { category } : {};
    const blogPosts = await BlogPost.find({
      ...categoryFilter,
    });
    res.send(blogPosts);
  })
);

BlogPostRouter.get(
  '/categories',
  expressAsyncHandler(async (req, res) => {
    const categories = await BlogPost.find().distinct('category');
    res.send(categories);
  })
);

BlogPostRouter.get('/slug/:slug', async (req, res) => {
  const blogpost = await BlogPost.findOne({ slug: req.params.slug });
  if (blogpost) {
    res.send(blogpost);
  } else {
    res.status(404).send({ message: 'Post not Found' });
  }
});

export default BlogPostRouter;