export class Articles {
     title: String;
     text: String;
     banner: Blob;
     author: String;
}

export default interface ArticlesModel extends Articles {
    title: String;
    text: String;
    banner: Blob;
    author: String;
}