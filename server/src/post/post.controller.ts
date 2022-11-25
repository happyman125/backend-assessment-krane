import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  findAll() {
    return this.postService.findAll({});
  }

  @Post()
  create(@Body() dto: PostDto) {
    return this.postService.create({
      title: dto.title,
      textBody: dto.text_body,
    });
  }
}
