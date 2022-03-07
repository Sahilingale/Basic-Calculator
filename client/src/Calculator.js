import React, { useState } from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  component: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#808080",
  },
  child: {
    width: "30%",
    textAlign: "center",
  },
  rows: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridAutoRows: "minmax(108px, auto)",
    "& > *": {
      width: "108px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "30px",
      border: "none",
      margin: "5px",
    },
  },
  inputField: {
    width: "100%",
    height: "15vh",
    textAlign: "right",
    fontSize: "40px",
    fontWeight: "bold",
  },
  clear: {
    background: "#fd5c63",
    color: "#FFFFFF",
  },
  special: {
    color: "#fd5c63",
    fontSize: "40px",
  },
});

const Calculator = () => {
  const classes = useStyles();
  const [result, setResult] = useState("");

  const calculate = (e) => {
    setResult(result + e.target.value);
  };

  const clear = () => {
    setResult("");
  };

  const evaluate = () => {
    try {
      setResult(eval(result.toString()));
    } catch (error) {
      setResult("error");
    }
  };

  return (
    <Box className={classes.component}>
      <Box className={classes.child}>
        <input type="text" value={result} className={classes.inputField} />
        <Box className={classes.rows}>
          <button value="7" onClick={calculate}>
            7
          </button>
          <button value="8" onClick={calculate}>
            8
          </button>
          <button value="9" onClick={calculate}>
            9
          </button>
          <button value="+" onClick={calculate} className={classes.special}>
            +
          </button>
          <button value="4" onClick={calculate}>
            4
          </button>
          <button value="5" onClick={calculate}>
            5
          </button>
          <button value="6" onClick={calculate}>
            6
          </button>
          <button value="-" onClick={calculate} className={classes.special}>
            -
          </button>
          <button value="1" onClick={calculate}>
            1
          </button>
          <button value="2" onClick={calculate}>
            2
          </button>
          <button value="3" onClick={calculate}>
            3
          </button>
          <button value="*" onClick={calculate} className={classes.special}>
            *
          </button>
          <button value="AC" onClick={clear} className={classes.clear}>
            AC
          </button>
          <button value="0" onClick={calculate}>
            0
          </button>
          <button value="=" onClick={evaluate} className={classes.special}>
            =
          </button>
          <button value="/" onClick={calculate} className={classes.special}>
            /
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default Calculator;
