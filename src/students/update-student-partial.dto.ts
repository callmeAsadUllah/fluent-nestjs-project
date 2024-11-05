import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional } from 'class-validator';

export class UpdateStudentPartialDto {
  @ApiPropertyOptional({
    description: 'Unique username for the student',
    example: 'asadullah',
    type: 'string',
    required: false,
  })
  @IsString()
  @IsOptional()
  username?: string;

  @ApiPropertyOptional({
    description: 'First name of the student',
    example: 'Asad',
    type: 'string',
    required: false,
  })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiPropertyOptional({
    description: 'Last name of the student',
    example: 'Ullah',
    type: 'string',
    required: false,
  })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiPropertyOptional({
    description: 'Email of the student',
    example: 'asadullah@asadullah.io',
    type: 'string',
    required: false,
  })
  @IsEmail()
  @IsOptional()
  email?: string;
}
