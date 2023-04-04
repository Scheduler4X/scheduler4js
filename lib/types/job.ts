import { JobStatus } from "../enums/job.status";
import { IJobDefinition } from "./job.definition";

export interface IJob {
  calculateNextTick(): void;
  addToRunningJobs(): Promise<void>;
  finalize(): void;
  addToFailedJobs(): Promise<void>;
  changeJobStatus(status: JobStatus): Promise<void>;
  run(): Promise<void>;
  isExpired(): boolean;
  definition: IJobDefinition;
}
