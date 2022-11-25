import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async find(where: Prisma.PostWhereUniqueInput) {
    const post = await this.prisma.post.findUnique({
      where,
    });
    if (!post) throw new BadRequestException('post not found');
    return post;
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PostWhereUniqueInput;
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    const posts = await this.prisma.post.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
    return posts;
  }

  async create(data: Prisma.PostCreateInput) {
    return this.prisma.post.create({ data });
  }
}
