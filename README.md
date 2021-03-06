# Kargo Software Engineering Intern Pre-Assessment
### Matthew Morrison
* Email: James.m.morrison@vanderbilt.edu 
* Phone(C): (713)248-6384

Hello Kargo Recruiter! Thank you for reviewing my code and giving me this opportunity to demonstrate my skills. I look forward to hearing from you and learning more about Kargo.

# Implementation

I decided the best way to solve this problem would be to breakup the I/O and the algorithm into two separate files: [main.js](https://github.com/morrijm4/kg_morrijm4_2022/blob/main/main.js) and [helpers.js](https://github.com/morrijm4/kg_morrijm4_2022/blob/main/src/helpers.js). Through the [main.js](https://github.com/morrijm4/kg_morrijm4_2022/blob/main/main.js) file, input is read from the command line and sent to the [helpers.js](https://github.com/morrijm4/kg_morrijm4_2022/blob/main/src/helpers.js) file. In [helpers.js](https://github.com/morrijm4/kg_morrijm4_2022/blob/main/src/helpers.js), the `processIntegers()` function iterates through the integers and the `toPhonetic()` function converts them to their phonetic equivalent. Then, `processIntergers()` returns a string with the desired output back to [main.js](https://github.com/morrijm4/kg_morrijm4_2022/blob/main/main.js) where it is printed to the console. I also included a file called [test.js](https://github.com/morrijm4/kg_morrijm4_2022/blob/main/tests/tests.js) for testing different edge cases.
