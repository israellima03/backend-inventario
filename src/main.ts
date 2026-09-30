import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //configuracion de swagger para ver la peticiones en back
  const config = new DocumentBuilder()
    .setTitle('backend_inventario')
    .setDescription('es una pagina de taller')
    .setVersion('1.0.0')
    .addTag('node nest')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
