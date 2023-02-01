import { Entity, Column,  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Exclude } from "class-transformer"
import { v4 as uuid} from "uuid";
import { User } from "./user.entity";

@Entity("contacts")
export class Contacts{
@PrimaryGeneratedColumn("uuid")
readonly id: string

@Column({length: 69})
name: string

@Column({length: 69, unique: true})
email: string

@Column({length: 69})
telephone: string

@Column({default: true})
isActive: boolean

@CreateDateColumn()
createdAt: Date

@UpdateDateColumn()
updatedAt: Date

@ManyToOne(()=> User)
user: User



}