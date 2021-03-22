export enum Music {
    JAZZ,
    ROCK,
}

export interface IMusician {
    addAlbum(album: Album): void;
}

export const display = <T>(elements: T[]) => {
    elements.forEach((element) => {
        console.log(element.toString());
    });
};

export class Musician implements IMusician {
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    firstName: string;
    lastName: string;
    age: number;
    albums: Album[] = [];
    private style: Music;

    addAlbum = (album: Album) => {
        this.albums.push(album);
    };
    getStyle = (): Music => this.style;
    setStyle = (style: Music): void => {
        this.style = style;
    };
    toString = () => `${this.firstName} ${this.lastName}`;
}

export class JazzMusician extends Musician {
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age);
        this.setStyle(Music.JAZZ);
    }

    toString = () =>
        `${this.firstName} ${this.lastName} plays ${Music[this.getStyle()]}`;
}

export class RockStar extends Musician {
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age);
        this.setStyle(Music.ROCK);
    }

    toString = () =>
        `${this.firstName} ${this.lastName} plays ${Music[this.getStyle()]}`;
}

export class Album {
    constructor(title: string) {
        this.title = title;
    }

    title: string;
    toString = () => this.title;
}
