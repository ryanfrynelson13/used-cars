import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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

    @AfterInsert()
    logInsert() {
        console.log('Inserted User with id ', this.id)
    }

    @AfterRemove()
    logRemovee() {
        console.log('Removed User with id ', this.id)
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Updated User with id ', this.id)
    }
}