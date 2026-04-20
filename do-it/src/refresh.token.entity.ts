import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('refresh_token')
export class RefreshToken {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Index()
    @Column({unique: true})
    token: string;

    @Column()
    isRevoked: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @Column()
    expiresAt: Date;

    @ManyToOne( () => User, (user) => user.refreshTokens, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'user_id'})
    user: User;
}