// utils/GlobalVariables.ts

export class GlobalVariables {
  static localRun: boolean = true;

  static mailCatcherURL = "https://mailcatcher.peoplehum.org/messages";
  static mailHogURL = "https://mailcatcher.peoplehum.org";
  static environment = "awsqa";

  static url = "https://qaportal.peoplehum.org";
  static hrisurl = "https://qahris.peoplehum.org";
  static customDomainurl = "https://customdomain.qa.peoplehum.org";

  static baseDir: string;
  static filesPath: string;
  static resultsDir: string;
  static downloadPath: string;
  static baseDownloadPath: string;
  static testoutputPath: string;
  static manageUrlsFile: string;
  static defaultLoginBaseUrl = "https://qaportal.peoplehum.org/api/web";

}