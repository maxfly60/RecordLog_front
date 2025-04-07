export class Artist {
    id: number;
    name: string;
    realNames: string;
    pictureLink: string;
  
    constructor(id: number, name: string, realNames: string, pictureLink: string) {
      this.id = id;
      this.name = name;
      this.realNames = realNames;
      this.pictureLink = pictureLink;
    }
  }
  