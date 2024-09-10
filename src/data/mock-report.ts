export type MockReport = {
  reportName: string;
  reportDate: string;
  reportNumber?: string;
};

export const mockReportData: MockReport[] = [
  {
    reportName: "Report A (Prod)",
    reportDate: "2024-01-01",
    reportNumber: "1",
  },
  {
    reportName: "Report B (Prod)",
    reportDate: "2024-02-01",
    reportNumber: "2",
  },
];
