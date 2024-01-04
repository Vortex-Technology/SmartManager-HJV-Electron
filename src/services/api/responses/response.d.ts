type Errors = {
  details: Array<{
    code: string;
    expected: string;
    received: string;
    path: string[];
    message: string;
  }>;
  name: string;
};

export interface Response<T = unknown> {
  message?: string;
  error?: string;
  status: number;
  data?: T;
  errors?: Errors;
}
