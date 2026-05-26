import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from "@nestjs/common";
import { CreateTaskDto } from "src/Tasks/dto/create.task.dto";
import { UpdateTaskDto } from "src/Tasks/dto/update.task.dto";


@Controller('api/task')
export class TaskController {
    // User id will be obtained from the request object on validating the access token
    @Get(':id')
    getTask(@Param('id', ParseUUIDPipe) id: string) {
        return {
            title: 'Task title',
            description: 'Task description',
            taskStatus: false,
        }
    }

    @Post()
    createTask(@Body() body: CreateTaskDto) {
        return `Task Created Successfully`;
    }

    @Patch(':id')
    updateTask(@Param('id', ParseUUIDPipe) taskId: string, @Body() body: UpdateTaskDto) {
        return `Task ${taskId} successfully updated`;
    }

    @Delete(':id')
    deleteTask(@Param('id', ParseUUIDPipe) taskId: string) {
        return `Task ${taskId} successfully deleted`;
    }
}