import { Module } from "@nestjs/common";
import { UserController } from "./presentation/controllers/user.controller";


@Module({
    imports: [],
    controllers: [UserController],
    providers: [/* USER SERVICE TO BE IMPLEMENTED */]
})
export class UserModule {}