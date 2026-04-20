import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RefreshToken } from "./refresh.token.entity";
import { Task } from "./task.entity";

@Entity('User')
export class User {
    @PrimaryGeneratedColumn('uuid')
    userId: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date

    @OneToMany( () => RefreshToken, (refreshToken) => refreshToken.user)
    refreshTokens: RefreshToken[]

    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[];
}