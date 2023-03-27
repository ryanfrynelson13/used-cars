import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name: 'reports'
})
export class Report {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'float'
    })
    price: number
}