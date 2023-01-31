import { Entity, Column,  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer"
import { v4 as uuid} from "uuid";
import { Contacts } from "./contacts.enttty";

@Entity("user")
export class User{
@PrimaryGeneratedColumn("uuid")
readonly id: string

@Column({length: 69})
name: string

@Column({length: 69, unique: true})
email: string

@Column({length: 69})
telephone: string

@Column({length: 120})
@Exclude()
password: string

@Column()
isAdm: boolean

@Column({default: true})
isActive: boolean

@CreateDateColumn()
createdAt: Date

@UpdateDateColumn()
updatedAt: Date

@OneToMany(()=>Contacts, contacts=> contacts.user)
contacts: Contacts[]


}