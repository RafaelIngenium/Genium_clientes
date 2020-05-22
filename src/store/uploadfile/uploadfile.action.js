import UploadFileActionTypes from "./uploadfile.types";
import { api } from "../../services/api";

export const statusFile                = (todos)  => { return { type: UploadFileActionTypes.UPLOADPROGRESS, todos: todos } }
