export class Hero{
    private _id:number;
    private _name:string;
    private _score:number;

    public constructor(){}

    public get id()
    :number{
        return this._id;
    }

    public set id(new_id:number)
    {
        this._id=new_id
    }

    public get name()
    :string{
        return this._name;
    }

    public set name(new_name:string)
    {
        this._name=new_name
    }


    public get score()
    :number{
        return this._score;
    }

    public set score(new_score:number)
    {
        this._id=new_score
    }
}