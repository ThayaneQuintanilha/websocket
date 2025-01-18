import { Router } from "express";
import { Message } from "./controllers/message.controller";

const PATH = '/api';

export const routes = (router: Router) => {
    router.post(`${PATH}/message`, Message)
}