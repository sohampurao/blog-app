import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema(
  {
    path: { type: String, required: true },
    mediaType: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    admin: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      profileImage: { type: String, required: true },
      isAdmin: { type: Boolean, required: true },
    },
  },
  {
    timestamps: true,
  }
);

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
export default BlogPost;
