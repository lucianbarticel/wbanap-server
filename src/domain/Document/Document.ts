export enum Status {
  NOU = 'nou',
  IN_ANALIZA = 'in analiza',
  REVIZUIT = 'revizuit',
}

export enum Source {
  CAMERA_DEPUTATILOR = 'camera_deputatilor',
  SENAT = 'senat',
  GUVERN = 'guvern',
}

export interface IDocumentProps {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  project: string;
  identifier: string;
  publicationDate: Date;
  source: Source;
  status: Status;
  isRulesBreaker?: boolean;
  assignedUser: string | null;
  deadline: Date | null;
  originalFormat: string | null;
  numberOfPages: number | null;
  textInterpretationPrecision: number | null;
  numberOfIdentifiedArticles: number | null;
  numberOfIdentifiedTerms: number | null;
  attachments: string[];
}

export class Document {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  project: string;
  identifier: string;
  publicationDate: Date;
  source: Source;
  status: Status;
  isRulesBreaker: boolean;
  assignedUser: string | undefined;
  deadline: Date | undefined;
  originalFormat: string | undefined;
  numberOfPages: number | undefined;
  textInterpretationPrecision: number | undefined;
  numberOfIdentifiedArticles: number | undefined;
  numberOfIdentifiedTerms: number | undefined;
  attachments: string[];

  private constructor(props: IDocumentProps) {
    this.id = props.id;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.title = props.title;
    this.project = props.project;
    this.identifier = props.identifier;
    this.publicationDate = props.publicationDate;
    this.source = props.source;
    this.status = props.status;
    this.isRulesBreaker = props.isRulesBreaker === true || false;
    if (props.assignedUser !== null) this.assignedUser = props.assignedUser;
    if (props.deadline !== null) this.deadline = props.deadline;
    if (props.originalFormat !== null) this.originalFormat = props.originalFormat;
    if (props.numberOfPages !== null) this.numberOfPages = props.numberOfPages;
    if (props.textInterpretationPrecision !== null)
      this.textInterpretationPrecision = props.textInterpretationPrecision;
    if (props.numberOfIdentifiedArticles !== null)
      this.numberOfIdentifiedArticles = props.numberOfIdentifiedArticles;
    if (props.numberOfIdentifiedTerms !== null)
      this.numberOfIdentifiedTerms = props.numberOfIdentifiedTerms;
    if (props.numberOfIdentifiedArticles !== null)
      this.numberOfIdentifiedArticles = props.numberOfIdentifiedArticles;
    this.attachments = props.attachments;
  }

  public static create(props: IDocumentProps) {
    return new Document(props);
  }
}
