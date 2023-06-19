/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerCreateNestedManyWithoutTasksInput } from "./CustomerCreateNestedManyWithoutTasksInput";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TaskCreateInput {
  @ApiProperty({
    required: false,
    type: () => CustomerCreateNestedManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => CustomerCreateNestedManyWithoutTasksInput)
  @IsOptional()
  @Field(() => CustomerCreateNestedManyWithoutTasksInput, {
    nullable: true,
  })
  customers?: CustomerCreateNestedManyWithoutTasksInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dueTo?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  lastViewed?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  stateNote?: string | null;
}

export { TaskCreateInput as TaskCreateInput };
