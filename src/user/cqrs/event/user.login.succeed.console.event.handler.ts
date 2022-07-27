import { UserLoginSucceedEvent } from "./user.login.succeed.event";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";

@EventsHandler(UserLoginSucceedEvent)
export class UserLoginFailedConsoleEventHandler implements IEventHandler<UserLoginSucceedEvent> {

  handle(event: UserLoginSucceedEvent) {
    console.log(event);
  }
  
}