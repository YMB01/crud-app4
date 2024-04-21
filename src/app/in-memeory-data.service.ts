import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserData implements InMemoryDbService {
  createDb(){
    const users: User[]=[
      { id: 1, name: 'Joe', email: 'joe@gmail.com', contact: '0000000000'  },
      { id: 2, name: 'James', email: 'james@gmail.com', contact: '1111111111'  },
      { id: 3, name: 'Harry', email: 'harry@live.in', contact: '2222222222'  },
      { id: 4, name: 'Jack', email: 'jack@gmail.com', contact: '6666666666' },
      { id: 5, name: 'Lara', email: 'lara@live.in', contact: '9909999999'  }

    ];
    return {users};
  }
}