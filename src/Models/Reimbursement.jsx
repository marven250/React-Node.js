export class Reimbursement {
  id; // primary key
  author; // foreign key -> User, not null
  amount; // not null
  dateSubmitted; // not null
  dateResolved; // not null
  description; // not null
  resolver; // foreign key -> User
  status; // foreign ey -> ReimbursementStatus, not null
  type; // foreign key -> ReimbursementType

  constructor(
    id,
    author,
    amount,
    dateSubmitted,
    dateResolved,
    description,
    resolver,
    status,
    type
  ) {
    this.id = id;
    this.author = author;
    this.amount = amount;
    this.dateSubmitted = dateSubmitted;
    this.dateResolved = dateResolved;
    this.description = description;
    this.resolver = resolver;
    this.status = status;
    this.type = type;
  }
}
