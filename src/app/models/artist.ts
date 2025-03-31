export class Artist {
    id?: number;
    name: string;
    realNames: number;
    pictureLink: string;
  
    constructor(id: number, name: string, realNames: number, pictureLink: string) {
      this.id = id;
      this.name = name;
      this.realNames = realNames;
      this.pictureLink = pictureLink;
    }
  }
  