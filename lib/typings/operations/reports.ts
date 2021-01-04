import { BaseResponse } from "../base-types";

export interface CreateReportBody {
  body: CreateReportSpecification;
}

export interface CreateReportResponse extends BaseResponse {
  payload?: {
    reportId: string;
  };
}

export interface GetReportPath {
  reportId: string;
}

export interface GetReportResponse extends BaseResponse {
  payload?: Report;
}

export interface GetReportDocumentPath {
  reportDocumentId: string;
}

export interface GetReportDocumentResponse extends BaseResponse {
  payload?: ReportDocument;
}

interface CreateReportSpecification {
  reportOptions?: ReportOptions;
  reportType: string;
  dataStartTime?: string;
  dataEndTime?: string;
  marketplaceIds: string[];
}

interface ReportOptions {
  [key: string]: string;
}

interface Report {
  marketplaceIds?: string[];
  reportId: string;
  reportType: string;
  dataStartTime?: string;
  dataEndTime?: string;
  reportScheduleId?: string;
  createdTime: string;
  processingStatus: ProcessingStatus;
  processingStartTime?: string;
  processingEndTime?: string;
  reportDocumentId?: string;
}

type ProcessingStatus =
  | "CANCELLED"
  | "DONE"
  | "FATAL"
  | "IN_PROGRESS"
  | "IN_QUEUE";

export interface ReportDocument {
  reportDocumentId: string;
  url: string;
  encryptionDetails: ReportDocumentEncryptionDetails;
  compressionAlgorithm: "GZIP";
}

interface ReportDocumentEncryptionDetails {
  standard: "AES";
  initializationVector: string;
  key: string;
}
