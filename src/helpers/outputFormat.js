const fmtKeys = {
  default: "default",
  doubleslash: "doubleslash",
  slashstar: "slashstar",
  sql: "sql",
  javadoc: "javadoc",
  bash: "bash",
  bashmulti: "bashmulti",
  sgml: "sgml",
  echo: "echo",
  pythonmulti: "pythonmulti",
  batch: "batch",
}

export const fmtValues = {
  [fmtKeys.default]: { start: "", end: "", lineStart: "", lineEnd: "" },
  [fmtKeys.doubleslash]: { start: "", end: "", lineStart: "// ", lineEnd: "" },
  [fmtKeys.slashstar]: { start: "/*\n", end: "\n*/", lineStart: "", lineEnd: "" },
  [fmtKeys.sql]: { start: "", end: "", lineStart: "-- ", lineEnd: "" },
  [fmtKeys.javadoc]: { start: "/**\n", end: "\n */", lineStart: " * ", lineEnd: "" },
  [fmtKeys.bash]: { start: "", end: "", lineStart: "# ", lineEnd: "" },
  [fmtKeys.bashmulti]: { start: ": \"\n", end: "\n\"", lineStart: "", lineEnd: "" },
  [fmtKeys.sgml]: { start: "<!--\n", end: "\n-->", lineStart: "", lineEnd: "" },
  [fmtKeys.echo]: { start: "", end: "", lineStart: "echo \"", lineEnd: "\";" },
  [fmtKeys.pythonmulti]: { start: "\"\"\"\n", end: "\n\"\"\"", lineStart: "", lineEnd: "" },
  [fmtKeys.batch]: { start: "", end: "", lineStart: "REM \"", lineEnd: "\"" },
}

export const outputFormat = {
  [fmtKeys.default]: { name: "ASCII Art", value: fmtKeys.default },
  [fmtKeys.doubleslash]: { name: "Single Line Double Slash - //", value: fmtKeys.doubleslash },
  [fmtKeys.slashstar]: { name: "Slash Star - /* */", value: fmtKeys.slashstar },
  [fmtKeys.sql]: { name: "SQL Comment - --", value: fmtKeys.sql },
  [fmtKeys.javadoc]: { name: "JavaDoc - /** * */", value: fmtKeys.javadoc },
  [fmtKeys.bash]: { name: "Bash Comment - #", value: fmtKeys.bash },
  [fmtKeys.bashmulti]: { name: "Bash Multiline - : \" \"", value: fmtKeys.bashmulti },
  [fmtKeys.sgml]: { name: "SGML Comment - <!-- -->", value: fmtKeys.sgml },
  [fmtKeys.echo]: { name: "Echo Commands - echo \" \";", value: fmtKeys.echo },
  [fmtKeys.pythonmulti]: { name: "Python multiline - \"\"\" \"\"\"", value: fmtKeys.pythonmulti },
  [fmtKeys.batch]: { name: "Batch - REM", value: fmtKeys.batch },
}

