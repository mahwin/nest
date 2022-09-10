import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return searchingYear;
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will returon one movie ${id}`;
  }
  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string, @Body() updateData) {
    return {
      updateDataMovie: movieId,
      ...updateData,
    };
  }
  @Patch('/:id')
  path(@Param('id') movieId: string) {
    return `${movieId}`;
  }
}
