export class QuestionModel {
  constructor(
    public toggle: boolean,
    public collapseId: string,
    public headingId: string,
    public question: string,
    public answer: string
  ) {}
}
