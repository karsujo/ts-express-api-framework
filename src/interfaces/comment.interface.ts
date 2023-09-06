import { ITag } from "./tag.interface";

export interface IComment{
    text : string;
    tags : Array<ITag>;
}