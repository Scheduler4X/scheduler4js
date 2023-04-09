import { JobModel } from "../models/model.job";
import { IJobOption } from "./job.definition";

export interface ITaskRunner {
  enqueueJob(config: IJobOption): Promise<ITaskRunner>;
  dequeueJob(name: string): ITaskRunner;
  kickOffJobs(): Promise<void>;
  disableJob(job: JobModel): Promise<boolean>;
  tick(): void;
}
