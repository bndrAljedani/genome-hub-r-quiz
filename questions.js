const QUESTIONS = [
  {
    "id": 1,
    "question": "Which operator is commonly used to assign a value to a variable in R?",
    "options": [
      "==",
      "<-",
      "!=",
      "<="
    ],
    "answer": 1
  },
  {
    "id": 2,
    "question": "What is the final value of x after x <- 7; x <- x + 3?",
    "options": [
      "7",
      "3",
      "10",
      "21"
    ],
    "answer": 2
  },
  {
    "id": 3,
    "question": "Are score and Score the same variable in R?",
    "options": [
      "Always",
      "Only for numbers",
      "Only inside functions",
      "No"
    ],
    "answer": 3
  },
  {
    "id": 4,
    "question": "Which symbol starts a comment in R?",
    "options": [
      "#",
      "//",
      "/*",
      "--"
    ],
    "answer": 0
  },
  {
    "id": 5,
    "question": "What is the result of 8 + 2?",
    "options": [
      "82",
      "10",
      "6",
      "16"
    ],
    "answer": 1
  },
  {
    "id": 6,
    "question": "What is the result of 9 - 4?",
    "options": [
      "13",
      "36",
      "5",
      "2"
    ],
    "answer": 2
  },
  {
    "id": 7,
    "question": "What is the result of 6 * 3?",
    "options": [
      "9",
      "2",
      "63",
      "18"
    ],
    "answer": 3
  },
  {
    "id": 8,
    "question": "What is the result of 12 / 4?",
    "options": [
      "3",
      "8",
      "48",
      "16"
    ],
    "answer": 0
  },
  {
    "id": 9,
    "question": "What is the result of 2 + 3 * 4?",
    "options": [
      "20",
      "14",
      "24",
      "9"
    ],
    "answer": 1
  },
  {
    "id": 10,
    "question": "What is the result of (2 + 3) * 4?",
    "options": [
      "14",
      "9",
      "20",
      "24"
    ],
    "answer": 2
  },
  {
    "id": 11,
    "question": "What is the result of 3 ^ 2?",
    "options": [
      "6",
      "8",
      "1",
      "9"
    ],
    "answer": 3
  },
  {
    "id": 12,
    "question": "What is the result of 10 %% 3?",
    "options": [
      "1",
      "3",
      "0",
      "10"
    ],
    "answer": 0
  },
  {
    "id": 13,
    "question": "What is the result of 10 %/% 3?",
    "options": [
      "1",
      "3",
      "3.33",
      "0"
    ],
    "answer": 1
  },
  {
    "id": 14,
    "question": "Which expression creates a vector containing 2, 4, and 6?",
    "options": [
      "vector(2, 4, 6)",
      "[2, 4, 6]",
      "c(2, 4, 6)",
      "(2, 4, 6)"
    ],
    "answer": 2
  },
  {
    "id": 15,
    "question": "What does length(c(10, 20, 30, 40)) return?",
    "options": [
      "100",
      "40",
      "10",
      "4"
    ],
    "answer": 3
  },
  {
    "id": 16,
    "question": "At which number does ordinary vector indexing begin in R?",
    "options": [
      "1",
      "0",
      "−1",
      "2"
    ],
    "answer": 0
  },
  {
    "id": 17,
    "question": "Given v <- c(5, 10, 15), what does v[2] return?",
    "options": [
      "5",
      "10",
      "15",
      "2"
    ],
    "answer": 1
  },
  {
    "id": 18,
    "question": "Given v <- c(4, 8, 12), what does v[-2] return?",
    "options": [
      "8",
      "4, 8",
      "4, 12",
      "-4, -8, -12"
    ],
    "answer": 2
  },
  {
    "id": 19,
    "question": "What does 2:5 produce?",
    "options": [
      "2, 5",
      "2, 3, 4",
      "3, 4, 5",
      "2, 3, 4, 5"
    ],
    "answer": 3
  },
  {
    "id": 20,
    "question": "What does sum(c(2, 3, 5)) return?",
    "options": [
      "10",
      "3",
      "5",
      "30"
    ],
    "answer": 0
  },
  {
    "id": 21,
    "question": "What does mean(c(2, 4, 6)) return?",
    "options": [
      "12",
      "4",
      "3",
      "6"
    ],
    "answer": 1
  },
  {
    "id": 22,
    "question": "What does class(\"R language\") return?",
    "options": [
      "\"numeric\"",
      "\"logical\"",
      "\"character\"",
      "\"integer\""
    ],
    "answer": 2
  },
  {
    "id": 23,
    "question": "What does class(TRUE) return?",
    "options": [
      "\"character\"",
      "\"numeric\"",
      "\"integer\"",
      "\"logical\""
    ],
    "answer": 3
  },
  {
    "id": 24,
    "question": "What is the result of 5 == 5?",
    "options": [
      "TRUE",
      "FALSE",
      "5",
      "NA"
    ],
    "answer": 0
  },
  {
    "id": 25,
    "question": "Given v <- c(2, 5, 8, 10), what does v[v > 5] return?",
    "options": [
      "5, 8, 10",
      "8, 10",
      "2, 5",
      "All four values"
    ],
    "answer": 1
  },
  {
    "id": 26,
    "question": "What does is.na(c(3, NA, 7)) return?",
    "options": [
      "TRUE, FALSE, TRUE",
      "FALSE, FALSE, FALSE",
      "FALSE, TRUE, FALSE",
      "FALSE, NA, FALSE"
    ],
    "answer": 2
  },
  {
    "id": 27,
    "question": "What does c(1, 2, 3) + 10 return?",
    "options": [
      "11, 2, 3",
      "1, 2, 3, 10",
      "16",
      "11, 12, 13"
    ],
    "answer": 3
  },
  {
    "id": 28,
    "question": "What does min(c(8, 3, 12, 5)) return?",
    "options": [
      "3",
      "8",
      "12",
      "5"
    ],
    "answer": 0
  },
  {
    "id": 29,
    "question": "What does max(c(-4, -1, -9)) return?",
    "options": [
      "−9",
      "−1",
      "−4",
      "1"
    ],
    "answer": 1
  },
  {
    "id": 30,
    "question": "What does median(c(1, 2, 9)) return?",
    "options": [
      "4",
      "9",
      "2",
      "1"
    ],
    "answer": 2
  },
  {
    "id": 31,
    "question": "What does sort(c(7, 2, 5)) return?",
    "options": [
      "7, 5, 2",
      "7, 2, 5",
      "5, 2, 7",
      "2, 5, 7"
    ],
    "answer": 3
  },
  {
    "id": 32,
    "question": "What does rev(c(4, 1, 8)) return?",
    "options": [
      "8, 1, 4",
      "8, 4, 1",
      "1, 4, 8",
      "4, 1, 8"
    ],
    "answer": 0
  },
  {
    "id": 33,
    "question": "What does unique(c(3, 1, 3, 2, 1)) return?",
    "options": [
      "1, 2, 3",
      "3, 1, 2",
      "3, 1",
      "2"
    ],
    "answer": 1
  },
  {
    "id": 34,
    "question": "What does seq(from = 2, to = 8, by = 2) return?",
    "options": [
      "2, 3, 4, 5, 6, 7, 8",
      "2, 4, 6",
      "2, 4, 6, 8",
      "2, 8"
    ],
    "answer": 2
  },
  {
    "id": 35,
    "question": "What does rep(c(1, 2), times = 3) return?",
    "options": [
      "1, 1, 1, 2, 2, 2",
      "3, 6",
      "1, 2, 3",
      "1, 2, 1, 2, 1, 2"
    ],
    "answer": 3
  },
  {
    "id": 36,
    "question": "What does round(3.14159, digits = 2) return?",
    "options": [
      "3.14",
      "3.1",
      "3.15",
      "3"
    ],
    "answer": 0
  },
  {
    "id": 37,
    "question": "What does sqrt(81) return?",
    "options": [
      "40.5",
      "9",
      "6561",
      "−9"
    ],
    "answer": 1
  },
  {
    "id": 38,
    "question": "What does abs(-12) return?",
    "options": [
      "−12",
      "0",
      "12",
      "144"
    ],
    "answer": 2
  },
  {
    "id": 39,
    "question": "What does prod(c(2, 3, 4)) return?",
    "options": [
      "9",
      "3",
      "6",
      "24"
    ],
    "answer": 3
  },
  {
    "id": 40,
    "question": "What does which(c(FALSE, TRUE, FALSE, TRUE)) return?",
    "options": [
      "2, 4",
      "1, 3",
      "2",
      "TRUE, TRUE"
    ],
    "answer": 0
  },
  {
    "id": 41,
    "question": "Given scores <- c(Ali = 80, Sara = 90), what does names(scores) return?",
    "options": [
      "80, 90",
      "\"Ali\", \"Sara\"",
      "\"scores\"",
      "1, 2"
    ],
    "answer": 1
  },
  {
    "id": 42,
    "question": "Given m <- matrix(1:4, nrow = 2), what is m[1, 2]?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2
  },
  {
    "id": 43,
    "question": "Which function returns the number of rows in a data frame?",
    "options": [
      "ncol()",
      "names()",
      "lengths()",
      "nrow()"
    ],
    "answer": 3
  },
  {
    "id": 44,
    "question": "Which function creates a data frame?",
    "options": [
      "data.frame()",
      "matrix()",
      "array()",
      "factor()"
    ],
    "answer": 0
  },
  {
    "id": 45,
    "question": "Which expression extracts the score column from df as a vector?",
    "options": [
      "df[\"score\"]",
      "df$score",
      "names(df)",
      "df[1, ]"
    ],
    "answer": 1
  },
  {
    "id": 46,
    "question": "What is the main purpose of a factor in R?",
    "options": [
      "Store executable code",
      "Calculate square roots",
      "Represent categorical data",
      "Read text files"
    ],
    "answer": 2
  },
  {
    "id": 47,
    "question": "What does ifelse(c(40, 75, 50) >= 50, \"Pass\", \"Fail\") return?",
    "options": [
      "\"Pass\", \"Pass\", \"Fail\"",
      "\"Fail\", \"Pass\", \"Fail\"",
      "\"Pass\", \"Fail\", \"Pass\"",
      "\"Fail\", \"Pass\", \"Pass\""
    ],
    "answer": 3
  },
  {
    "id": 48,
    "question": "Which function returns the number of columns in a data frame?",
    "options": [
      "ncol()",
      "nrow()",
      "class()",
      "names()"
    ],
    "answer": 0
  },
  {
    "id": 49,
    "question": "A data frame has 5 rows and 3 columns. What does dim() return for it?",
    "options": [
      "3, 5",
      "5, 3",
      "15",
      "8"
    ],
    "answer": 1
  },
  {
    "id": 50,
    "question": "Which expression displays the first 3 rows of df?",
    "options": [
      "tail(df, 3)",
      "nrow(df)",
      "head(df, 3)",
      "head(df, 1)"
    ],
    "answer": 2
  },
  {
    "id": 51,
    "question": "What does tail(c(10, 20, 30, 40, 50), 2) return?",
    "options": [
      "10, 20",
      "20, 30",
      "30, 40, 50",
      "40, 50"
    ],
    "answer": 3
  },
  {
    "id": 52,
    "question": "Which function displays the structure of an R object?",
    "options": [
      "str()",
      "sort()",
      "sum()",
      "seq()"
    ],
    "answer": 0
  },
  {
    "id": 53,
    "question": "Which function provides descriptive statistics for a numeric vector?",
    "options": [
      "names()",
      "summary()",
      "class()",
      "length()"
    ],
    "answer": 1
  },
  {
    "id": 54,
    "question": "What does as.numeric(\"25\") return?",
    "options": [
      "\"25\"",
      "TRUE",
      "25",
      "NA"
    ],
    "answer": 2
  },
  {
    "id": 55,
    "question": "What does as.character(42) return?",
    "options": [
      "42",
      "\"forty-two\"",
      "4.2",
      "\"42\""
    ],
    "answer": 3
  },
  {
    "id": 56,
    "question": "What does paste(\"Hello\", \"R\") return?",
    "options": [
      "\"Hello R\"",
      "\"HelloR\"",
      "\"Hello, R\"",
      "\"Hello-R\""
    ],
    "answer": 0
  },
  {
    "id": 57,
    "question": "What does paste0(\"sample\", 3) return?",
    "options": [
      "\"sample 3\"",
      "\"sample3\"",
      "\"sample,3\"",
      "\"3sample\""
    ],
    "answer": 1
  },
  {
    "id": 58,
    "question": "What does nchar(\"Genome\") return?",
    "options": [
      "1",
      "5",
      "6",
      "7"
    ],
    "answer": 2
  },
  {
    "id": 59,
    "question": "What does toupper(\"Data\") return?",
    "options": [
      "\"data\"",
      "\"Data\"",
      "\"dATA\"",
      "\"DATA\""
    ],
    "answer": 3
  },
  {
    "id": 60,
    "question": "Which expression converts \"HELLO\" to \"hello\"?",
    "options": [
      "tolower(\"HELLO\")",
      "toupper(\"HELLO\")",
      "nchar(\"HELLO\")",
      "as.character(\"HELLO\")"
    ],
    "answer": 0
  },
  {
    "id": 61,
    "question": "What does substr(\"BIOLOGY\", start = 1, stop = 3) return?",
    "options": [
      "\"BI\"",
      "\"BIO\"",
      "\"IOL\"",
      "\"LOGY\""
    ],
    "answer": 1
  },
  {
    "id": 62,
    "question": "Which keyword defines a function in R?",
    "options": [
      "def",
      "func",
      "function",
      "define"
    ],
    "answer": 2
  },
  {
    "id": 63,
    "question": "Given multiply <- function(x, y = 2) { x * y }, what does multiply(6) return?",
    "options": [
      "6",
      "8",
      "An error",
      "12"
    ],
    "answer": 3
  },
  {
    "id": 64,
    "question": "What does if (4 > 5) \"High\" else \"Low\" return?",
    "options": [
      "\"Low\"",
      "\"High\"",
      "Both strings",
      "NULL"
    ],
    "answer": 0
  },
  {
    "id": 65,
    "question": "How many times does the body of for (i in c(2, 4, 6)) { print(i) } run?",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "answer": 1
  },
  {
    "id": 66,
    "question": "Which function commonly reads a comma-separated CSV file into a data frame?",
    "options": [
      "write.csv()",
      "saveRDS()",
      "read.csv()",
      "readLines()"
    ],
    "answer": 2
  },
  {
    "id": 67,
    "question": "Which function returns the current working directory?",
    "options": [
      "setwd()",
      "list.files()",
      "dir.create()",
      "getwd()"
    ],
    "answer": 3
  },
  {
    "id": 68,
    "question": "Which is a syntactically valid R variable name without backticks?",
    "options": [
      "student_score",
      "2score",
      "student score",
      "if"
    ],
    "answer": 0
  },
  {
    "id": 69,
    "question": "What does class(5L) return?",
    "options": [
      "\"numeric\"",
      "\"integer\"",
      "\"character\"",
      "\"logical\""
    ],
    "answer": 1
  },
  {
    "id": 70,
    "question": "What does class(5) return?",
    "options": [
      "\"integer\"",
      "\"character\"",
      "\"numeric\"",
      "\"logical\""
    ],
    "answer": 2
  },
  {
    "id": 71,
    "question": "What is the result of 7 != 3?",
    "options": [
      "FALSE",
      "4",
      "NA",
      "TRUE"
    ],
    "answer": 3
  },
  {
    "id": 72,
    "question": "What is the result of 4 <= 4?",
    "options": [
      "TRUE",
      "FALSE",
      "4",
      "NA"
    ],
    "answer": 0
  },
  {
    "id": 73,
    "question": "What is the result of TRUE & FALSE?",
    "options": [
      "TRUE",
      "FALSE",
      "NA",
      "NULL"
    ],
    "answer": 1
  },
  {
    "id": 74,
    "question": "What is the result of TRUE | FALSE?",
    "options": [
      "FALSE",
      "NA",
      "TRUE",
      "NULL"
    ],
    "answer": 2
  },
  {
    "id": 75,
    "question": "What is the result of !TRUE?",
    "options": [
      "TRUE",
      "NA",
      "NULL",
      "FALSE"
    ],
    "answer": 3
  },
  {
    "id": 76,
    "question": "What does c(TRUE, FALSE) & c(TRUE, TRUE) return?",
    "options": [
      "TRUE, FALSE",
      "TRUE, TRUE",
      "FALSE, FALSE",
      "FALSE, TRUE"
    ],
    "answer": 0
  },
  {
    "id": 77,
    "question": "What does any(c(FALSE, TRUE, FALSE)) return?",
    "options": [
      "FALSE",
      "TRUE",
      "1, 2, 3",
      "NA"
    ],
    "answer": 1
  },
  {
    "id": 78,
    "question": "What does all(c(TRUE, TRUE, FALSE)) return?",
    "options": [
      "TRUE",
      "3",
      "FALSE",
      "NA"
    ],
    "answer": 2
  },
  {
    "id": 79,
    "question": "What does c(2, 5, 7) %in% c(5, 7) return?",
    "options": [
      "TRUE, FALSE, FALSE",
      "TRUE, TRUE, TRUE",
      "2, 3",
      "FALSE, TRUE, TRUE"
    ],
    "answer": 3
  },
  {
    "id": 80,
    "question": "What does NA usually represent in R?",
    "options": [
      "A missing value",
      "An empty string",
      "The number zero",
      "A comment"
    ],
    "answer": 0
  },
  {
    "id": 81,
    "question": "What does sum(c(1, NA, 3)) return by default?",
    "options": [
      "4",
      "NA",
      "3",
      "0"
    ],
    "answer": 1
  },
  {
    "id": 82,
    "question": "What does sum(c(1, NA, 3), na.rm = TRUE) return?",
    "options": [
      "NA",
      "3",
      "4",
      "0"
    ],
    "answer": 2
  },
  {
    "id": 83,
    "question": "What does mean(c(2, NA, 6), na.rm = TRUE) return?",
    "options": [
      "8",
      "NA",
      "2",
      "4"
    ],
    "answer": 3
  },
  {
    "id": 84,
    "question": "What does NULL generally represent in R?",
    "options": [
      "The absence of an object or value",
      "A missing numeric measurement",
      "The number zero",
      "An empty character string"
    ],
    "answer": 0
  },
  {
    "id": 85,
    "question": "What does is.null(NULL) return?",
    "options": [
      "FALSE",
      "TRUE",
      "NA",
      "0"
    ],
    "answer": 1
  },
  {
    "id": 86,
    "question": "What does is.nan(0 / 0) return?",
    "options": [
      "FALSE",
      "NA",
      "TRUE",
      "NULL"
    ],
    "answer": 2
  },
  {
    "id": 87,
    "question": "What is the result of 1 / 0 in R?",
    "options": [
      "0",
      "1",
      "NA",
      "Inf"
    ],
    "answer": 3
  },
  {
    "id": 88,
    "question": "What does is.finite(c(2, Inf)) return?",
    "options": [
      "TRUE, FALSE",
      "FALSE, TRUE",
      "TRUE, TRUE",
      "FALSE, FALSE"
    ],
    "answer": 0
  },
  {
    "id": 89,
    "question": "What does c(1, \"two\") produce?",
    "options": [
      "A numeric vector",
      "A character vector",
      "A logical vector",
      "A matrix"
    ],
    "answer": 1
  },
  {
    "id": 90,
    "question": "What does as.numeric(c(TRUE, FALSE)) return?",
    "options": [
      "TRUE, FALSE",
      "0, 1",
      "1, 0",
      "NA, NA"
    ],
    "answer": 2
  },
  {
    "id": 91,
    "question": "What does as.logical(c(0, 2)) return?",
    "options": [
      "TRUE, FALSE",
      "TRUE, TRUE",
      "FALSE, FALSE",
      "FALSE, TRUE"
    ],
    "answer": 3
  },
  {
    "id": 92,
    "question": "What does as.integer(3.9) return?",
    "options": [
      "3",
      "4",
      "3.9",
      "NA"
    ],
    "answer": 0
  },
  {
    "id": 93,
    "question": "What does as.numeric(\"hello\") produce?",
    "options": [
      "0 without a warning",
      "NA with a warning",
      "\"hello\"",
      "5"
    ],
    "answer": 1
  },
  {
    "id": 94,
    "question": "Given v <- c(10, 20, 30, 40), what does v[c(1, 4)] return?",
    "options": [
      "10, 20",
      "20, 40",
      "10, 40",
      "All four values"
    ],
    "answer": 2
  },
  {
    "id": 95,
    "question": "Given v <- c(10, 20, 30), what does v[0] return?",
    "options": [
      "10",
      "0",
      "NA",
      "A zero-length numeric vector"
    ],
    "answer": 3
  },
  {
    "id": 96,
    "question": "Given v <- c(10, 20), what does v[5] return?",
    "options": [
      "NA",
      "20",
      "5",
      "0"
    ],
    "answer": 0
  },
  {
    "id": 97,
    "question": "What is v after v <- c(1, 2, 3); v[2] <- 9?",
    "options": [
      "9, 2, 3",
      "1, 9, 3",
      "1, 2, 9",
      "1, 2, 3, 9"
    ],
    "answer": 1
  },
  {
    "id": 98,
    "question": "What does c(2, 4, 6) * 2 return?",
    "options": [
      "2, 4, 6, 2",
      "4, 4, 6",
      "4, 8, 12",
      "24"
    ],
    "answer": 2
  },
  {
    "id": 99,
    "question": "What does c(1, 2, 3) + c(10, 20, 30) return?",
    "options": [
      "10, 40, 90",
      "6, 60",
      "1, 2, 3, 10, 20, 30",
      "11, 22, 33"
    ],
    "answer": 3
  },
  {
    "id": 100,
    "question": "What does c(1, 2, 3, 4) + c(10, 20) return?",
    "options": [
      "11, 22, 13, 24",
      "11, 22, 3, 4",
      "11, 12, 23, 24",
      "An error"
    ],
    "answer": 0
  },
  {
    "id": 101,
    "question": "What does rep(c(1, 2), each = 2) return?",
    "options": [
      "1, 2, 1, 2",
      "1, 1, 2, 2",
      "2, 4",
      "1, 2, 2"
    ],
    "answer": 1
  },
  {
    "id": 102,
    "question": "What does seq(0, 1, length.out = 3) return?",
    "options": [
      "0, 1, 2",
      "0, 0.3, 1",
      "0, 0.5, 1",
      "0, 1, 3"
    ],
    "answer": 2
  },
  {
    "id": 103,
    "question": "What does sort(c(3, 1, 2), decreasing = TRUE) return?",
    "options": [
      "1, 2, 3",
      "2, 1, 3",
      "3, 1, 2",
      "3, 2, 1"
    ],
    "answer": 3
  },
  {
    "id": 104,
    "question": "What does order(c(30, 10, 20)) return?",
    "options": [
      "2, 3, 1",
      "10, 20, 30",
      "1, 2, 3",
      "3, 2, 1"
    ],
    "answer": 0
  },
  {
    "id": 105,
    "question": "What does which.max(c(4, 9, 2)) return?",
    "options": [
      "9",
      "2",
      "3",
      "4"
    ],
    "answer": 1
  },
  {
    "id": 106,
    "question": "What does range(c(4, 9, 2, 7)) return?",
    "options": [
      "4, 7",
      "7",
      "2, 9",
      "2, 4, 7, 9"
    ],
    "answer": 2
  },
  {
    "id": 107,
    "question": "What does cumsum(c(1, 2, 3)) return?",
    "options": [
      "1, 2, 3",
      "6",
      "1, 4, 9",
      "1, 3, 6"
    ],
    "answer": 3
  },
  {
    "id": 108,
    "question": "What does diff(c(2, 5, 9)) return?",
    "options": [
      "3, 4",
      "2, 3, 4",
      "7, 14",
      "-3, -4"
    ],
    "answer": 0
  },
  {
    "id": 109,
    "question": "What does duplicated(c(\"A\", \"B\", \"A\")) return?",
    "options": [
      "TRUE, FALSE, TRUE",
      "FALSE, FALSE, TRUE",
      "FALSE, TRUE, FALSE",
      "TRUE, TRUE, FALSE"
    ],
    "answer": 1
  },
  {
    "id": 110,
    "question": "What does table(c(\"A\", \"B\", \"A\")) report?",
    "options": [
      "A = 1, B = 2",
      "A = 2, B = 2",
      "A = 2, B = 1",
      "A = 1, B = 1"
    ],
    "answer": 2
  },
  {
    "id": 111,
    "question": "What does floor(3.8) return?",
    "options": [
      "4",
      "3.8",
      "0",
      "3"
    ],
    "answer": 3
  },
  {
    "id": 112,
    "question": "What does ceiling(3.2) return?",
    "options": [
      "4",
      "3",
      "3.2",
      "0"
    ],
    "answer": 0
  },
  {
    "id": 113,
    "question": "What does round(2.76, digits = 1) return?",
    "options": [
      "2.7",
      "2.8",
      "3",
      "2.76"
    ],
    "answer": 1
  },
  {
    "id": 114,
    "question": "What does log10(100) return?",
    "options": [
      "10",
      "100",
      "2",
      "1"
    ],
    "answer": 2
  },
  {
    "id": 115,
    "question": "What does exp(0) return?",
    "options": [
      "0",
      "Inf",
      "NA",
      "1"
    ],
    "answer": 3
  },
  {
    "id": 116,
    "question": "What does median(c(2, 4, 8, 10)) return?",
    "options": [
      "6",
      "4",
      "8",
      "7"
    ],
    "answer": 0
  },
  {
    "id": 117,
    "question": "What does sd(c(5, 5, 5)) return?",
    "options": [
      "5",
      "0",
      "1",
      "15"
    ],
    "answer": 1
  },
  {
    "id": 118,
    "question": "What does var(c(2, 4, 6)) return using R's sample variance?",
    "options": [
      "2",
      "8",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "id": 119,
    "question": "Which function calculates correlation between two numeric vectors?",
    "options": [
      "cov()",
      "var()",
      "sd()",
      "cor()"
    ],
    "answer": 3
  },
  {
    "id": 120,
    "question": "Which function computes quantiles of a numeric vector?",
    "options": [
      "quantile()",
      "quantity()",
      "quartiles()",
      "count()"
    ],
    "answer": 0
  },
  {
    "id": 121,
    "question": "By default, how does matrix() fill its values?",
    "options": [
      "Row by row",
      "Column by column",
      "Diagonally",
      "Randomly"
    ],
    "answer": 1
  },
  {
    "id": 122,
    "question": "Which argument makes matrix() fill values row by row?",
    "options": [
      "rows = TRUE",
      "horizontal = TRUE",
      "byrow = TRUE",
      "fill = \"row\""
    ],
    "answer": 2
  },
  {
    "id": 123,
    "question": "Which expression selects the second row of matrix m?",
    "options": [
      "m[, 2]",
      "m[2, 2]",
      "m[1, ]",
      "m[2, ]"
    ],
    "answer": 3
  },
  {
    "id": 124,
    "question": "Which expression selects the third column of matrix m?",
    "options": [
      "m[, 3]",
      "m[3, ]",
      "m[3, 3]",
      "m[1, ]"
    ],
    "answer": 0
  },
  {
    "id": 125,
    "question": "Which function transposes a matrix?",
    "options": [
      "transpose_matrix()",
      "t()",
      "rev()",
      "switch()"
    ],
    "answer": 1
  },
  {
    "id": 126,
    "question": "If m has 2 rows and 3 columns, what are the dimensions of t(m)?",
    "options": [
      "2 rows, 3 columns",
      "6 rows, 1 column",
      "3 rows, 2 columns",
      "1 row, 6 columns"
    ],
    "answer": 2
  },
  {
    "id": 127,
    "question": "Which function combines compatible objects by columns?",
    "options": [
      "rbind()",
      "append()",
      "merge()",
      "cbind()"
    ],
    "answer": 3
  },
  {
    "id": 128,
    "question": "Which function combines compatible objects by rows?",
    "options": [
      "rbind()",
      "cbind()",
      "paste()",
      "table()"
    ],
    "answer": 0
  },
  {
    "id": 129,
    "question": "Which function calculates the sum of each matrix row?",
    "options": [
      "colSums()",
      "rowSums()",
      "sumRows()",
      "sum()"
    ],
    "answer": 1
  },
  {
    "id": 130,
    "question": "Which function calculates the mean of each matrix column?",
    "options": [
      "rowMeans()",
      "mean()",
      "colMeans()",
      "columnAverage()"
    ],
    "answer": 2
  },
  {
    "id": 131,
    "question": "For numeric matrices of identical dimensions, what does m1 * m2 calculate?",
    "options": [
      "Matrix multiplication",
      "Matrix division",
      "A transposed matrix",
      "Element-wise multiplication"
    ],
    "answer": 3
  },
  {
    "id": 132,
    "question": "Which operator performs matrix multiplication?",
    "options": [
      "%*%",
      "*",
      "%%",
      "%/%"
    ],
    "answer": 0
  },
  {
    "id": 133,
    "question": "Which statement about data frames is correct?",
    "options": [
      "All columns must be numeric",
      "Different columns can have different data types",
      "Every column must have a different length",
      "Data frames cannot contain text"
    ],
    "answer": 1
  },
  {
    "id": 134,
    "question": "A data frame has 10 rows and 4 columns. What does length(df) return?",
    "options": [
      "10",
      "40",
      "4",
      "14"
    ],
    "answer": 2
  },
  {
    "id": 135,
    "question": "Which expression selects the first two rows of df?",
    "options": [
      "df[, 1:2]",
      "df[1:2]",
      "df[2, 1]",
      "df[1:2, ]"
    ],
    "answer": 3
  },
  {
    "id": 136,
    "question": "Which expression selects columns named name and score from df?",
    "options": [
      "df[, c(\"name\", \"score\")]",
      "df[c(\"name\", \"score\"), ]",
      "df$name$score",
      "df(\"name\", \"score\")"
    ],
    "answer": 0
  },
  {
    "id": 137,
    "question": "Given df <- data.frame(a = 1:3, b = 4:6), what does df[2, 2] return?",
    "options": [
      "2",
      "5",
      "4",
      "6"
    ],
    "answer": 1
  },
  {
    "id": 138,
    "question": "Which statement adds a column named passed based on score >= 50?",
    "options": [
      "df$score <- passed >= 50",
      "passed(df) <- score",
      "df$passed <- df$score >= 50",
      "df <- passed(score)"
    ],
    "answer": 2
  },
  {
    "id": 139,
    "question": "Which statement removes the age column from data frame df?",
    "options": [
      "df$age <- 0",
      "df$age <- NA",
      "df$age <- \"\"",
      "df$age <- NULL"
    ],
    "answer": 3
  },
  {
    "id": 140,
    "question": "Which function can rename all columns by assigning a character vector?",
    "options": [
      "colnames()",
      "ncol()",
      "nrow()",
      "dim()"
    ],
    "answer": 0
  },
  {
    "id": 141,
    "question": "Which expression selects rows where score is at least 80, assuming no missing scores?",
    "options": [
      "df[, df$score >= 80]",
      "df[df$score >= 80, ]",
      "df[df$score < 80, ]",
      "df$score <- 80"
    ],
    "answer": 1
  },
  {
    "id": 142,
    "question": "Which function can combine two data frames using a shared identifier column?",
    "options": [
      "paste()",
      "sort()",
      "merge()",
      "rep()"
    ],
    "answer": 2
  },
  {
    "id": 143,
    "question": "Which expression keeps only rows of df with no missing values?",
    "options": [
      "df[is.na(df), ]",
      "df[, complete.cases(df)]",
      "df[!complete.cases(df), ]",
      "df[complete.cases(df), ]"
    ],
    "answer": 3
  },
  {
    "id": 144,
    "question": "Which expression sorts the rows of df by score in ascending order?",
    "options": [
      "df[order(df$score), ]",
      "df[, order(df$score)]",
      "sort(df$score)",
      "df[rev(df$score), ]"
    ],
    "answer": 0
  },
  {
    "id": 145,
    "question": "Which function creates a list?",
    "options": [
      "factor()",
      "list()",
      "matrix()",
      "table()"
    ],
    "answer": 1
  },
  {
    "id": 146,
    "question": "Which statement about lists is correct?",
    "options": [
      "They can contain only numbers",
      "All elements must have the same length",
      "They can contain different types of objects",
      "They cannot contain vectors"
    ],
    "answer": 2
  },
  {
    "id": 147,
    "question": "Given x <- list(a = 10, b = \"R\"), what does x[[2]] return?",
    "options": [
      "10",
      "\"b\"",
      "A two-element list",
      "\"R\""
    ],
    "answer": 3
  },
  {
    "id": 148,
    "question": "Given x <- list(a = 10, b = \"R\"), what does x[2] return?",
    "options": [
      "A one-element list with element b containing \"R\"",
      "The number 2",
      "The number 10",
      "NULL"
    ],
    "answer": 0
  },
  {
    "id": 149,
    "question": "Given x <- list(name = \"Ali\", score = 90), what does x$score return?",
    "options": [
      "\"Ali\"",
      "90",
      "\"score\"",
      "2"
    ],
    "answer": 1
  },
  {
    "id": 150,
    "question": "What does length(list(c(1, 2, 3), \"R\", TRUE)) return?",
    "options": [
      "5",
      "1",
      "3",
      "6"
    ],
    "answer": 2
  },
  {
    "id": 151,
    "question": "What does unlist(list(1, 2, 3)) return?",
    "options": [
      "A data frame",
      "A matrix",
      "A factor",
      "A numeric vector containing 1, 2, 3"
    ],
    "answer": 3
  },
  {
    "id": 152,
    "question": "What does levels(factor(c(\"B\", \"A\", \"B\"), levels = c(\"A\", \"B\"))) return?",
    "options": [
      "\"A\", \"B\"",
      "\"B\", \"A\", \"B\"",
      "1, 2, 3",
      "\"B\""
    ],
    "answer": 0
  },
  {
    "id": 153,
    "question": "What does nlevels(factor(c(\"red\", \"blue\", \"red\"))) return?",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "answer": 1
  },
  {
    "id": 154,
    "question": "Which argument creates an ordered factor when used in factor()?",
    "options": [
      "sort = TRUE",
      "rank = TRUE",
      "ordered = TRUE",
      "ascending = TRUE"
    ],
    "answer": 2
  },
  {
    "id": 155,
    "question": "Given f <- factor(c(\"10\", \"20\")), which expression converts its labels to the numbers 10 and 20?",
    "options": [
      "as.numeric(f)",
      "levels(f)",
      "as.character(f)",
      "as.numeric(as.character(f))"
    ],
    "answer": 3
  },
  {
    "id": 156,
    "question": "What does paste(\"A\", \"B\", sep = \"-\") return?",
    "options": [
      "\"A-B\"",
      "\"A B\"",
      "\"AB\"",
      "\"A,B\""
    ],
    "answer": 0
  },
  {
    "id": 157,
    "question": "What does paste(c(\"A\", \"B\", \"C\"), collapse = \",\") return?",
    "options": [
      "Three separate strings",
      "\"A,B,C\"",
      "\"ABC,\"",
      "\"A B C\""
    ],
    "answer": 1
  },
  {
    "id": 158,
    "question": "What does trimws(\"  R  \") return?",
    "options": [
      "\"  R\"",
      "\"R  \"",
      "\"R\"",
      "\"\""
    ],
    "answer": 2
  },
  {
    "id": 159,
    "question": "What does strsplit(\"A,B,C\", split = \",\")[[1]] return?",
    "options": [
      "\"ABC\"",
      "\"A,B,C\"",
      "\",\"",
      "\"A\", \"B\", \"C\""
    ],
    "answer": 3
  },
  {
    "id": 160,
    "question": "What does grepl(\"cat\", c(\"cat\", \"dog\", \"catfish\")) return?",
    "options": [
      "TRUE, FALSE, TRUE",
      "TRUE, FALSE, FALSE",
      "FALSE, TRUE, FALSE",
      "1, 3"
    ],
    "answer": 0
  },
  {
    "id": 161,
    "question": "What does gsub(\"a\", \"o\", \"banana\") return?",
    "options": [
      "\"bonana\"",
      "\"bonono\"",
      "\"banana\"",
      "\"banono\""
    ],
    "answer": 1
  },
  {
    "id": 162,
    "question": "What does sub(\"a\", \"o\", \"banana\") return?",
    "options": [
      "\"bonono\"",
      "\"banana\"",
      "\"bonana\"",
      "\"banano\""
    ],
    "answer": 2
  },
  {
    "id": 163,
    "question": "Which function explicitly returns a value from a function?",
    "options": [
      "output()",
      "give()",
      "result()",
      "return()"
    ],
    "answer": 3
  },
  {
    "id": 164,
    "question": "What does f <- function(x) { x * 2 }; f(5) return?",
    "options": [
      "10",
      "5",
      "7",
      "25"
    ],
    "answer": 0
  },
  {
    "id": 165,
    "question": "Given subtract <- function(a, b) { a - b }, what does subtract(b = 2, a = 7) return?",
    "options": [
      "−5",
      "5",
      "9",
      "An error"
    ],
    "answer": 1
  },
  {
    "id": 166,
    "question": "What does f <- function(x) { y <- x + 1; y * 2 }; f(3) return?",
    "options": [
      "4",
      "6",
      "8",
      "NULL"
    ],
    "answer": 2
  },
  {
    "id": 167,
    "question": "Which keyword provides an alternative branch for an if statement?",
    "options": [
      "otherwise",
      "next",
      "switch",
      "else"
    ],
    "answer": 3
  },
  {
    "id": 168,
    "question": "What does if (8 > 5 && 8 < 10) \"Yes\" else \"No\" return?",
    "options": [
      "\"Yes\"",
      "\"No\"",
      "8",
      "NULL"
    ],
    "answer": 0
  },
  {
    "id": 169,
    "question": "Which loop continues while its condition is true?",
    "options": [
      "if",
      "while",
      "function",
      "switch"
    ],
    "answer": 1
  },
  {
    "id": 170,
    "question": "What is the final value of x after x <- 1; while (x < 4) { x <- x + 1 }?",
    "options": [
      "1",
      "3",
      "4",
      "5"
    ],
    "answer": 2
  },
  {
    "id": 171,
    "question": "Which keyword exits the current loop immediately?",
    "options": [
      "next",
      "skip",
      "else",
      "break"
    ],
    "answer": 3
  },
  {
    "id": 172,
    "question": "Which keyword skips the remaining code in the current loop iteration?",
    "options": [
      "next",
      "break",
      "stop_loop",
      "else"
    ],
    "answer": 0
  },
  {
    "id": 173,
    "question": "What is the final value of total after total <- 0; for (i in 1:3) { total <- total + i }?",
    "options": [
      "3",
      "6",
      "9",
      "0"
    ],
    "answer": 1
  },
  {
    "id": 174,
    "question": "What values are printed by for (i in 1:4) { if (i == 3) break; print(i) }?",
    "options": [
      "1, 2, 3, 4",
      "1, 2, 3",
      "1, 2",
      "3, 4"
    ],
    "answer": 2
  },
  {
    "id": 175,
    "question": "What values are printed by for (i in 1:3) { if (i == 2) next; print(i) }?",
    "options": [
      "1, 2, 3",
      "1, 2",
      "2, 3",
      "1, 3"
    ],
    "answer": 3
  },
  {
    "id": 176,
    "question": "Which function applies a function to each element of a list and returns a list?",
    "options": [
      "lapply()",
      "table()",
      "sort()",
      "merge()"
    ],
    "answer": 0
  },
  {
    "id": 177,
    "question": "What does sapply(list(c(1, 2), c(3, 4)), sum) return?",
    "options": [
      "A single value, 10",
      "A numeric vector, 3, 7",
      "A numeric vector, 1, 2, 3, 4",
      "A character vector"
    ],
    "answer": 1
  },
  {
    "id": 178,
    "question": "In apply(m, 1, sum), what does 1 indicate?",
    "options": [
      "Apply only to the first element",
      "Apply over columns",
      "Apply over rows",
      "Repeat once"
    ],
    "answer": 2
  },
  {
    "id": 179,
    "question": "Which function changes the working directory?",
    "options": [
      "getwd()",
      "list.files()",
      "dir.create()",
      "setwd()"
    ],
    "answer": 3
  },
  {
    "id": 180,
    "question": "Which function lists files in a directory?",
    "options": [
      "list.files()",
      "ls()",
      "names()",
      "getwd()"
    ],
    "answer": 0
  },
  {
    "id": 181,
    "question": "Which function checks whether a file exists?",
    "options": [
      "file.open()",
      "file.exists()",
      "is.file()",
      "check.file()"
    ],
    "answer": 1
  },
  {
    "id": 182,
    "question": "Which function writes a data frame to a CSV file?",
    "options": [
      "read.csv()",
      "readLines()",
      "write.csv()",
      "load()"
    ],
    "answer": 2
  },
  {
    "id": 183,
    "question": "Which argument prevents write.csv() from adding row names to the output?",
    "options": [
      "header = FALSE",
      "names = FALSE",
      "index = FALSE",
      "row.names = FALSE"
    ],
    "answer": 3
  },
  {
    "id": 184,
    "question": "In read.table(), what does header = TRUE mean?",
    "options": [
      "The first line contains column names",
      "The first column contains row names",
      "All columns contain text",
      "Missing values are removed"
    ],
    "answer": 0
  },
  {
    "id": 185,
    "question": "Which separator represents a tab in read.table()?",
    "options": [
      "sep = \",\"",
      "sep = \"\\t\"",
      "sep = \";\"",
      "sep = \":\""
    ],
    "answer": 1
  },
  {
    "id": 186,
    "question": "Which function saves a single R object to an RDS file?",
    "options": [
      "write.csv()",
      "save.image()",
      "saveRDS()",
      "readRDS()"
    ],
    "answer": 2
  },
  {
    "id": 187,
    "question": "Which function reads an object saved using saveRDS()?",
    "options": [
      "read.csv()",
      "source()",
      "load()",
      "readRDS()"
    ],
    "answer": 3
  },
  {
    "id": 188,
    "question": "Which command installs the package ggplot2?",
    "options": [
      "install.packages(\"ggplot2\")",
      "library(\"ggplot2\")",
      "source(\"ggplot2\")",
      "load(\"ggplot2\")"
    ],
    "answer": 0
  },
  {
    "id": 189,
    "question": "Which command attaches an installed package named ggplot2?",
    "options": [
      "install.packages(\"ggplot2\")",
      "library(ggplot2)",
      "read.csv(\"ggplot2\")",
      "source(\"ggplot2\")"
    ],
    "answer": 1
  },
  {
    "id": 190,
    "question": "Which expression opens documentation for mean()?",
    "options": [
      "info(mean)",
      "manual(mean)",
      "?mean",
      "explain(mean)"
    ],
    "answer": 2
  },
  {
    "id": 191,
    "question": "Which command runs the R code stored in analysis.R?",
    "options": [
      "read.csv(\"analysis.R\")",
      "load(\"analysis.R\")",
      "library(\"analysis.R\")",
      "source(\"analysis.R\")"
    ],
    "answer": 3
  },
  {
    "id": 192,
    "question": "Which command removes the object x from the current environment?",
    "options": [
      "rm(x)",
      "delete(x)",
      "clear(x)",
      "remove.file(x)"
    ],
    "answer": 0
  },
  {
    "id": 193,
    "question": "Which function lists object names in the current environment?",
    "options": [
      "list.files()",
      "ls()",
      "getwd()",
      "dir()"
    ],
    "answer": 1
  },
  {
    "id": 194,
    "question": "Which function sets the random seed to help reproduce random results?",
    "options": [
      "random.seed()",
      "seed()",
      "set.seed()",
      "set.random()"
    ],
    "answer": 2
  },
  {
    "id": 195,
    "question": "What does sample(1:10, size = 3, replace = FALSE) return?",
    "options": [
      "The first three integers",
      "Three integers that must contain duplicates",
      "All ten integers",
      "Three randomly selected distinct integers"
    ],
    "answer": 3
  },
  {
    "id": 196,
    "question": "What does replace = TRUE allow in sample()?",
    "options": [
      "Selecting the same element more than once",
      "Automatically sorting the result",
      "Removing missing values",
      "Changing the original vector"
    ],
    "answer": 0
  },
  {
    "id": 197,
    "question": "Which function commonly creates a scatter plot from numeric vectors x and y?",
    "options": [
      "hist(x, y)",
      "plot(x, y)",
      "barplot(x, y)",
      "table(x, y)"
    ],
    "answer": 1
  },
  {
    "id": 198,
    "question": "Which function creates a histogram of a numeric vector x?",
    "options": [
      "table(x)",
      "pie(x)",
      "hist(x)",
      "lines(x)"
    ],
    "answer": 2
  },
  {
    "id": 199,
    "question": "Which function creates a box plot?",
    "options": [
      "box()",
      "plotbox()",
      "rectangle()",
      "boxplot()"
    ],
    "answer": 3
  },
  {
    "id": 200,
    "question": "In plot(x, y, main = \"Results\"), what does main specify?",
    "options": [
      "The plot title",
      "The x-axis values",
      "The point color",
      "The number of observations"
    ],
    "answer": 0
  }
];
