import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AppGateway } from './app.gateway';
import {TypeOrmModule} from "@nestjs/typeorm";
import { Chat } from "./chat.entify"

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    username: "chat-root",
    password: "supersecret",
    database: "chat",
    entities: [Chat],
    synchronize: true
  }),
  TypeOrmModule.forFeature({Chat})
],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
