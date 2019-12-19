import { ApiResponse } from './apiResponse';

export interface Repository extends ApiResponse {
    html_url: string;
    name: string;
}
