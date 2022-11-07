import { TYPES } from './../../server/types/index';
import { inject, injectable } from 'inversify';
import { ResetPasswordTokenMap } from './../../app/mappers/ResetPasswordToken.map';
import {
  IResetPasswordTokenPersistenceDTO,
  IResetPasswordTokenRepository,
  ResetPasswordToken,
} from './../../domain/ResetPasswordToken';

@injectable()
export class ResetPasswordTokenTestRepository implements IResetPasswordTokenRepository {
  constructor(
    @inject(TYPES.RESET_PASSWORD_TOKEN_MAP)
    private readonly resetPasswordTokenMap: ResetPasswordTokenMap,
  ) {}

  private dummmytokens: Array<IResetPasswordTokenPersistenceDTO> = [
    {
      id: '1',
      userId: '1',
      token: 'giberishtoken',
      expirationDate: new Date(),
    },
  ];

  async save(resestPasswordToken: IResetPasswordTokenPersistenceDTO): Promise<boolean | Error> {
    return Promise.resolve(true);
  }

  async getAllByUserId(userId: string): Promise<ResetPasswordToken[] | null> {
    return this.dummmytokens.map((rpt) => this.resetPasswordTokenMap.persistenceToDomain(rpt));
  }
  async getByToken(token: string): Promise<ResetPasswordToken | null> {
    const rptDTO = this.dummmytokens.find((rpt) => rpt.token === token ?? null);
    if (!rptDTO) return null;
    const rpt = this.resetPasswordTokenMap.persistenceToDomain(rptDTO);

    return Promise.resolve(rpt);
  }
}
