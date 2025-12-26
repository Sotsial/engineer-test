export interface IEmployeeDbModel {
  uuid: string;
  firstName: string;
  lastName: string;
  cityName: string;
  divisionName: string;
  positionName: string;
  cityUuid: string;
  divisionUuid: string;
  positionUuid: string;
}

export interface ICityDbModel {
  uuid: string;
  name: string;
}

export interface IDivisionDbModel {
  uuid: string;
  name: string;
  cityUuid: string;
  cityName: string;
}

export interface IPositionDbModel {
  uuid: string;
  name: string;
}
