import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseService } from 'src/services/database/database.service';

@Module({
  controllers: [UserController],
  providers: [UserService, DatabaseService],
})
export class UserModule {}
