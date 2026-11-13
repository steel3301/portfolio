export type BlogPost = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
};

export const blogs: BlogPost[] = [
  {
    id: '1',
    title: 'Blog Post 1',
    description: 'Description for blog post 1',
    imageUrl: '/images/blog1.jpg',
    category: 'technology',
  },
  {
    id: '2',
    title: 'Blog Post 2',
    description: 'Description for blog post 2',
    imageUrl: '/images/blog2.jpg',
    category: 'lifestyle',
  },
  {
    id: '3',
    title: 'Blog Post 3',
    description: 'Description for blog post 3',
    imageUrl: '/images/blog3.jpg',
    category: 'travel',
  },
];