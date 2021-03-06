import HttpByIDRequest from './HttpByIDRequest';
import HttpDatabaseRequest from './HttpDatabaseRequest';

export interface HttpAssetRequest extends HttpByIDRequest {
  WithSiteArea?: boolean;
}

export interface HttpAssetsRequest extends HttpDatabaseRequest {
  Search?: string;
  SiteAreaID?: string;
  SiteID?: string;
  WithSiteArea?: boolean;
  WithNoSiteArea?: boolean;
  DynamicOnly?: boolean;
  ErrorType?: string;
}

export interface HttpAssetConsumptionRequest {
  AssetID: string;
  StartDate: Date;
  EndDate: Date;
}

export interface HttpAssetImageRequest extends HttpByIDRequest {
  TenantID: string;
}
