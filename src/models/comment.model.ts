import { IComment } from "interfaces/comment.interface";
import { ITag } from "interfaces/tag.interface";

export default class Comment implements IComment {
    constructor(public text: string, public tags: ITag[]) {}
}
