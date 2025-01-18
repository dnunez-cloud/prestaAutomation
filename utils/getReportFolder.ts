import * as path from 'path';

export function getReportFolder(testFilePath: string): string {
  const testFileName = path.basename(testFilePath, path.extname(testFilePath));
  return `html-report/${testFileName}`;
}