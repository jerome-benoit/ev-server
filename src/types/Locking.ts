
export default interface Lock {
  id?: string;
  tenantID: string;
  entity: LockEntity;
  key: string;
  type: LockType;
  timestamp: Date;
  hostname: string;
}

export enum LockType {
  EXCLUSIVE = 'E'
}

export enum LockEntity {
  DATABASE = 'database',
  DATABASE_INDEX = 'database-index',
  CHARGING_STATION = 'charging-station',
  SITE_AREA = 'site-area',
  USER = 'user',
  LOGGING = 'logging',
  PERFORMANCE = 'performance',
  TRANSACTION = 'transaction',
  CAR = 'car',
  INVOICE = 'invoice',
  ASSET = 'asset',
  OCPI_ENDPOINT = 'ocpi-endpoint',
  OICP_ENDPOINT = 'oicp-endpoint',
}
