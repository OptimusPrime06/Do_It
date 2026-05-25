import { Body, Controller, Post } from "@nestjs/common";
import { RegisterDto } from "../../dtos/register.dto";
import { LoginDto } from "src/Auth/dtos/login.dto";
import { RefreshDto } from "src/Auth/dtos/refresh.dto";
import { LogoutDto } from "src/Auth/dtos/logout.dto";

@Controller('api/auth/')
export class AuthController {
    // register
    @Post('register')
    register(@Body() body: RegisterDto) {
        return 'User registered successfully';
    }

    //Login
    @Post('login')
    login(@Body() body: LoginDto) {
        return 'User is logged in';
    }

    // refresh
    @Post('refresh')
    refresh(@Body() body: RefreshDto){
        return 'User Token refreshed';
    }

    // Logout
    @Post('logout')
    logout(@Body() body: LogoutDto) {
        return 'User is logged out'
    }
    
}