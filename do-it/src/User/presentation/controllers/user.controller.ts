import { Controller, Delete, Get, Param, ParseIntPipe } from "@nestjs/common";


@Controller('api/user')
export class UserController {
    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: string) {
        return {
            name: 'Username',
            task: [
                "task 1", "task 2", "task 3"
            ]
        };
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: string) {
        return 'user account was deleted successfully';
    }
}