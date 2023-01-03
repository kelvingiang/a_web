export class Course{
    'id' :string;
    'name' :string;
    'price' :number;
    'picture':string;
     'summary' :string;
     'cat' : string[]; 

      constructor(id :string, name :string, price :number, picture :string, summary :string,  cat :string[]){
        this.id          = id;
        this.name        = name;
        this.price       = price;
        this.picture     = picture;
        this.summary     = summary;
        this.cat         = cat;

      }

}
