import MessageData from "./MessageData";
import fs from "fs/promises";

export default class MessageDataFile implements MessageData {

  read(language: string): Promise<string> {
    return fs.readFile(`./message/${language}.txt`, "utf-8");
  }


}