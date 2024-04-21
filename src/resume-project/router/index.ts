import express from "express";
import eduction from "./eduction";
import resume from "./resume";
import work from "./work";

const router = express.Router();

export default (): express.Router => {
  eduction(router);
  resume(router);
  work(router);
  return router;
};
