/* eslint-env node */

import { test as base } from '@playwright/test';
import { GlobalVariables } from './GlobalVariables';

export function loadProperties() {

  console.log('[BaseTest] Properties loaded started');
  GlobalVariables.baseDir = process.cwd();
  GlobalVariables.filesPath = GlobalVariables.baseDir+"/src/Files/awsqa";
  GlobalVariables.downloadPath = GlobalVariables.filesPath+"/src/Files/downloads";
  GlobalVariables.baseDownloadPath = GlobalVariables.downloadPath;
  GlobalVariables.manageUrlsFile = GlobalVariables.filesPath+"/src/Files/awsqa/manageurls.txt";

  console.log('[BaseTest] Properties loaded successfully');
}

// Load properties when imported
loadProperties();

export const test = base;
export const expect = base.expect;
