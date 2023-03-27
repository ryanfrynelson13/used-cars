import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name: 'users'
})
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        unique: true
    })
    email: string

    @Column({
        type: 'varchar'
    })
    password: string
}