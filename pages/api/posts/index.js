import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'POST') {
    const { title, content } = req.body;
    const post = await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    res.json(post);
  } else {
    // その他のHTTPメソッドのハンドリング
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
