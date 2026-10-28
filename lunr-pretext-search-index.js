var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "author-bio",
  "level": "1",
  "url": "author-bio.html",
  "type": "Author Biography",
  "number": "",
  "title": "Author Biography",
  "body": " Alex Intern is a practice author. Replace this paragraph with a sentence about yourself.  "
},
{
  "id": "dedication",
  "level": "1",
  "url": "dedication.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": " For the next person who opens a PreTeXt file for the first time.  "
},
{
  "id": "acknowledgement",
  "level": "1",
  "url": "acknowledgement.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Thanks to the PreTeXt community, whose documentation made this book possible.  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "To the Intern",
  "body": " To the Intern  This small book is a workbook. It looks like an ordinary textbook, but every page was written to use one more PreTeXt feature than the page before. Read it in your browser, then open the source and see how each page was made.  The mathematics is deliberately gentle, so that you can concentrate on the markup.  "
},
{
  "id": "ch-starting-out",
  "level": "1",
  "url": "ch-starting-out.html",
  "type": "Chapter",
  "number": "1",
  "title": "Starting Out",
  "body": " Starting Out   Every chapter may begin with an introduction: text that comes before the first section. In this chapter you will meet the plain-text building blocks of a book: paragraphs, emphasis, quotations, special characters and lists.    Paragraphs and Emphasis   A paragraph is the basic unit of text. Write one idea per paragraph, and start a new p element for the next idea.  Use emphasis for ordinary stress. Use alert for a warning the reader must not miss. Use term the first time you introduce a technical word, such as divisor . Use c for computer text such as pretext build web .    Quotations, Dashes and Links  Quotations use double quotation marks , and a quotation inside a quotation uses single marks. Ranges use an en dash, as in pages 10 12. A break in a sentence uses an em dash like this. Trailing thoughts use an ellipsis . A footnote A footnote appears at the bottom of the page in print and in a pop-up online. is written inside the sentence it belongs to. A web link is written like this .    Characters That Need Care  XML reserves two characters. To print an ampersand write &amp; , so that Tom & Jerry displays correctly. To print a less-than sign write &lt; , so that <p> displays as a tag name.     Lists  A bulleted list, when the order does not matter:   chapters  sections  subsections   A numbered list, when the order matters, with a nested list inside the second item:   Write the source.   Build the book:   as a web page  as a PDF    Read the warnings.   A description list, for terms and their meanings:    Chapter  The largest division of a book that we use.    Section  A part of a chapter.     "
},
{
  "id": "sec-paragraphs-emphasis-2-2",
  "level": "2",
  "url": "ch-starting-out.html#sec-paragraphs-emphasis-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "term divisor "
},
{
  "id": "ch-mathematics",
  "level": "1",
  "url": "ch-mathematics.html",
  "type": "Chapter",
  "number": "2",
  "title": "Mathematics",
  "body": " Mathematics   PreTeXt writes mathematics in LaTeX notation. This chapter shows inline mathematics, displayed mathematics, numbered equations, aligned equations, and the macros defined in docinfo.ptx .    Inline and Displayed Mathematics  Mathematics inside a sentence goes in m . For example, the square of a number is , and belongs to the set of natural numbers. The shortcut \\N was defined once in docinfo.ptx .  Two characters need special spelling inside mathematics. Write \\lt for less-than and \\gt for greater-than, as in and . Write \\amp for a literal ampersand.  A formula that deserves its own line goes in md . Here is the sum of the first odd numbers:  . Notice that the full stop sits immediately after the closing tag, not inside it.    Numbered and Aligned Equations  A single numbered equation is an md with number=\"yes\" . Give it an xml:id so that you can refer to it:  . Equation is used below. Several lines that should line up on an equals sign also go in md , but with one mrow per line and \\amp marking the alignment point:  . When every line should be numbered, put number=\"yes\" on the md . A single line can be left unnumbered with number=\"no\" , and a numbered line can carry its own xml:id :  . The first line above is Equation .   "
},
{
  "id": "ch-theorems",
  "level": "1",
  "url": "ch-theorems.html",
  "type": "Chapter",
  "number": "3",
  "title": "Definitions, Theorems and Proofs",
  "body": " Definitions, Theorems and Proofs   Mathematical writing has its own building blocks. This chapter introduces definitions, theorems, lemmas, corollaries and proofs, then examples and remarks, then cross-references, index entries and citations.    Definitions, Theorems and Proofs   Divisibility  divisibility   Let and be integers. We say that  divides  , written , if there is an integer with .     Prime Number  prime number   An integer is prime if its only positive divisors are and .     Divisors of a Sum   If and , then .    By there are integers and with and . Then , and is an integer.     Sum of Odd Numbers  odd numbers sum of   For every natural number , the sum of the first odd numbers is .    We use induction on . For the sum is . Suppose the claim holds for . Then  , so the claim holds for .      The sum of the first ten odd numbers is .    Take in .      Examples and Remarks   A Greatest Common Divisor  greatest common divisor   Find the greatest common divisor of and .    Repeated division gives  . The last nonzero remainder is , so .      The number is not prime, because .     On Primes  The primes below are .    An Even Prime  The number is the only even prime.     Cross-References, Index and Citations  A cross-reference points to anything that has an xml:id . The default text names the target and its number, as in . You can ask for just the number, as in , or the title, as in . A reference to a whole chapter reads , and one to a section reads .  Index entries are invisible in the text. The entry for Euclid Euclid's proof that there are infinitely many primes is cited in . A general introduction to divisibility and primes is .   Infinitely Many Primes  prime number infinitude of   There are infinitely many prime numbers.    Suppose the primes were . Let . No divides , since each leaves remainder . But has a prime divisor, a contradiction.     "
},
{
  "id": "def-divides",
  "level": "2",
  "url": "ch-theorems.html#def-divides",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Divisibility.",
  "body": " Divisibility  divisibility   Let and be integers. We say that  divides  , written , if there is an integer with .   "
},
{
  "id": "def-prime",
  "level": "2",
  "url": "ch-theorems.html#def-prime",
  "type": "Definition",
  "number": "3.1.2",
  "title": "Prime Number.",
  "body": " Prime Number  prime number   An integer is prime if its only positive divisors are and .   "
},
{
  "id": "lem-divides-sum",
  "level": "2",
  "url": "ch-theorems.html#lem-divides-sum",
  "type": "Lemma",
  "number": "3.1.3",
  "title": "Divisors of a Sum.",
  "body": " Divisors of a Sum   If and , then .    By there are integers and with and . Then , and is an integer.   "
},
{
  "id": "thm-sum-odd",
  "level": "2",
  "url": "ch-theorems.html#thm-sum-odd",
  "type": "Theorem",
  "number": "3.1.4",
  "title": "Sum of Odd Numbers.",
  "body": " Sum of Odd Numbers  odd numbers sum of   For every natural number , the sum of the first odd numbers is .    We use induction on . For the sum is . Suppose the claim holds for . Then  , so the claim holds for .   "
},
{
  "id": "cor-sum-ten",
  "level": "2",
  "url": "ch-theorems.html#cor-sum-ten",
  "type": "Corollary",
  "number": "3.1.5",
  "title": "",
  "body": "  The sum of the first ten odd numbers is .    Take in .   "
},
{
  "id": "ex-gcd",
  "level": "2",
  "url": "ch-theorems.html#ex-gcd",
  "type": "Example",
  "number": "3.2.1",
  "title": "A Greatest Common Divisor.",
  "body": " A Greatest Common Divisor  greatest common divisor   Find the greatest common divisor of and .    Repeated division gives  . The last nonzero remainder is , so .   "
},
{
  "id": "ex-not-prime",
  "level": "2",
  "url": "ch-theorems.html#ex-not-prime",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "  The number is not prime, because .   "
},
{
  "id": "rem-primes",
  "level": "2",
  "url": "ch-theorems.html#rem-primes",
  "type": "Remark",
  "number": "3.2.3",
  "title": "On Primes.",
  "body": " On Primes  The primes below are .  "
},
{
  "id": "note-two",
  "level": "2",
  "url": "ch-theorems.html#note-two",
  "type": "Note",
  "number": "3.2.4",
  "title": "An Even Prime.",
  "body": " An Even Prime  The number is the only even prime.  "
},
{
  "id": "thm-infinite-primes",
  "level": "2",
  "url": "ch-theorems.html#thm-infinite-primes",
  "type": "Theorem",
  "number": "3.3.1",
  "title": "Infinitely Many Primes.",
  "body": " Infinitely Many Primes  prime number infinitude of   There are infinitely many prime numbers.    Suppose the primes were . Let . No divides , since each leaves remainder . But has a prime divisor, a contradiction.   "
},
{
  "id": "ch-tables-figures-code",
  "level": "1",
  "url": "ch-tables-figures-code.html",
  "type": "Chapter",
  "number": "4",
  "title": "Tables, Figures and Code",
  "body": " Tables, Figures and Code   This chapter adds material that is not running text: tables, figures with images, figures side by side, and code listings.    Tables  lists the first squares and cubes.   Squares and cubes        1 1 1  2 4 8  3 9 27  4 16 64  5 25 125  6 36 216      Figures and Images  shows the graph of .   The graph of   Graph of y equals x squared.   A U-shaped curve opening upward. It touches the horizontal axis at the origin and rises steeply to the left and to the right, symmetric about the vertical axis.     Two figures can sit next to each other in a sidebyside , as in and .    A right triangle   A right triangle with sides 3, 4 and 5.   A right triangle whose short sides are labelled 3 and 4 and whose longest side is labelled 5. The right angle is marked at the lower left.      Square numbers   Dot arrays showing 1, 4 and 9.   Three square arrays of dots: one dot, then two by two dots, then three by three dots, labelled 1, 4 and 9.        Code Listings  A numbered code listing wraps a program in a listing . tests whether a number is prime.   A primality test in Python   def is_prime(n): if n < 2: return False for d in range(2, int(n ** 0.5) + 1): if n % d == 0: return False return True print([p for p in range(2, 20) if is_prime(p)])    Running it prints the primes below 20:   python is_prime.py  [2, 3, 5, 7, 11, 13, 17, 19]    "
},
{
  "id": "table-powers",
  "level": "2",
  "url": "ch-tables-figures-code.html#table-powers",
  "type": "Table",
  "number": "4.1.1",
  "title": "Squares and cubes",
  "body": " Squares and cubes        1 1 1  2 4 8  3 9 27  4 16 64  5 25 125  6 36 216   "
},
{
  "id": "fig-parabola",
  "level": "2",
  "url": "ch-tables-figures-code.html#fig-parabola",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": " The graph of   Graph of y equals x squared.   A U-shaped curve opening upward. It touches the horizontal axis at the origin and rises steeply to the left and to the right, symmetric about the vertical axis.    "
},
{
  "id": "fig-triangle",
  "level": "2",
  "url": "ch-tables-figures-code.html#fig-triangle",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": " A right triangle   A right triangle with sides 3, 4 and 5.   A right triangle whose short sides are labelled 3 and 4 and whose longest side is labelled 5. The right angle is marked at the lower left.    "
},
{
  "id": "fig-squares",
  "level": "2",
  "url": "ch-tables-figures-code.html#fig-squares",
  "type": "Figure",
  "number": "4.2.3",
  "title": "",
  "body": " Square numbers   Dot arrays showing 1, 4 and 9.   Three square arrays of dots: one dot, then two by two dots, then three by three dots, labelled 1, 4 and 9.    "
},
{
  "id": "listing-is-prime",
  "level": "2",
  "url": "ch-tables-figures-code.html#listing-is-prime",
  "type": "Listing",
  "number": "4.3.1",
  "title": "A primality test in Python",
  "body": " A primality test in Python   def is_prime(n): if n < 2: return False for d in range(2, int(n ** 0.5) + 1): if n % d == 0: return False return True print([p for p in range(2, 20) if is_prime(p)])   "
},
{
  "id": "ch-exercises",
  "level": "1",
  "url": "ch-exercises.html",
  "type": "Chapter",
  "number": "5",
  "title": "Exercises",
  "body": " Exercises   Exercises can sit inside the text (inline) or be collected at the end of a section or chapter (divisional). Each may carry a hint, an answer and a full solution.    An Inline Exercise  Try this before reading on.   Is 91 Prime?   Decide whether is prime.    Try dividing by .    No.    Since , the number has the divisor and is not prime.      Chapter Exercises   Hints, answers and solutions appear in the back of the book.     Find .    Use repeated division, as in .       We have and , so the answer is .     Expanding   Expand each expression.                 Sums of Odd Numbers   Use .    Find the sum of the first odd numbers.     How many odd numbers, starting from , add up to ?  Solve .      A Proof   Prove that if then for every integer .    Start from .    Write . Then , and is an integer.     "
},
{
  "id": "ex-inline-91",
  "level": "2",
  "url": "ch-exercises.html#ex-inline-91",
  "type": "Checkpoint",
  "number": "5.1.1",
  "title": "Is 91 Prime?",
  "body": " Is 91 Prime?   Decide whether is prime.    Try dividing by .    No.    Since , the number has the divisor and is not prime.   "
},
{
  "id": "ex-gcd-84-36",
  "level": "2",
  "url": "ch-exercises.html#ex-gcd-84-36",
  "type": "Exercise",
  "number": "5.2.1",
  "title": "",
  "body": "  Find .    Use repeated division, as in .       We have and , so the answer is .   "
},
{
  "id": "ex-expand-a",
  "level": "2",
  "url": "ch-exercises.html#ex-expand-a",
  "type": "Exercise",
  "number": "5.2.2",
  "title": "",
  "body": "   "
},
{
  "id": "ex-expand-b",
  "level": "2",
  "url": "ch-exercises.html#ex-expand-b",
  "type": "Exercise",
  "number": "5.2.3",
  "title": "",
  "body": "   "
},
{
  "id": "ex-expand-c",
  "level": "2",
  "url": "ch-exercises.html#ex-expand-c",
  "type": "Exercise",
  "number": "5.2.4",
  "title": "",
  "body": "   "
},
{
  "id": "ex-odd-sums",
  "level": "2",
  "url": "ch-exercises.html#ex-odd-sums",
  "type": "Exercise",
  "number": "5.2.5",
  "title": "Sums of Odd Numbers.",
  "body": " Sums of Odd Numbers   Use .    Find the sum of the first odd numbers.     How many odd numbers, starting from , add up to ?  Solve .    "
},
{
  "id": "ex-proof-multiple",
  "level": "2",
  "url": "ch-exercises.html#ex-proof-multiple",
  "type": "Exercise",
  "number": "5.2.6",
  "title": "A Proof.",
  "body": " A Proof   Prove that if then for every integer .    Start from .    Write . Then , and is an integer.   "
},
{
  "id": "ch-interactives",
  "level": "1",
  "url": "ch-interactives.html",
  "type": "Chapter",
  "number": "6",
  "title": "Interactive Content",
  "body": " Interactive Content   The web version of a book can contain live content. These examples need an internet connection when you view them. In the PDF version they appear as static placeholders.    GeoGebra  A GeoGebra applet is loaded by its material identifier, the code at the end of its web address.   A GeoGebra applet      Desmos  A Desmos graph is loaded by its identifier, the code at the end of its share address.   A Desmos graph      Embedding an External Page  Anything that offers an embed address can be placed in the book with an iframe attribute. This is also how you embed a question that is hosted on another site.   An externally hosted simulation       "
},
{
  "id": "fig-geogebra",
  "level": "2",
  "url": "ch-interactives.html#fig-geogebra",
  "type": "Figure",
  "number": "6.1.1",
  "title": "",
  "body": " A GeoGebra applet   "
},
{
  "id": "fig-desmos",
  "level": "2",
  "url": "ch-interactives.html#fig-desmos",
  "type": "Figure",
  "number": "6.2.1",
  "title": "",
  "body": " A Desmos graph   "
},
{
  "id": "fig-iframe",
  "level": "2",
  "url": "ch-interactives.html#fig-iframe",
  "type": "Figure",
  "number": "6.3.1",
  "title": "",
  "body": " An externally hosted simulation   "
},
{
  "id": "backmatter-1",
  "level": "1",
  "url": "backmatter-1.html",
  "type": "Appendix",
  "number": "A",
  "title": "Hints, Answers and Solutions",
  "body": " Hints, Answers and Solutions  "
},
{
  "id": "references",
  "level": "1",
  "url": "references.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " References  Euclid. The Thirteen Books of the Elements . Translated by T. L. Heath. Dover, 1956.  G. H. Hardy and E. M. Wright. An Introduction to the Theory of Numbers . Oxford University Press, 6th edition, 2008.  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was written in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
