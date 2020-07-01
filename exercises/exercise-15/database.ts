type Query<T> = {
  [k in keyof T]?:
    | { $eq: T[k] }
    | { $lt: T[k] }
    | { $gt: T[k] }
    | { $in: Array<T[k]> };
} & {
  $text?: string;
  $and?: Array<{ [k in keyof T]?: { [k in '$gt' | '$lt']?: number } }>;
  $or?: Array<{ [k in keyof T]?: { [k in '$gt' | '$lt']?: number } }>;
};

type Options<T> = {
  sort?: { [k in keyof T]?: T[k] };
  projection?: { [k in keyof T]?: number };
};

type Item = {
  _id: number;
  name: string;
  occupation: string;
  age: number;
};

export class Database<T> {
  protected filename: string;
  protected fullTextSearchFieldNames: string[];

  constructor(filename: string, fullTextSearchFieldNames: string[]) {
    this.filename = filename;
    this.fullTextSearchFieldNames = fullTextSearchFieldNames;
  }

  async find(query: Query<T>, options?: Options<T>): Promise<T[]> {
    return [];
  }
  async delete(query: Query<T>): Promise<T[]> {
    return [];
  }
  async insert(item: Item): Promise<T[]> {
    return [];
  }
}
