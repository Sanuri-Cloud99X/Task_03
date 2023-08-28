import { Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm"
import { User } from './user/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User], 
      synchronize: true,
    }),
    JwtModule.register({
      secret:'trp001',
    }),
    UserModule,
  ],
})
export class AppModule {}
