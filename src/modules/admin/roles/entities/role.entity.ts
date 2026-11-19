import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { JoinTable } from "typeorm/browser";
import { Permission } from "../../permissions/entities/permission.entity";

@Entity('roles')
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @Column({nullable: true})
    description: string;

    //de esta forma se crean las tablas intermedias de muchos a muchos
    @ManyToMany(() => Permission, {eager:true})
    @JoinTable({
        name: 'role_permissions',
        joinColumn:{
            name: 'role_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'permission_id',
            referencedColumnName: 'id',
        }
    }) permissions: Permissions[];
}
