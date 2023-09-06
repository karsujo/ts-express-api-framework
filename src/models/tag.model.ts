import { ITag } from "interfaces/tag.interface";

export default class Tag implements ITag {
    constructor(public type: string, public value: string) {}
  }