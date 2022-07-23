import { UserCreatedEvent } from "./user.created.event";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";

@EventsHandler(UserCreatedEvent)
export class UserCreatedEventEventHandler implements IEventHandler<UserCreatedEvent> {

  handle(event: UserCreatedEvent) {
    console.log(event.data);
  }
}