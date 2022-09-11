import { IsString, isNumber } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @isNumber()
  readonly year: number;
  @IsString()
  readonly genres: string[];
}
