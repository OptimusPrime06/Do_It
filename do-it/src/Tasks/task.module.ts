import { Module } from "@nestjs/common";
import { TaskController } from "./presentation/controllers/task.controller";

@Module({
    imports: [],
    controllers: [TaskController],
    providers: [/*TASK SERVICE WILL BE IMPLEMENTED */]
})
export class TaskModule {}