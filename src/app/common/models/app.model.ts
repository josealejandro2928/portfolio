import { IFile } from './file.model';

export interface IApp {
  name: string;
  description: string;
  useStacks: string[];
  url?: string;
  Files?: IFile[];
  category?: string;
}
