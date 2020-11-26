
import { Observable } from 'rxjs';
import { UserProfileViewModel } from '../../src/viewModels/userProfileViewModel';
export class UserControllerMock {
    public create(
        userProfileParam: UserProfileViewModel
    ): Observable<UserProfileViewModel> {
      return Observable.of();
    }

    public get(
        userIdParam: number
    ): Observable<UserProfileViewModel> {
      return Observable.of();
    }

    public signIn(
        emailParam: string,
        passwordParam: string
    ): Observable<UserProfileViewModel> {
      return Observable.of();
    }

}
