export interface publish{
  author: string;
  story_title: string;
  story_url: string;
  created_ad: Date;
  like: boolean;
}

export interface storage{
  framework: string;
  publish: Array<publish>;
}
