import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/admin/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './modules/admin/roles/roles.module';
import { PermissionsModule } from './modules/admin/permissions/permissions.module';
import { InventarioModule } from './modules/admin/inventario/inventario.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.development.env','.production.env']
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: + '${process.env.DATABASE_PORT}' ||5434,
    username: process.env.DATABASE_USER ||'postgres',
    password: process.env.DATABASE_PASSWORD||'postgresql',
    database: process.env.DATABASE_NAME ||'bd_inventario',
    entities:[
      __dirname + '/**/*entity{.ts,.js}'
    ],
    synchronize: false

  }), 
    
    UsersModule, RolesModule, PermissionsModule, InventarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
