import { UserMap } from './../../app/mappers/User.map';
import { IUserDTO } from './../../domain/User/User.repository.interface';
import { User, IUserRepository } from '../../domain/User';

export class UserTestRepository implements IUserRepository {
  constructor(private readonly userMap: UserMap) {}
  private dummyUsers: Array<IUserDTO> = 
  [
    {
      id: '1',
      name: 'ion',
      surname: 'popescu',
      role: 'LSE'
    },
    {
      id: '1',
      name: 'gheorghe',
      surname: 'ionescu',
      role: 'LSS'
    }
  ]

  async getAll() {
    const users = this.dummyUsers
    return users.map(user => this.userMap.toDomain(user))
  }
  async save(user: IUserDTO): Promise<boolean|Error> {
    return Promise.resolve(true)
  }

  async getById(id: string): Promise<User|null> {
    const user =  this.dummyUsers.find(u => u.id === id)
    if (!user) return null
    return this.userMap.toDomain(user)
  }
  
}