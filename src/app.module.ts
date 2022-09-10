import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  //url을 가져오고 함수를 실행하는 역할. express 의 라우터.
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
