import { NFeStatus } from "../enums/NFeStatus";

export type NFeListItem = {
  id: string;
  numNfe: number;
  status: NFeStatus;
  dtEmission: Date;
  destination: string | null;
  volumesCount: number;
}