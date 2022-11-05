import { UserMap } from './../../app/mappers/User.map';
import { IUserPersistenceDTO } from './../../domain/User/User.repository.interface';
import { User, IUserRepository } from '../../domain/User';

export class UserTestRepository implements IUserRepository {
  constructor(private readonly userMap: UserMap) {}
  private dummyUsers: Array<IUserPersistenceDTO> = 
  [
    {
      id: '1',
      name: 'ion',
      surname: 'popescu',
      role: 'LSE',
      email: 'ion@fundatiax.ro',
      password: 'hashedpassowrd'
    },
    {
      id: '1',
      name: 'gheorghe',
      surname: 'ionescu',
      role: 'LSS',
      email: 'gheorghe@fundatiax.ro',
      password: 'hashedpassowrd'
    }
  ]

  async getAll() {
    return this.dummyUsers.map(user => this.userMap.toDomain(user))
  }
  async save(user: IUserPersistenceDTO): Promise<boolean|Error> {
    return Promise.resolve(true)
  }

  async getById(id: string): Promise<User|null> {
    const user =  this.dummyUsers.find(u => u.id === id)
    if (!user) return null
    return this.userMap.toDomain(user)
  }

  async getByEmail(email: string): Promise<IUserPersistenceDTO | null> {
    const user =  this.dummyUsers.find(u => u.email === email)
    if (!user) return null
    return this.userMap.toDomain(user)
  }
  
}