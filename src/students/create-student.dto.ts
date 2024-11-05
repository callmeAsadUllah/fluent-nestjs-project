import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({
    description: 'Unique username for the student',
    example: 'asadullah',
    required: true,
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

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

  @ApiProperty({
    description: 'Email address of the student',
    example: 'asadullah@asadullah.io',
    required: true,
    type: 'string',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
