
import { Observable } from 'rxjs';
import { RentalCardViewModel } from '../../src/viewModels/rentalCardViewModel';
import { VehicleInformationViewModel } from '../../src/viewModels/vehicleInformationViewModel';
export class RentalControllerMock {
    public list(
        userIdParam: number
    ): Observable<RentalCardViewModel> {
      return Observable.of();
    }

    public get(
        rentalIdParam: number
    ): Observable<VehicleInformationViewModel> {
      return Observable.of();
    }

}
