import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../../roles/entities/role.entity";

@Entity('permissions')
export class Permission {
    
    @PrimaryGeneratedColumn()
    id: number;

   @Column({nullable: true})
    action: string;
    @Column({nullable: true})
    subjet: string;
    @Column({nullable: true})
    detalle: string;
    //estamos conectando con la otra tabla
    @ManyToMany(()=> Role, (rol)=> rol.permissions)
    roles: Role[]


   

}
