import { Module } from '@nestjs/common';
import { ProductoModule } from './producto/producto.module';
import { AlmacenModule } from './almacen/almacen.module';

@Module({
  imports: [ProductoModule, AlmacenModule]
})
export class InventarioModule {}
