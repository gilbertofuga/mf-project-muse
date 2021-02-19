import React, { useState, StrictMode } from "react";
import Button from "@material-ui/core/Button";

function Fragment1() {

  return (
   <Button onClick={()=>{console.warn('WorkFragment')}}> FRAGMENT </Button>
  );
}

export default Fragment1;
