import { IsNotEmpty, IsString, IsBoolean, IsOptional } from "class-validator";

export class UpdateTaskDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsBoolean()
    taskCompleted?: boolean;
}