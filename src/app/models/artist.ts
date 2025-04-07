export class Artist {
    id: number;
    name: string;
    real_names: string;
    picture_link: string;
  
    constructor(id: number, name: string, real_names: string, picture_link: string) {
      this.id = id;
      this.name = name;
      this.real_names = real_names;
      this.picture_link = picture_link;
    }
  }
  